import dayjs from 'dayjs'

/**
 * 获取指定月份的1号是星期几
 * @param year 年份
 * @param month 月份(1-12)
 * @returns 星期几 0(星期日)到6(星期六)
 */
export const getFirstWeekDay = (year:number, month:number):number => {
  return dayjs(`${year}-${month}-1`).day()
}

/**
 * 获取指定月份有几天
 * @param year 年份
 * @param month 月份(1-12)
 * @returns 
 */
export const getMonthDayCount = (year:number, month:number):number => {
  return dayjs(`${year}-${month}`).daysInMonth()
}

/**
 * 获取指定月份要展示上个月的天数
 * @param year 
 * @param month 
 * @returns 
 */
export const getLastMonthRestDay = (year:number, month:number):number[] => {
  const days = getFirstWeekDay(year, month);
  let lastDate = getMonthDayCount(year, month - 1);
  const restDayArr:number[] = [];
  while(restDayArr.length < days) {
    restDayArr.push(lastDate--)
  }
  return restDayArr.reverse()
}

/**
 * 获取下个月 在本月日历要显示的天数
 * @param year 
 * @param month 
 */
export const getNextMonthResDays = (year:number, month:number) => {
  const lastMonthRestDaysCount = getFirstWeekDay(year, month);
  const currentMonthDayCount = getMonthDayCount(year, month);
  const nextMonthRestDaysCount = 7 - (lastMonthRestDaysCount + currentMonthDayCount) % 7;
  console.log(nextMonthRestDaysCount);

  const restDays = [];

  for(let i = 0; i < nextMonthRestDaysCount; i++) {
    restDays.push(i + 1)
  }
  return restDays
}

/**
 * 根据指定的时间戳获取日期(年月日)
 * @param timeStamp 时间戳
 * @returns 
 */
export const getDagteInfo = (timeStamp?:number ):{year:number, month:number, day:number} => {
  const date = timeStamp ? new Date(timeStamp) : new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  }
}

export const getFormatDate = (year:number, month:number, day:number) => {
  
}
