let colors = ['blue','yellow','black','red','brown','orange']
let button = document.getElementById('button')

button.addEventListener('click',function(){
    let randomColor = colors[Math.floor(Math.random()*colors.length)]
    let container = document.getElementById('container')
    container.style.backgroundColor = randomColor
})