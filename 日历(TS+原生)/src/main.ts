// import './css/style.css'
import './css/rl.css'
// import { getNextMonthResDays } from './utils'
import dayjs from 'dayjs'

import { getMonthDays, render } from './tools'
console.log();

// 初始化日历
(() => {
  const tbodyDom = document.querySelector('tbody') as HTMLTableSectionElement;
  const yearDom = document.querySelector('.sw .year') as Element;
  const monthDom = document.querySelector('.sw .month') as Element;
  const prevYearDom = document.querySelector('.sw .prevYear') as Element;
  const nextYearDom = document.querySelector('.sw .nextYear') as Element;
  const prevMonthDom = document.querySelector('.sw .prevMonth') as Element;
  const nextMonthDom = document.querySelector('.sw .nextMonth') as Element;

  // 渲染日历
  const setRl = (year: number, month: number) => {
    // console.log(month);
    const date = dayjs().date() // 当前月份

    const arr = getMonthDays(year, month)

    tbodyDom.innerHTML = render(arr, date)
  }



  // 事件处理
  const handle = () => {

    // 上一年

    // 下一年

    // 上个月
    prevMonthDom.addEventListener('click', () => {
      const year = parseInt(yearDom.textContent || '') // 当前年份
      const month = parseInt(monthDom.textContent || '') // 当前月份
      if (month === 1) {
        yearDom.textContent = year - 1 + '年'
        monthDom.textContent = 12 + '月'
        setRl(year - 1, 12)
      } else {
        monthDom.textContent = month - 1 + '月'
        setRl(year, month - 1)
      }
    })

    // 下个月
    nextMonthDom.addEventListener('click', () => {
      const year = parseInt(yearDom.textContent || '') // 当前年份
      const month = parseInt(monthDom.textContent || '') // 当前月份
      if (month === 12) {
        yearDom.textContent = year + 1 + '年'
        monthDom.textContent = 1 + '月'
        console.log(year + 1);
        
        setRl(year + 1, 1)
      } else {
        monthDom.textContent = month + 1 + '月'
        setRl(year, month + 1)
      }
    })


    // prevDom.addEventListener('click', () => {
    //   // const year = dayjs().subtract(1, 'month').year() // 当前年份
    //   const month = dayjs().subtract(1, 'month').month() + 1 // 当前月份

    //   yearDom.textContent = year + '年'
    //   monthDom.textContent = month + '月'
    //   setRl(year, month)
    // })

    // nextDom.addEventListener('click', () => {
    //   const year = dayjs().add(1, 'month').year() // 当前年份
    //   const month = dayjs().add(1, 'month').month() + 1 // 当前月份

    //   yearDom.textContent = year + '年'
    //   monthDom.textContent = month + '月'
    //   setRl(year, month)
    // })
  }

  // 初始化
  const init = () => {
    const year = dayjs().year() // 当前年份
    const month = dayjs().month() + 1 // 当前月份

    yearDom.textContent = year + '年'
    monthDom.textContent = month + '月'
    setRl(year, month);

    // 事件
    handle()
  }

  init();
})();


