function insert(n){
    document.querySelector(".display").innerText += n
}

function calcular(){
    try {
        let resultado = eval(document.querySelector(".display").innerText)    
        document.querySelector(".display").innerText = resultado
    } catch{
        document.querySelector(".display").innerText = 'Erro'
    }
}

function clearDisplay(){
    document.querySelector(".display").innerText = ''
}

function backSpace(){
    let display = document.querySelector(".display").innerText
    document.querySelector(".display").innerText = display.slice(0,-1)
}
