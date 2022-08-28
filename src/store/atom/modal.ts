import { atom } from 'recoil';

export const modalAtom = atom({
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
