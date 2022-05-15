
import './style/public.css'



// import  moment  from 'moment'
// import 'moment/locale/zh-cn'
// moment.locale('zh-cn');
// moment().format();
// console.log(moment.locale());
// console.log(moment().format('ll'));


import { sum }  from './math.js'

const num = sum(10,20)
console.log(num)

if(module.hot){
    module.hot.accept('./math.js',()=>{
        const num = sum(10,30)
        console.log(num)
    })
}
