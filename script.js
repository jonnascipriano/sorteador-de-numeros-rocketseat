const numMinimo = document.querySelector('#minimo')
const numMaximo = document.querySelector("#maximo")
const quantidade = document.querySelector("#quantidade")
const sectionContainer = document.querySelector('section#container')
const sectionContentForm = document.querySelector('section#content-form')
const buttonSortear = document.querySelector('section#content-form button')
const htmlFormularioOriginal = sectionContentForm.innerHTML;

const buttonSortearNovamente = document.querySelector('#sortear-novamente')
const sectionResultContainer = document.querySelector('#result-container')

let numerosSorteados = []
function sortear(){
    
        numerosSorteados = []
        const valorMinimo = Number(numMinimo.value)
        const valorMaximo = Number(numMaximo.value)
        const quantidadeNumeros = Number(quantidade.value)

        if(valorMinimo === ''|| valorMaximo === ''|| quantidadeNumeros === ''){
            alert("Digite um número válido")
            sectionResultContainer.style.display = 'none'
            sectionContentForm.style.display = 'block'
        } else {
            function qntResultados(quantidadeNumeros){
            for(let i = 0; i < quantidadeNumeros; i++){
                const result = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1) + valorMinimo)
                console.log(result)
                if(!numerosSorteados.includes(result)){
                    numerosSorteados.push(result)
                } else {
                    i--
                }
            }
        }
        qntResultados(quantidadeNumeros)

        let htmlResultados = ''

        for (let i = 0; i < numerosSorteados.length; i++) {
            htmlResultados += `<h3>${numerosSorteados[i]}</h3>`
        }

        sectionResultContainer.innerHTML = `<div id="title-result">
                                                <h2>RESULTADO DO SORTEIO</h2>
                                                <p>1º resultado</p>
                                            </div>
                                            <div id="result">
                                                ${htmlResultados}
                                            </div>
                                            <button id="sortear-novamente" onclick="reiniciar()">SORTEAR NOVAMENTE</button>`
        }

}
                                    
                                    


buttonSortear.addEventListener('click', (event) => {
    event.preventDefault()
    sectionResultContainer.style.display = 'flex'
    sectionContentForm.style.display = 'none';
    sortear()
})


window.reiniciar = function(){
    sectionResultContainer.style.display = 'none'
    sectionContentForm.style.display = 'block'

    numMinimo.value = '';
    numMaximo.value = '';
    quantidade.value = '';
}