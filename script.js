const numMinimo = document.querySelector('#minimo')
const numMaximo = document.querySelector("#maximo")
const quantidade = document.querySelector("#quantidade")
const sectionContainer = document.querySelector('section#container')
const sectionContentForm = document.querySelector('section#content-form')
const buttonSortear = document.querySelector('section#content-form button')
const buttonSortearNovamente = document.querySelector('section#result-container button')
const htmlFormularioOriginal = sectionContentForm.innerHTML;



function sortear(){
        let numerosSorteados = []
    
        const valorMinimo = Number(numMinimo.value)
        const valorMaximo = Number(numMaximo.value)
        const quantidadeNumeros = Number(quantidade.value)

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

        sectionContentForm.innerHTML = ''
        sectionContainer.innerHTML += `<section id="result-container">
                                            <div id="title-result">
                                                <h2>RESULTADO DO SORTEIO</h2>
                                                <p>1º resultado</p>
                                            </div>
                                            <div id="result">
                                                <h3>${htmlResultados}</h3>
                                            </div>
                                            <button id="sortear-novamente" onclick="reiniciar()">SORTEAR NOVAMENTE</button>
                                        </section>`
}

buttonSortear.addEventListener('click', (event) => {
    event.preventDefault()
    sortear()
})

function reiniciar() {
    // 1. Limpa a área de resultados
    sectionContainer.innerHTML = ''; 

    // 2. Devolve o formulário original para a tela
    sectionContentForm.innerHTML = htmlFormularioOriginal;

    // 3. Limpa a lista de números para o próximo sorteio
    numerosSorteados = [];
}

buttonSortearNovamente.addEventListener('click', (event) => {
    event.preventDefault()
    sortear()
})