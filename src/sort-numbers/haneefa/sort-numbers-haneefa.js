export const sortNumbers = (arrOfNumbers = []) => {
  let num = [];
  const arr = [...arrOfNumbers];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        num = arr[j];
        arr[j] = arr[i];
        arr[i] = num;
      }
    }
  }
  return arr;
};
