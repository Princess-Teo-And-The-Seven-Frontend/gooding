import { atom } from 'recoil';

export const userNickname = atom({
  key: 'nickname',
  default: '',
});
