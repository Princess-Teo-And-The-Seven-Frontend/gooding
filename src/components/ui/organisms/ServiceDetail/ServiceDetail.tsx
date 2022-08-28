import React from 'react';
import * as S from './styled';

interface ServiceType {
  id: number;
  name: string;
  category: string;
  subscriptionFee: number;
  image: string;
}
interface IFormData {
  serviceData : ServiceType | null;
  selectedServices: ServiceType[];
}

const ServiceDetail = ({ serviceData, selectedServices } : IFormData) => (
  <S.DetailContainer>
    <S.Image src={serviceData?.image} alt={serviceData?.name} />
    <S.FirstBox>
      <S.ServiceTitle>상품</S.ServiceTitle>
      <S.ServiceTitle2>{serviceData?.name}</S.ServiceTitle2>
    </S.FirstBox>
    <S.CategoryBox>
      <S.Category>카테고리</S.Category>
      <S.Category2>{serviceData?.category}</S.Category2>
    </S.CategoryBox>
    {selectedServices.length > 0 && (
      <S.SimilarBox>
        <S.SimilarService>유사한 서비스</S.SimilarService>
        <S.SimilarServiceLogoBox>
          {selectedServices.map((service) => (
            <S.SimilarServiceLogo key={`ServiceDetail-SimilarServiceLogoBox-${service.name}`}>
              <S.SimilarServiceLogoImg src={service.image} alt={service.name} />
            </S.SimilarServiceLogo>
          ))}
        </S.SimilarServiceLogoBox>
      </S.SimilarBox>
    )}
  </S.DetailContainer>
);

export default ServiceDetail;
