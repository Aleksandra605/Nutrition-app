import moment from 'moment';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let createWeek = () => {
  let arr = [0, 1, 2, 3, 4, 5, 6];
  let days = [];

  let weekDay = arr.find((el) => new Date().getDay() === el);
  let x = weekDay;

  let a = 0;

  for (let i = 0; i < weekDay; i++) {
    days.push([weekDays[i], moment().subtract(x, 'd').format('LL')]);
    --x;
  }

  for (let i = weekDay; i < arr.length; i++) {
    days.push([weekDays[i], moment().add(a, 'd').format('LL')]);
    ++a;
  }

  return days;
};

export default createWeek;
