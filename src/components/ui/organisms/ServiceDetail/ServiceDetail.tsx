import React from 'react';
import * as S from './styled';

const ServiceDetail = () => {
  console.log('keep return');
  return (
    <S.DetailContainer>
      <div style={{
        width: '250px', height: '250px', borderRadius: '50%', background: 'red',
      }}
      />
      <S.FirstBox>
        <S.ServiceTitle>상품</S.ServiceTitle>
        <S.ServiceTitle2>넷플릭스</S.ServiceTitle2>
        <S.ServiceTitle3>서비스 바로가기</S.ServiceTitle3>
      </S.FirstBox>
      <S.CategoryBox>
        <S.Category>카테고리</S.Category>
        <S.Category2>OTT</S.Category2>
      </S.CategoryBox>
      <S.SimilarBox>
        <S.SimilarService>유사한 서비스</S.SimilarService>
        <S.SimilarServiceLogoBox>
          <S.SimilarServiceLogo>Logo</S.SimilarServiceLogo>
          <S.SimilarServiceLogo>Logo</S.SimilarServiceLogo>
          <S.SimilarServiceLogo>Logo</S.SimilarServiceLogo>
        </S.SimilarServiceLogoBox>
      </S.SimilarBox>
    </S.DetailContainer>
  );
};

export default ServiceDetail;
