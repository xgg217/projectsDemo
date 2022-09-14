import dayjs from 'dayjs'

/**
 * 获取指定月份的1号是星期几
 * @param year 年份
 * @param month 月份(1-12)
 * @returns 星期几 0(星期日)到6(星期六)
 */
export const getFirstWeekDay = (year: number, month: number): number => {
  return dayjs(`${year}-${month}-1`).day()
}

/**
 * 获取指定月份有几天
 * @param year 年份
 * @param month 月份(1-12)
 * @returns 
 */
export const getMonthDayCount = (year: number, month: number): number => {
  return dayjs(`${year}-${month}`).daysInMonth()
}

/**
 * 获取指定月份要展示上个月的天数
 * @param year 
 * @param month 
 * @returns 
 */
export const getLastMonthRestDay = (year: number, month: number): number[] => {
  const days = getFirstWeekDay(year, month);
  let lastDate = getMonthDayCount(year, month - 1);
  const restDayArr: number[] = [];
  while (restDayArr.length < days) {
    restDayArr.push(lastDate--)
  }
  return restDayArr.reverse()
}

/**
 * 获取下个月 在本月日历要显示的天数
 * @param year 
 * @param month 
 */
export const getNextMonthResDays = (year: number, month: number) => {
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
 * 获取指定月份的日期数组(含上个与下个月的日期)
 */
export const getMonthDays = (year: number, month: number): number[][] => {
  // 上个月的剩余天数
  const lastMonthRestDays = getLastMonthRestDay(year, month);

  // 本月的天数
  const currentMonthDayCount = getMonthDayCount(year, month);
  const days = [];
  for (let i = 0; i < currentMonthDayCount; i++) {
    days.push(i + 1)
  }

  // 下个月的天数
  const nextMonthRestDays = getNextMonthResDays(year, month);

  const newDayArr = [...lastMonthRestDays, ...days, ...nextMonthRestDays];

  // 合并成二维数组
  const list = []
  for(let i = 0; i < (newDayArr.length / 7); i++) {
    list.push(newDayArr.slice(i * 7, (i + 1) * 7))
  }

  return list
}

/**
 * 渲染 dom 结构
 */
export const render = (arr:number[][], d:number): string => {
  let str = '';

  arr.forEach(item => {
    const tr = document.createElement('tr');
    item.forEach(day => {
      const td = document.createElement('td');
      if(day === d) {
        // 当天日期
        td.className = 'avc'
      }
      td.innerText = day.toString();
      tr.appendChild(td)
    })
    // fragment.appendChild(tr)
    str += tr.outerHTML
  })
  return str
}
