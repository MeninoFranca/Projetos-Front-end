
 let elements = document.querySelectorAll('.hidden') //variavel que pega todos elementos com a class .hidden

const obseve = new IntersectionObserver((entrada)=>{ //API que executa função callback sempre que o elemento observado entra ou sai da area visivel
    entrada.forEach((check) => {  
        if(check.isIntersecting){ //propriedade que valida se o elemento está visivel (Retorna true ou false)
            check.target.classList.add('show') //se o elemento está sendo observado, atríbui a classe show
        }else{
            check.target.classList.remove('show')//se o elemento não está sendo observado, remove a classe show
        }
    })
})


elements.forEach((element) => obseve.observe(element)); //monitora os elementos em tempo real e ativa a função para check