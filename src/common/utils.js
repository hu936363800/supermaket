export function debounce(fun ,delay) {
   let timer = null;
  //  时间delay越长 打印的越少
   return function (...agr) {
       if(timer) {
           clearTimeout(timer);
       }
       timer = setTimeout(() => {
        //  业务逻辑函数  不用call 指向window
          fun.apply(this, [arguments]);
       },delay)
   }
}
// 节流
// let flag = true;
// window.onscroll = function(){
//   if(flag){
//     setTimeout(() => {
//       console.log('执行了');
//     },500)
//     flag = true;
//   }
//   flag = false
// }


// 格式化时间
export function formatDate(date, fmt) {
  // 获取年份
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    // 获取
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
  };
  
  function padLeftZero (str) {
    return ('00' + str).substr(str.length);
  };
  
  