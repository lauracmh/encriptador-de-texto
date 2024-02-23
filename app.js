e = "enter"
i = "imes"
a = "ai"
o = "ober"
u = "ufat"

let text = document.getElementById('textoUsuario');
text.addEventListener("keypress",(e)=>{
    const expre = /[a-z ¡!¿?]/;
    if(!expre.test(e.key)) e.preventDefault();
    }
)


function encriptar(){
    let texto = document.getElementById('textoUsuario').value;
    document.querySelector('#textoResultado').innerHTML = encriptarTexto(texto);
    document.querySelector('#instruccion').innerHTML = "";
    document.querySelector('#copiar').removeAttribute('hidden');
    document.querySelector('#imagen').setAttribute('hidden',true);
    return;
}

function desencriptar(){
    let texto = document.getElementById('textoUsuario').value;
    document.querySelector('#textoResultado').innerHTML = desencriptarTexto(texto);
    document.querySelector('#instruccion').innerHTML = "";
    document.querySelector('#copiar').removeAttribute('hidden');
    return;
}

function encriptarTexto(texto) {
    let textoEncriptado = texto;
    textoEncriptado = textoEncriptado.replace(/e/gi,e);
    textoEncriptado = textoEncriptado.replace(/i/gi,i);
    textoEncriptado = textoEncriptado.replace(/a/gi,a);
    textoEncriptado = textoEncriptado.replace(/o/gi,o);
    textoEncriptado = textoEncriptado.replace(/u/gi,u);
   
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoOriginal = texto;
    textoOriginal = textoOriginal.replace(/ufat/gi,"u");
    textoOriginal = textoOriginal.replace(/ober/gi,"o");
    textoOriginal = textoOriginal.replace(/ai/gi,"a");
    textoOriginal = textoOriginal.replace(/imes/gi,"i");
    textoOriginal = textoOriginal.replace(/enter/gi,"e");

    return textoOriginal;
}

function copiar(){
    let textoCopiado = document.querySelector('#textoResultado').textContent;
    document.getElementById('textoResultado').style.background = '#A9A9A9';
    navigator.clipboard.writeText(textoCopiado);
    return;
}


function limpiar(){
    document.querySelector('#textoUsuario').value = "";
    document.querySelector('#textoResultado').style.background = 'rgb(182, 219, 219)';
    document.querySelector('#copiar').setAttribute("hidden",true);
    return;
}

document.addEventListener('click', function(event) {
    if (!(event.target.matches("textarea") || event.target.matches("button") )) {
        document.querySelector('#textoUsuario').value = "Ingrese el texto aquí";
        document.querySelector('#textoResultado').innerHTML = "Ningún mensaje fue encontrado";
        document.querySelector('#instruccion').innerHTML = "Ingresa el texto que deseas encriptar o desencriptar";
        document.querySelector('#imagen').removeAttribute('hidden');
        document.querySelector('#copiar').setAttribute("hidden",true);
    }
});


