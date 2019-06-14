// 滚动条在Y轴上的滚动距离
function getScrollTop() {
  var scrollTop = 0,
    bodyScrollTop = 0,
    documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

// 文档总高度
function getScrollHeight() {
  var scrollHeight = 0,
    bodyScrollHeight = 0,
    documentScrollHeight = 0;
  if (document.body) {
    bSH = document.body.scrollHeight;
  }
  if (document.documentElement) {
    dSH = document.documentElement.scrollHeight;
  }
  scrollHeight = (bSH - dSH > 0) ? bSH : dSH;
  return scrollHeight;
}

// 浏览器视口的高度
function getWindowHeight() {
  var windowHeight = 0;
  if (document.compatMode == "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}

// window.addEventListener('scroll', () => {
  // console.log(`y轴滚动距离(scrolltop)${getScrollTop()}\n 文档总高度(scrollHeight)${getScrollHeight()}\n 浏览器视口高度(clientHeight)${getWindowHeight()}`)
  // if(getScrollTop() + getWindowHeight() === getScrollHeight()) {
  //   console.log('滑到底部')
  // }
// })

window.addEventListener('scroll', throttle4(() => {
  console.log(`y轴滚动距离(scrolltop)${getScrollTop()}\n 文档总高度(scrollHeight)${getScrollHeight()}\n 浏览器视口高度(clientHeight)${getWindowHeight()}`)
  if(getScrollTop() + getWindowHeight() === getScrollHeight()) {
    console.log('滑到底部')
  }
},300))

// 函数节流
function throttle(fn, interval=300) {
  let canRun = true
  return function() {
    if(!canRun) return;
    canRun = false
    this.setTimeout(() => {
      fn.apply(this,arguments)
      canRun = true
    }, interval);
  }
}

// 因为这里要通过监听持续调用这个函数，为了封装性才使用闭包，不然得在函数的外面变量中再添加一个canRun变量
function throttle2(fn,interval=300) {
  let canRun = true
  return function() {
    if(!canRun) return;
    canRun = false
    setTimeout(() => {
      fn.apply(this,arguments)
      canRun = true
    },interval)
  }
}

function throttle3(fn,interval=100) {
  let canRun = true
  return function() {
    if(canRun === false) {
      return;
    }
    canRun = false
    setTimeout(() => {
      fn()
      canRun = true
    },interval)
  }
}

function throttle4(fn,time=300) {
  let canRun = true
  return function() {
    if(!canRun) {
      return;
    }
    canRun = false
    setTimeout(() => {
      canRun = true
      fn.apply(this,arguments)
    }, time);
  }
}
