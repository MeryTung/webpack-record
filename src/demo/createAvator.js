
import avator from './avator.jpg'
import styles from './index.scss'
function  createAvator(){
    const img = new Image();
    img.src = avator
    img.className += `${styles.avator}`
   
    let app = document.getElementById('app')
    app.appendChild(img)
}

export default createAvator