function counter(){
    const myDiv = document.createElement('div')
    myDiv.innerText =  10
    myDiv.setAttribute('id','couter')
   
    myDiv.addEventListener('click',function(){
        myDiv.innerText = parseInt(myDiv.innerText,10) +1 
    })
    document.body.appendChild(myDiv)
}

export default counter