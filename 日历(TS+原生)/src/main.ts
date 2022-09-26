// import './css/style.css'
import './css/rl.css'
// import { getNextMonthResDays } from './utils'
import dayjs from 'dayjs'

import { getMonthDays, render } from './tools'
console.log();

// 工具函数
const tooltObj = (() => {
  // const yearDom = document.querySelector('.sw .year') as HTMLSelectElement;
  // const monthDom = document.querySelector('.sw .month') as HTMLSelectElement;
  const minYear = 2000;
  const maxYear = 2050;

  // 初始化年份数据
  const initYear = () => {
    const arr = [];
    for (let i = minYear; i <= maxYear; i++) {
      arr.push(i);
    }

    return arr.map(item => {
      return `<option value="${item}">${item}年</option>`
    }).join('')
  }

  /**
   * 计算年份
   * @param year 年份
   */
  const setYear = (year:number) => {
    return year - minYear
  }

  return {
    initYear,
    setYear
  }
})();

// 初始化日历
((tooltObj) => {
  const tbodyDom = document.querySelector('tbody') as HTMLTableSectionElement;
  const yearDom = document.querySelector('.sw .year') as HTMLSelectElement;
  const monthDom = document.querySelector('.sw .month') as HTMLSelectElement;
  const prevYearDom = document.querySelector('.sw .prevYear') as Element;
  const nextYearDom = document.querySelector('.sw .nextYear') as Element;
  const prevMonthDom = document.querySelector('.sw .prevMonth') as Element;
  const nextMonthDom = document.querySelector('.sw .nextMonth') as Element;

  // 渲染日历
  const setRl = (newY: number, newM: number) => {
    tbodyDom.innerHTML = render(newY, newM)
  }

  



  // 事件处理
  const handle = () => {

    // 上一年 - 点击
    prevYearDom.addEventListener('click',() => {
      const year = Number(yearDom.value || '') // 当前年份
      const month = Number(monthDom.value || '') // 当前月份
      yearDom.selectedIndex = tooltObj.setYear(year - 1);
      setRl(year - 1, month)
    })

    // 下一年 - 点击
    nextYearDom.addEventListener('click',() => {
      const year = Number(yearDom.value || '') // 当前年份
      const month = Number(monthDom.value || '') // 当前月份
      yearDom.selectedIndex = tooltObj.setYear(year + 1);
      setRl(year + 1, month)
    })

    // 上个月 - 点击
    prevMonthDom.addEventListener('click', () => {
      const year = Number(yearDom.value) // 当前年份
      const month = Number(monthDom.value) // 当前月份
      if (month === 1) {
        yearDom.selectedIndex = tooltObj.setYear(year - 1);
        monthDom.selectedIndex = 11;
        setRl(year - 1, 12)
      } else {
        monthDom.selectedIndex = month - 1 - 1;
        setRl(year, month - 1)
      }
    })

    // 下个月 - 点击
    nextMonthDom.addEventListener('click', () => {
      const year = Number(yearDom.value) // 当前年份
      const month = Number(monthDom.value) // 当前月份
      if (month === 12) {
        yearDom.selectedIndex = tooltObj.setYear(year + 1);
        monthDom.selectedIndex = 0;
        setRl(year + 1, 1)
      } else {
        monthDom.selectedIndex = month;
        setRl(year, month + 1)
      }
    })
  }

  // 初始化
  const init = () => {
    const year = dayjs().year() // 当前年份
    const month = dayjs().month() + 1 // 当前月份

    // 初始化年份数据
    yearDom.insertAdjacentHTML('afterbegin', tooltObj.initYear());

    // 设置年份
    yearDom.selectedIndex = tooltObj.setYear(year);

    // 设置月份
    monthDom.selectedIndex = month - 1;
    setRl(year, month);

    // 事件
    handle()
  }

  init();
})(tooltObj);




