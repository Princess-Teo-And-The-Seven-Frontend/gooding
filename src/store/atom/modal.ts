import { atom } from 'recoil';

export interface IModalAtom {
  isOpen: boolean;
  isClicked: boolean;
  selectedCategory: string;
  isWorning: {
    hasSubscribe: boolean;
    isDuplicate: boolean;
  };
}

export const modalAtom = atom<IModalAtom>({
  key: 'modalState',
  default: {
    isOpen: false,
    isClicked: false,
    selectedCategory: '비디오',
    isWorning: {
      hasSubscribe: false,
      isDuplicate: false,
    },
  },
});
