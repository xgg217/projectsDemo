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
  // const days = getFirstWeekDay(year, month);
  // let lastDate = getMonthDayCount(year, month - 1);
  // const restDayArr: number[] = [];
  // while (restDayArr.length < (days - 1)) {
  //   restDayArr.push(lastDate--)
  // }
  // return restDayArr.reverse()
  let newYear = year;
  let newMonth = month;
  
  if(month === 1) {
    newYear = year - 1;
    newMonth = 12;
  } else {
    newMonth = newMonth - 1;
  }

  // 获取上个月的最后一天是星期几
  const lastMonth =  dayjs(`${newYear}-${newMonth}`, 'YYYY-MM').endOf('month')
  const week = lastMonth.day() // 获取上个月的最后一天是星期几
  const day = lastMonth.date() // 获取上个月的最后一天是几号
  if(week === 0) {
    return []
  }

  const restDayArr: number[] = [];

  for(let i = 0; i < week; i++) {
    restDayArr.push(day - i)
  }
  // console.log(restDayArr.reverse());
  
  return restDayArr.reverse()




}

/**
 * 获取下个月 在本月日历要显示的天数
 * @param year 
 * @param month 
 */
export const getNextMonthResDays = (year: number, month: number) => {
  let newYear = year;
  let newMonth = month;
  
  if(month === 12) {
    newYear = year + 1;
    newMonth = 1;
  } else {
    newMonth = newMonth + 1;
  }

  // 获取下个月的1号是星期几
  const s = dayjs(`${newYear}-${newMonth}-1`, 'YYYY-MM-DD').day()
  console.log(s);
  if(s === 1) return [] // 下个月1号是星期一，不需要显示
  if( s === 0) return [1] // 下个月1号是星期日，需要显示1号

  const restDays = [];
  for(let i = 0; i <= 7 - s; i++) {
    restDays.push(i + 1)
  }
  return restDays
}

interface IMoonth {
  lastArr: number[]
  arr: number[]
  nextArr: number[]
}

/**
 * 获取指定月份的日期数组(含上个与下个月的日期)
 */
export const getMonthDays = (year: number, month: number):IMoonth  => {
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

  return {
    lastArr: lastMonthRestDays, // 上个月
    arr: days, // 本月
    nextArr: nextMonthRestDays, // 下个月
  }
}

interface IYmd {
  y: number,
  m: number,
  d: number
}

/**
 * 渲染 dom 结构
 * @param param1 y 年 m 月份 当前日期
 * @param param2 y 年 m 月份 d 日期 需要高亮的日期
 * @returns 
 */
export const render = ( newY:number, newM:number, avcObj?:IYmd): string => {
  const y = avcObj ? avcObj.y : dayjs().year();
  const m = avcObj ? avcObj.m : dayjs().month() + 1;
  const d = avcObj ? avcObj.d: dayjs().date();

  // 获取月份数组（含上月与下月）
  const {lastArr, arr, nextArr} = getMonthDays(newY, newM)

  const lastDomArr = lastArr.map(item => {
    return `<td class="off"><p>${item}</p><p>农历</p></td>`
  });
  const arrDomArr = arr.map(item => {
    if(item === d && newM === m && newY === y) {
      return `<td class="active"><p>${item}</p><p>农历</p></td>`
    }
    return `<td class=""><p>${item}</p><p>农历</p></td>`
  })
  const nextDomArr = nextArr.map(item => {
    return `<td class="off"><p>${item}</p><p>农历</p></td>`
  });

  const newDayArr = [...lastDomArr, ...arrDomArr, ...nextDomArr]
  // 合并成二维数组
  const list = []
  for(let i = 0; i < (newDayArr.length / 7); i++) {
    list.push(newDayArr.slice(i * 7, (i + 1) * 7))
  }

  return list.map(item => {
    return `<tr>${item.join('')}</tr>`
  }).join('')
}
