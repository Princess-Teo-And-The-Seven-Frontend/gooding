import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './styled';
import Button from '../../atoms/Button';

interface IForm {
  price: string;
  memo: string;
  date: Date;
  cycle: string;
}

interface ServiceType {
  id: number;
  name: string;
  category: string;
  subscriptionFee: number;
  image: string;
}

interface IFormData {
  serviceData : ServiceType | null;
}

function Form({ serviceData }: IFormData) {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      price: serviceData?.subscriptionFee.toString(),
    },
  });
  const handleClickRegisterButton = () => {
    const userData = localStorage.getItem('gooding_user_data');
    if (userData) {
      const registerData = [...JSON.parse(userData), Object.assign(serviceData!, watch())];
      localStorage.setItem('gooding_user_data', JSON.stringify(registerData));
    } else {
      localStorage.setItem('gooding_user_data', JSON.stringify([Object.assign(serviceData!, watch())]));
    }
  };
  const handleClickCancelButton = () => {
    console.log('취소버튼 클릭');
  };

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Title>결제일</S.Title>
      <S.Input
        id="date"
        type="date"
        {...register('date', {
          required: {
            value: true,
            message: '결제일을 입력해주세요.',
          },
        })}
      />
      {errors.date && <S.ErrorMessage>errors.message</S.ErrorMessage>}
      <S.Title>결제주기</S.Title>
      <S.Input
        id="cycle"
        as="select"
        {...register('cycle', {
          required: {
            value: true,
            message: '결제주기를 선택해주세요.',
          },
        })}
      >
        <option value="1주일">1주일</option>
        <option value="1개월">1개월</option>
        <option value="3개월">3개월</option>
        <option value="6개월">6개월</option>
        <option value="1년">1년</option>
      </S.Input>
      {errors.cycle && <S.ErrorMessage>errors.message</S.ErrorMessage>}
      <S.Title>결제금액</S.Title>
      <S.Input
        id="price"
        {...register('price', {
          required: {
            value: true,
            message: '결제금액을 입력해주세요',
          },
        })}
      />
      {errors.price && <S.ErrorMessage>errors.message</S.ErrorMessage>}

      <S.Title>메모</S.Title>
      <S.Input as="textarea" id="memo" {...register('memo')} />
      <div style={{ display: 'flex', marginTop: 30, justifyContent: 'flex-end' }}>
        <Button onClick={handleClickRegisterButton}>등록</Button>
        <div style={{ paddingRight: 10 }} />
        <Button onClick={handleClickCancelButton}>취소</Button>
      </div>
    </S.Form>
  );
}

export default Form;
