import type { NextPage } from 'next';
import { Modal } from '@/components/ui/organisms/Modal/Modal';
import Tag from '@/components/ui/atoms/Tag';
import { useState } from 'react';
import Button from '@/components/ui/atoms/Button';
import Form from '@/components/ui/organisms/Form/Form';
import * as S from '../styles/modalStyled';
import ServiceDetail from '@/components/ui/organisms/ServiceDetail/ServiceDetail';
import { BigCalendar } from '@/components/features/Calendar';
import Header from '@/components/features/Header';

interface ICategories {
}

interface ILogo {
}

const HomePage: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const categoryArr:ICategories[] = ['OTT', '음악', '도서', '쇼핑', '프로그램'];
  const AllLogoArr:ILogo[] = ['', '', '', '', '', '', '', '', '', ''];

  const onClickhandler = () => {
    console.log('test consolelog');
    setFirst(false);
    setSecond(true);
  };

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onClickFilter = () => {
    console.log('filter');
  };

  return (
    <>
      <Header />
      <BigCalendar />
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
                {categoryArr.map((category, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Tag onClick={onClickFilter} key={index}>{category}</Tag>
                ))}
              </S.TagBox>
              <S.LogoBox>
                {AllLogoArr.map((logo, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <S.Logo onClick={onClickhandler} key={index}>{logo}</S.Logo>
                ))}
              </S.LogoBox>
            </>
            )}
            {second && (
              <div style={{display:'flex'}}>
                <ServiceDetail />
                <Form />
              </div>
            )}
          </S.SubScribeContainer>
        </Modal>
      )}
    </>
  );
};
export default HomePage;
