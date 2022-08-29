import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';

import { Modal } from '@/components/ui/organisms/Modal/Modal';
import Tag from '@/components/ui/atoms/Tag';
import { useEffect, useState } from 'react';
import AddDataButton from '@/components/ui/atoms/AddDataButton';
import Button from '@/components/ui/atoms/Button';
import Form from '@/components/ui/organisms/Form/Form';
import ServiceDetail from '@/components/ui/organisms/ServiceDetail/ServiceDetail';
import { CalendarContainer } from '@/components/features/Calendar';
import Header from '@/components/features/Header';
import { Login } from '@/components/features/Login';
import { userNickname, modalAtom } from '@/store/atom';
import { SERVICES } from '@/constants/index';
import { getLocalstorage } from '@/utils';
import MyPage from '@/components/features/MyPage';
import * as S from '../styles/modalStyled';

interface ISelectedServiceData {
  id: number;
  name: string;
  category: string;
  subscriptionFee: number;
  image: string;
}

const HomePage: NextPage = () => {
  const [isMain, setIsMain] = useState(true);
  const [nickname, setNickname] = useRecoilState(userNickname);
  const [modalState, setModalState] = useRecoilState(modalAtom);
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

  // 나중에 플러스 버튼에 들어 갈 함수 함수명 추천받습니다.
  const onClick = () => {
    setModalState((prev) => ({ ...prev, isOpen: !modalState.isOpen, selectedCategory: '비디오' }));
  };

  const onClickFilter = (category: string) => {
    setModalState((prev) => ({ ...prev, selectedCategory: category }));
  };

  useEffect(() => {
    const user = getLocalstorage();
    if (user) setNickname(user.nickname);
  }, []);

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
    <div>
      {nickname ? (
        <div>
          <Header isMain={isMain} setIsMain={setIsMain} />
          {isMain ? (
            <div>
              <CalendarContainer>
                <AddDataButton onClick={onClick}>+</AddDataButton>
              </CalendarContainer>
            </div>
          ) : (
            <MyPage />
          )}
          {modalState.isOpen
          && !(modalState.isWorning.hasSubscribe || modalState.isWorning.isDuplicate) && (
          <Modal width={1390} height={805}>
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
                      <S.Logo src={image} onClick={() => onClickhandler(id)} key={id} />
                    ))}
                  </S.LogoBox>
                </>
              ) : (
                <div style={{ display: 'flex' }}>
                  <ServiceDetail
                    serviceData={selectedServiceData}
                    selectedServices={similarServices}
                  />
                  <Form serviceData={selectedServiceData} />
                </div>
              )}
            </S.SubScribeContainer>
          </Modal>
          )}
          {(modalState.isWorning.hasSubscribe || modalState.isWorning.isDuplicate) && (
            <Modal width={1390} height={805}>
              {modalState.isWorning.isDuplicate && <div>중복된 구독서비스가 존재해요!</div>}
              {modalState.isWorning.hasSubscribe && <div>구독정보가 등록되지 않았어요</div>}
              {/* {modalState.isWorning.isTerminate && <div>실제 구독 서비스의 해지는 홈페이지에서 진행해야 해요!</div>} */}
              <button type="button" onClick={clearState}>
                확인
              </button>
            </Modal>
          )}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default HomePage;
