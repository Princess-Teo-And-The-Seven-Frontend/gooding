import React from 'react';
import Input from '@/components/ui/atoms/Input';
import * as S from './styled';

interface FormInputProps {
  inputName: string;
  placeholder: string;
  isError: boolean;
  borderColor: 'black';
  color: 'black' | 'red' | 'grey';
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  onFocus: () => void;
  betweenSpace: number;
  errorMsg: string;
}

export const FormInput = ({
  inputName,
  isError,
  borderColor,
  color,
  onChange,
  onFocus,
  onKeyDown,
  placeholder,
  betweenSpace = 0,
  errorMsg,
}: FormInputProps) => (
  <S.Inputcontainer betweenSpace={betweenSpace}>
    <Input
      inputName={inputName}
      isError={isError}
      borderColor={borderColor}
      color={color}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      placeholder={placeholder}
    />
    {errorMsg && <div>{errorMsg}</div>}
  </S.Inputcontainer>
);
