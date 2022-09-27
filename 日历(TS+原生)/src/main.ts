import './css/rl.css'
import dayjs from 'dayjs'

import { getMonthDays } from './tools'
import type { IYmd } from './types'

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
  const map = new Map();

  // 渲染日历
  const render = (newY: number, newM: number, avcObj?:IYmd) => {
    const y = avcObj ? avcObj.y : dayjs().year();
    const m = avcObj ? avcObj.m : dayjs().month() + 1;
    const d = avcObj ? avcObj.d: dayjs().date();

    const {lastArr, arr, nextArr} = getMonthDays(newY, newM);
    const list = [...lastArr, ...arr, ...nextArr];
    console.log(list);
    
    const newArr:IYmd[] = JSON.parse(JSON.stringify(list));
    const listDom = []
    
    // dom 结构
    {
      const lastDomArr = lastArr.map(item => {
        return `<td class="off" data-id="${[item.y,item.m, item.d].join()}"><p>${item.d}</p><p>${ item.IDayCn }</p></td>`
      });

      const arrDomArr = arr.map(item => {
        if(item.d === d && newM === m && newY === y) {
          return `<td class="active" data-id="${[item.y,item.m, item.d].join('')}"><p>${item.d}</p><p>${ item.IDayCn }</p></td>`
        }
        return `<td class="" data-id="${[item.y,item.m, item.d].join('')}"><p>${item.d}</p><p>${ item.IDayCn }</p></td>`
      })

      const nextDomArr = nextArr.map(item => {
        return `<td class="off" data-id="${[item.y,item.m, item.d].join('')}"><p>${item.d}</p><p>${ item.IDayCn }</p></td>`
      });

      const newDayArr = [...lastDomArr, ...arrDomArr, ...nextDomArr]

      for(let i = 0; i < (newDayArr.length / 7); i++) {
        listDom.push(newDayArr.slice(i * 7, (i + 1) * 7))
      }
    }

    // 渲染
    tbodyDom.innerHTML = listDom.map(item => {
      return `<tr>${item.join('')}</tr>`
    }).join('')

    
    // 便于后续事件处理
    newArr.forEach(item => {
      const {y,m,d} = item
      const key = [y,m,d].join('');
      map.set(key, {...item})
    })
  };

  // 事件处理
  const handle = () => {

    // 上一年
    prevYearDom.addEventListener('click',() => {
      const year = Number(yearDom.value || '') // 当前年份
      const month = Number(monthDom.value || '') // 当前月份
      yearDom.selectedIndex = tooltObj.setYear(year - 1);
      render(year - 1, month)
    });

    // 下一年
    nextYearDom.addEventListener('click',() => {
      const year = Number(yearDom.value || '') // 当前年份
      const month = Number(monthDom.value || '') // 当前月份
      yearDom.selectedIndex = tooltObj.setYear(year + 1);
      render(year + 1, month)
    });

    // 上个月
    prevMonthDom.addEventListener('click', () => {
      const year = Number(yearDom.value) // 当前年份
      const month = Number(monthDom.value) // 当前月份
      if (month === 1) {
        yearDom.selectedIndex = tooltObj.setYear(year - 1);
        monthDom.selectedIndex = 11;
        render(year - 1, 12)
      } else {
        monthDom.selectedIndex = month - 1 - 1;
        render(year, month - 1)
      }
    });

    // 下个月
    nextMonthDom.addEventListener('click', () => {
      const year = Number(yearDom.value) // 当前年份
      const month = Number(monthDom.value) // 当前月份
      if (month === 12) {
        yearDom.selectedIndex = tooltObj.setYear(year + 1);
        monthDom.selectedIndex = 0;
        render(year + 1, 1)
      } else {
        monthDom.selectedIndex = month;
        render(year, month + 1)
      }
    });

    // 选择年份
    yearDom.addEventListener('change', (e) => {
      const year = Number((e.target as HTMLSelectElement).value);
      const month = Number(monthDom.value) // 当前月份
      yearDom.selectedIndex = tooltObj.setYear(year);
      render(year, month)
    });

    // 选择月份
    monthDom.addEventListener('change', (e) => {
      const year = Number(yearDom.value) // 当前年份
      const month = Number((e.target as HTMLSelectElement).value);
      monthDom.selectedIndex = month - 1;
      render(year, month)
    });
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
    render(year, month);

    // 事件
    handle()
  }

  init();
})(tooltObj);




