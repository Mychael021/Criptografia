const check = document.getElementById("darkmode-toggle");
const themeSystem = localStorage.getItem("themeSystem") || "light";
let img = document.querySelector("#image-exclamacao");
let entradaDeTexto = document.querySelector("textarea");
let testeEntradaDeTexto = /^[a-z ]+$/;
let saidaDeTexto = document.querySelector("output");
let mensagemSaidaDeTexto = document.getElementById("mensagem-saida");

check.addEventListener("change", () => {
    let oldTheme = localStorage.getItem("themeSystem") || "light";
    let newTheme = oldTheme == "light" ? "dark":"light";

    localStorage.setItem("themeSystem",newTheme);
    defineCurrentTheme(newTheme);
})
function defineCurrentTheme(theme){
    document.documentElement.setAttribute("data-theme",theme);
    if(theme=="dark"){
        let checkbox = document.getElementById("darkmode-toggle");
        checkbox.checked = true;
        img.setAttribute("src","assets/exclamaçãobranca.png");
    } else {
        img.setAttribute("src","assets/exclamação.png");
        
    }
}
defineCurrentTheme(themeSystem);

function criptografar(){
    let textoCriptografado = (entradaDeTexto.value).replace(/e/g,"enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    if(testeEntradaDeTexto.test(entradaDeTexto.value)){
        removerApresentacaoOutput();
        mensagemSaidaDeTexto.innerHTML="Texto Criptografado:"
        saidaDeTexto.innerHTML = textoCriptografado;    
    }else {
        alert("Digite apenas letras minúsculas, sem acento e sem caracteres especiais.");
    }
}

function descriptografar(){
    let textoDescriptografado = (entradaDeTexto.value).replace(/enter/g,"e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g,"o").replace(/ufat/g,"u");
    if(testeEntradaDeTexto.test(entradaDeTexto.value)){
        removerApresentacaoOutput();
        mensagemSaidaDeTexto.innerHTML="Texto Descriptografado:"
        saidaDeTexto.innerHTML = textoDescriptografado;    
    }else {
        alert("Digite apenas letras minúsculas, sem acento e sem caracteres especiais.");
    }
}

function copiar(){
    navigator.clipboard.writeText(saidaDeTexto.value).then(
        () => {
        }
    );
}
function removerApresentacaoOutput() {
    document.getElementById("texto-do-output").style.display="none";
    entradaDeTexto.value = "";
    document.getElementById("botao-copiar").removeAttribute("disabled");
}