import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './styled';
import Button from '../../atoms/Button';

interface IForm {
  price: string,
  memo: string,
  date: Date,
  cycle: string,
}

const handleClickRegisterButton = () => {
  console.log('등록버튼 클릭');
};

const handleClickCancelButton = () => {
  console.log('취소버튼 클릭');
};

function Form() {
  const {
    handleSubmit, register, formState: { errors },
  } = useForm<IForm>();
  const onSubmit : SubmitHandler<IForm> = (data) => {
    console.log(data);
  };
  return (
    <S.Form className="1234" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="date">
        <S.Title>결제일</S.Title>
        <S.Input
          id="date"
          type="date"
          {
          ...register('date', {
            required: {
              value: true,
              message: '결제일을 입력해주세요.',
            },
          })}
        />
      </label>
      {errors.date && <S.ErrorMessage>errors.message</S.ErrorMessage>}
      <label htmlFor="cycle">
        <S.Title>결제주기</S.Title>
        <S.Input
          id="cycle"
          {
          ...register('cycle', {
            required: {
              value: true,
              message: '결제주기를 입력해주세요',
            },
          })}
        />
      </label>
      {errors.cycle && <S.ErrorMessage>errors.message</S.ErrorMessage>}
      <label htmlFor="price">
        <S.Title>결제금액</S.Title>
        <S.Input
          id="price"
          {
          ...register('price', {
            required: {
              value: true,
              message: '결제금액을 입력해주세요',
            },
          })}
        />
      </label>
      {errors.price && <S.ErrorMessage>errors.message</S.ErrorMessage>}
 
      <label htmlFor="memo">
        <S.Title>메모</S.Title>
        <S.Input
          id="memo"
          {
            ...register('memo')
        }
        />
      </label>
      <div style={{ display: 'flex', marginTop: 30, justifyContent: 'flex-end' }}>
        <Button onClick={handleClickRegisterButton}>등록</Button>
        <div style={{ paddingRight: 10 }} />
        <Button onClick={handleClickCancelButton}>취소</Button>
      </div>
    </S.Form>
  );
}

export default Form;
