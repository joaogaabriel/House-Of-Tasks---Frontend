export const validateExpireStringDate = (value: string) => {
  const date = new Date(value);
  if (date > new Date()) return true;
  return false;
};

export const validateExpireStoredStringDate = (value: string) => {
  const expirationDate = new Date(JSON.parse(value));

  // Get the current date
  const currentDate = new Date();

  // Compare current date with expiration date
  return currentDate <= expirationDate;
};
