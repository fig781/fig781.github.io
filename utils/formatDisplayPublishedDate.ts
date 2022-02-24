const formattedPublished = (published: string) => {
  //from 2022-01-31 to 01-31-2022

  if (published === null || published === undefined) return '';

  let arr: string[] = published.split('');
  arr.push('-');
  let year = arr.splice(0, 4);
  arr = arr.concat(year);
  arr.shift();

  return arr;
};

export default formattedPublished;
