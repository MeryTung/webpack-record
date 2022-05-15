
// const num = (a,b) => {
//     return a + b
// }

// const result = num(1,3)
// console.log('result',result)
// import './index.css'
// const myButton = document.createElement('button')
// myButton.innerHTML = '新增'
// document.body.appendChild(myButton)
// myButton.addEventListener('click',function(){
//     const myDiv = document.createElement('div')
//     myDiv.innerText = 'item'
//     document.body.appendChild(myDiv)
// })

// import avator from './avator.jpg'
import styles from './style/index.css'
// import createAvator from './createAvator.js';
// import counter from "./counterA.js";
// import counterB from "./counterB.js";
// counter()
// counterB()
// createAvator()
// console.log(styles)




//  const img = new Image();
//  img.src = avator
//  img.className += `${styles.avator}`

 let app = document.getElementById('app')
 app.innerHTML = '<div class="iconfont  icon-dianzan"></div>'
//  app.appendChild(img)

// const promiseArray = [
//     new Promise(()=>{}), 
//     new Promise(()=>{})
// ]
// promiseArray.map(promise => {
//     console.log('promise',promise)
// })


// if(module.hot){
//     module.hot.accept('./counterB',()=>{
//         const myNumber = document.getElementById('munber')
//         document.body.removeChild(myNumber)
//         counterB()
//     })
// }