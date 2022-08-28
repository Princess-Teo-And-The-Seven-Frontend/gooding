import React, { useState } from 'react';
import Tag from '@/components/ui/atoms/Tag';
import { SERVICES } from '@/constants/index';
import { ServiceDataType } from '@/types/dataType';
import SubList from './SubLIst/SubList';

import * as S from './styled';

interface IProps {
  serviceData: ServiceDataType[];
}

const SubsListContainer: React.FC<IProps> = ({ serviceData }) => {
  const [selectedCategory, setSelectedCategory] = useState('비디오');

  const handleSelected = (category: string) => setSelectedCategory(category);

  const selectedServices = serviceData?.filter((service) => service.category === selectedCategory);

  const categoryArray = Array.from(new Set(SERVICES.map((service) => service.category))).map(
    (category, index) => {
      const categoryUnit = {
        id: index,
        category,
      };
      return categoryUnit;
    },
  );

  return (
    <S.Div>
      <S.Text>내가 구독 중인 서비스 ✨ </S.Text>
      <S.TagContainer>
        {categoryArray.map((item) => (
          <Tag
            isSelected={item.category === selectedCategory}
            onClick={() => handleSelected(item.category)}
            key={item.id}
          >
            {item.category}
          </Tag>
        ))}
      </S.TagContainer>
      <SubList userData={selectedServices} />
    </S.Div>
  );
};

export default SubsListContainer;
