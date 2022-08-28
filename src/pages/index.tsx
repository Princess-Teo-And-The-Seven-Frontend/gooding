import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';

import { Modal } from '@/components/ui/organisms/Modal/Modal';
import Tag from '@/components/ui/atoms/Tag';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/atoms/Button';
import Form from '@/components/ui/organisms/Form/Form';
import ServiceDetail from '@/components/ui/organisms/ServiceDetail/ServiceDetail';
import { CalendarContainer } from '@/components/features/Calendar';
import Header from '@/components/features/Header';
import { Login } from '@/components/features/Login';
import { userNickname } from '@/store/atom';
import { SERVICES } from '@/constants/index';
import { getLocalstorage } from '@/utils';

import * as S from '../styles/modalStyled';

interface ISelectedServiceData {
  id: number;
  name: string;
  category: string;
  subscriptionFee: number;
  image: string
}

const HomePage: NextPage = () => {
  const [nickname, setNickname] = useRecoilState(userNickname);
  const [isOpen, setIsOpen] = useState(false);
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('비디오');
  const [isClick, setIsClick] = useState(false);
  const [selectedServiceData, setSelectedServiceData] = useState<ISelectedServiceData | null>(null);

  const categoryArray = Array.from(new Set(SERVICES.map((service) => service.category))).map((category, index) => {
    const categoryUnit = {
      id: index,
      category,
    };
    return categoryUnit;
  });

  const selectedServices = SERVICES.filter((service) => service.category === selectedCategory);

  const similarServices = selectedServices.filter((service) => service.id !== selectedServiceData?.id).slice(0, 3);

  const onClickhandler = (selectedLogoId : number) => {
    SERVICES.forEach((selectedService) => {
      if (selectedService.id === selectedLogoId) {
        setSelectedServiceData(selectedService);
      }
    });
    setFirst(false);
    setSecond(true);
  };

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onClickFilter = (category:string) => {
    setSelectedCategory(category);
    setIsClick(!isClick);
  };

  useEffect(() => {
    const user = getLocalstorage();
    if (user) setNickname(user.nickname);
  }, []);

  return (
    <div>
      {nickname ? (
        <div>
          <Header />
          <CalendarContainer />
          <Button onClick={onClick}>Open</Button>
          {isOpen && (
          <Modal width={1390} height={805}>
            <S.SubScribeContainer>
              {first && (
              <>
                <S.CloseBtn>
                  <Button onClick={onClick}>X</Button>
                </S.CloseBtn>
                <S.Title>구독 중인 서비스가 있나요?</S.Title>
                <S.TagBox>
                  {categoryArray.map(({ category, id }) => (
                    <Tag onClick={() => onClickFilter(category)} isSelected={selectedCategory === category} key={id}>
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
              )}
              {second && (
              <div style={{ display: 'flex' }}>
                <ServiceDetail serviceData={selectedServiceData} selectedServices={similarServices} />
                <Form serviceData={selectedServiceData} />
              </div>
              )}
            </S.SubScribeContainer>
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
