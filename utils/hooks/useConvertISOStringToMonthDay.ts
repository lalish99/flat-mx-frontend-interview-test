const useConvertISOStringToMonthDay = (date: Date | string | number) => {
  const tempDate = new Date(date).toString().split(' ');
  const formattedDate = `${tempDate[1]} ${+tempDate[2]} ${tempDate[3]}`;
  return formattedDate;
};

export default useConvertISOStringToMonthDay;