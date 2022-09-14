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

  const year = dayjs().year() // 当前年份
  const month = dayjs().month() + 1 // 当前月份
  console.log(month);

  yearDom.textContent = year + '年'
  monthDom.textContent = month + '月'
  
  const date = dayjs().date() // 当前月份

  const arr = getMonthDays(year,month)

  const fragment = render(arr, date)
  tbodyDom.innerHTML = fragment
})();





// import { setupCounter } from './counter'

// console.log(getNextMonthResDays(2022, 7));


// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   1
// `;

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
