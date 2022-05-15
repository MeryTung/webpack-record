function counterB(){
    const myDiv = document.createElement('div')
    myDiv.innerText =  4000
    myDiv.setAttribute('id','number')
   
    myDiv.addEventListener('click',function(){
        myDiv.innerText = parseInt(myDiv.innerText,10) +1 
    })
    document.body.appendChild(myDiv)
}

export default counterB