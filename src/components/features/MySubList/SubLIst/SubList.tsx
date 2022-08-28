import React from 'react';
import LogoImage from '@components/ui/atoms/LogoImage';
import { ServiceDataType } from '@/types/dataType';

import * as S from './styled';

interface IProps {
  userData: ServiceDataType[];
}

const SubList: React.FC<IProps> = ({ userData }) => {
  // 로고 클릭하면 수정모달창이 뜰 예정입니다
  const handleLogoClick = (name: string) => console.log(name);

  return (
    <div>
      <S.SubsContainer>
        {userData?.map((item) => (
          <LogoImage
            key={item.id}
            src={item.image}
            name={item.name}
            price={+item.price}
            shape="hover"
            size={170}
            onClick={() => handleLogoClick(item.name)}
          />
        ))}
      </S.SubsContainer>
    </div>
  );
};

export default SubList;
