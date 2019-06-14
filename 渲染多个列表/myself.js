/**
 * 生成规定好长度的顺序数组
 * 
 * @param {Number} number 需要传入的长度，用来规定输出数组的长度
 * @return {Array} 返回设定好长度的顺序数组
 * @example
 * setAry(10000)
 */

function setAry(number) {
  let ary = []
  for(let i = 0; i < number; i++) {
    ary.push(i)
  }
  return ary
}

function timeChunk(ary,fn,count,time) {
  const t = setInterval(() => {
    console.log(ary)
    if(ary.length <= 0) {
      clearInterval(t)
    }
    for(let i = 0; i < Math.min(count || 1,ary.length); i++) {
      const obj = ary.shift()
      fn(obj)
    }
  },time)
}

function loadData(number=4000) {
  const ary = setAry(number)
  for(let i = 0; i <  ary.length; i++) {
    renderDiv(i)
  }
}

const renderDiv = (content,dom = document.querySelector('.render')) => {
  const div = document.createElement('div')
  div.innerHTML = content
  dom.appendChild(div)
}

// 原始加载方法
// loadData(40000)

// 分时加载方法
timeChunk2(setAry(40000),renderDiv,10,200)

function timeChunk2(ary,fn,time,count) {
  let timer = setInterval(() => {
    if(ary.length <= 0) {
      clearInterval(timer)
      return;
    }
    for(let i = 0 ;i < Math.min(count,ary.length); i++) {
      const target = ary.shift()
      fn(target)
    }
  }, time);
}