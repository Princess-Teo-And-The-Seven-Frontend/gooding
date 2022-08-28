import React from 'react';
import * as S from './styled';

interface InputProps {
  inputName: string;
  isError: boolean;
  borderColor: 'black';
  color: 'black' | 'red' | 'grey';
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  onFocus: () => void;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  inputName,
  isError,
  borderColor,
  color,
  onChange,
  onFocus,
  onKeyDown,
  placeholder,
}) => (
  <S.Input
    isError={isError}
    borderColor={borderColor}
    color={color}
    name={inputName}
    onChange={onChange}
    onKeyDown={onKeyDown}
    onFocus={onFocus}
    placeholder={placeholder}
  />
);
