export const makeId = (length) => {
  let res = '0x';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYSabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    res += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  if (length > 8) {
    return `${res.slice(0, 5)}...${res.slice(length - 3, length)}`;
  }
  return res;
};
