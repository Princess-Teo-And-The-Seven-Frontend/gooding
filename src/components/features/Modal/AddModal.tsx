import React, { Dispatch, SetStateAction, useState } from 'react';
import Button from '@/components/ui/atoms/Button';
import Form from '@/components/ui/organisms/Form/Form';
import Tag from '@/components/ui/atoms/Tag';
import { Modal } from '@/components/ui/organisms/Modal/Modal';
import { SERVICES } from '@/constants/index';
import ServiceDetail from '@/components/ui/organisms/ServiceDetail/ServiceDetail';
import { ISelectedServiceData } from '@/types/dataType';
import LogoImage from '@/components/ui/atoms/LogoImage';
import { IModalAtom } from '@/store/atom';
import * as S from './styled';

interface IProps {
  modalState: IModalAtom;
  setModalState: Dispatch<SetStateAction<IModalAtom>>;
}

const AddModal = ({ modalState, setModalState }: IProps) => {
  const [selectedServiceData, setSelectedServiceData] = useState<ISelectedServiceData | null>(null);
  const categoryArray = Array.from(new Set(SERVICES.map((service) => service.category))).map(
    (category, index) => {
      const categoryUnit = {
        id: index,
        category,
      };
      return categoryUnit;
    },
  );

  const selectedServices = SERVICES.filter(
    (service) => service.category === modalState.selectedCategory,
  );

  const similarServices = selectedServices
    .filter((service) => service.id !== selectedServiceData?.id)
    .slice(0, 3);

  const onClickhandler = (selectedLogoId: number) => {
    SERVICES.forEach((selectedService) => {
      if (selectedService.id === selectedLogoId) {
        setSelectedServiceData(selectedService);
      }
    });
    setModalState((prev) => ({ ...prev, isClicked: true }));
  };

  const onClick = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: !modalState.isOpen,
      selectedCategory: '비디오',
    }));
  };

  const onClickFilter = (category: string) => {
    setModalState((prev) => ({ ...prev, selectedCategory: category }));
  };

  const clearState = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
      isClicked: false,
      isWorning: {
        isDuplicate: false,
        hasSubscribe: false,
      },
    }));
  };

  return (
    <Modal width={1000} height={600}>
      {!(modalState.isWorning.hasSubscribe || modalState.isWorning.isDuplicate) ? (
        <S.SubScribeContainer>
          {!modalState.isClicked ? (
            <>
              <S.CloseBtn>
                <Button onClick={onClick}>X</Button>
              </S.CloseBtn>
              <S.Title>구독 중인 서비스가 있나요?</S.Title>
              <S.TagBox>
                {categoryArray.map(({ category, id }) => (
                  <Tag
                    onClick={() => onClickFilter(category)}
                    isSelected={modalState.selectedCategory === category}
                    key={id}
                  >
                    {category}
                  </Tag>
                ))}
              </S.TagBox>
              <S.LogoBox>
                {selectedServices.slice(0, 10).map(({ image, id }) => (
                  <LogoImage src={image} onClick={() => onClickhandler(id)} key={id} size={150} />
                  //   <S.Logo src={image} onClick={() => onClickhandler(id)} key={id} />
                ))}
              </S.LogoBox>
            </>
          ) : (
            <div style={{ display: 'flex' }}>
              <ServiceDetail serviceData={selectedServiceData} selectedServices={similarServices} />
              <Form serviceData={selectedServiceData} />
            </div>
          )}
        </S.SubScribeContainer>
      ) : (
        <>
          {modalState.isWorning.isDuplicate && (
            <S.WarningMessage>중복된 구독서비스가 존재해요!</S.WarningMessage>
          )}
          {modalState.isWorning.hasSubscribe && <div>구독정보가 등록되지 않았어요</div>}
          <Button onClick={clearState}>확인</Button>
        </>
      )}
      ;
    </Modal>
  );
};

export default AddModal;
