
let elements = document.querySelectorAll('.hidden')

const obseve = new IntersectionObserver((entrada)=>{
    entrada.forEach((check) => {
        if(check.isIntersecting){
            check.target.classList.add('show')
        }else{
            check.target.classList.remove('show')
        }
    })
})


elements.forEach((element) => obseve.observe(element));