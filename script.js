
const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"],["imes","i"],["ai","a"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado
    mensagem.style.background="none"

}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["ai","a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringDesencriptada;

}
   
function btnCopiar() {
    var textCopy = document.querySelector('#segunda_mensagem').value;
    alert ("O texto copiado já está na área de transferência!");
    document.querySelector('#primeira_mensagem').value = textCopy

}