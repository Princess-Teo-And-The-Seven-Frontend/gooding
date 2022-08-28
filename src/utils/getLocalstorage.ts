export const getLocalstorage = () => {
  const user = JSON.parse(localStorage.getItem('gooding') as string);
  if (user) return user;
  return '';
};
