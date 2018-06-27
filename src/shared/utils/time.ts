import { TimeUnit } from '../enums';

export const getTimeWithZero = (time: number) => (time < 10 ? `0${time}` : time);

export const getTime = (date?: Date, timeUnit: TimeUnit = TimeUnit.am, minutes: boolean = true) => {
  if (date == null) date = new Date();

  let hours = date.getHours();
  if (hours > 12 && timeUnit === TimeUnit.pm) hours -= 12;

  return `${getTimeWithZero(hours)}${minutes ? ':' : ''}${
    minutes ? getTimeWithZero(date.getMinutes()) : ''
  } ${TimeUnit[timeUnit].toUpperCase()}`;
};

export const getDay = (days: any, date: Date) => {
  const index = date.getDay() === 0 ? days.length - 1 : date.getDay() - 1;
  return days[index];
};

export const getTimeOffset = (date: Date) => {
  date = new Date(2018, 5, 27, 23, 0, 0, 0);
  const currentdate = new Date(2018, 5, 27, 23, 10, 0, 0);
  const diff = new Date(currentdate.getTime() - date.getTime());

  const hours = diff.getHours();
  const minutes = diff.getMinutes();

  if (hours === 0) {
    return `${minutes} minutes ago`;
  }

  return '';
};
