import avator from './img/xiaomei1.jpg'
const img2 = new Image();
const app = document.getElementById('app')

img2.src = avator
app.appendChild(img2)

import { sum } from './math.js'

const sumRes = sum(5, 6)
console.log(sumRes)
