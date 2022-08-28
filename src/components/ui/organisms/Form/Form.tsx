import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import Swal from 'sweetalert2';

import { modalAtom } from '@/store/atom';
import { SubmitButton } from '@/components/ui/atoms/SubmitButton';
import * as S from './styled';
import Button from '../../atoms/Button';

interface IForm {
  price: string;
  memo: string;
  date: Date;
  message: string;
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
  serviceData: ServiceType | null;
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
  const setModalState = useSetRecoilState(modalAtom);

  const successAlert = (data: string | undefined) => {
    Swal.fire({
      title: `${data} 구독을 추가했습니다!`,
      icon: 'success',
      showConfirmButton: false,
      timer: 1200,
      timerProgressBar: true,
    });
  };

  const handleClickCancelButton = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
      isClicked: false,
      selectedCategory: '비디오',
    }));
  };

  const onSubmit: SubmitHandler<IForm> = () => {
    const userData = localStorage.getItem('gooding_user_data');
    if (!userData) {
      const registerData = [Object.assign(serviceData!, watch())];
      localStorage.setItem('gooding_user_data', JSON.stringify(registerData));
      successAlert(serviceData?.name);
      setModalState((prev) => ({
        ...prev,
        isOpen: false,
        isClicked: false,
      }));
      return;
    }
    if (
      userData
      && !JSON.parse(userData).find((user: ServiceType) => user.id === serviceData?.id)
    ) {
      const registerData = [...JSON.parse(userData), Object.assign(serviceData!, watch())];
      localStorage.setItem('gooding_user_data', JSON.stringify(registerData));
      successAlert(serviceData?.name);
      setModalState((prev) => ({
        ...prev,
        isOpen: false,
        isClicked: false,
      }));
    } else {
      setModalState((prev) => ({
        ...prev,
        isWorning: {
          isDuplicate: true,
          hasSubscribe: false,
        },
      }));
    }
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
      {errors.date?.type === 'required' && <S.ErrorMessage>결제일을 입력해주세요</S.ErrorMessage>}
      <S.Title>결제주기</S.Title>
      <S.Input id="cycle" as="select" {...register('cycle')}>
        <option value="1주일">1주일</option>
        <option value="1개월">1개월</option>
        <option value="3개월">3개월</option>
        <option value="6개월">6개월</option>
        <option value="1년">1년</option>
      </S.Input>
      <S.Title>결제금액</S.Title>
      <S.Input
        id="price"
        step="10"
        type="number"
        {...register('price', {
          required: {
            value: true,
            message: '결제금액을 입력해주세요',
          },
        })}
      />
      {errors.price && <S.ErrorMessage>결제금액을 입력해주세요.</S.ErrorMessage>}

      <S.Title>메모</S.Title>
      <S.Input as="textarea" id="memo" {...register('memo')} />
      <div>
        <SubmitButton>등록</SubmitButton>
        <Button onClick={handleClickCancelButton}>취소</Button>
      </div>
    </S.Form>
  );
}
export default Form;
