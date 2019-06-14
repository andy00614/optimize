const ipt = document.querySelector('#ipt')

ipt.oninput = debounce2(function() {
  console.log(ipt.value)
},300)

// 个人理解还有一个原因为啥要用闭包：因为闭包会返回一个函数。
// 而事件绑定就是需要的是一个函数表达式，而不是执行的函数，所以用闭包更适合了
function debounce(fn,interval) {
  let timer = null
  return function() {
    clearInterval(timer)
    timer = setTimeout(() => {
      fn.apply(this,arguments)
    }, interval);
  }
}

function debounce2(fn,time=300) {
  let timer = null
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this,arguments)
    }, time);
  }
}


