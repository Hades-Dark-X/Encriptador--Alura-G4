// Variables
let cajaTexto = document.getElementById("cajaTexto");

let reglasEncriptado = {
  a: "ai",
  e: "\n",
  i: "imes",
  o: "ober",
  u: "ufat"
};

let reglasDesencriptado = {
  ai: "a",
  "\n": "e",
  imes: "i",
  ober: "o",
  ufat: "u"
};


//funciones  para encriptar, desencriptar y copiar
function validarCajaTexto(valor) {
  if (valor === "") {
    alert("El campo no puede estar vacío");
    return false;
  } else if (!/^[a-z]+$/.test(valor)) {
    alert("Solo se permiten letras minúsculas");
    return false;
  }
  return true;
}

function encriptarTexto() {
  if (validarCajaTexto(cajaTexto.value)) {
    console.log("Valor original:", cajaTexto.value);
    // Aplica las reglas de reemplazo al texto
    let encriptado = cajaTexto.value.replace(/[aeiou]/g, function(match) {
      return reglasEncriptado[match];
    });
    document.getElementById("areaEncriptado").value = encriptado;
    console.log("Valor encriptado:", encriptado);
  }
}

function desencriptarTexto() {
  if (validarCajaTexto(cajaTexto.value)) {
    console.log("Valor encriptado:", cajaTexto.value);
    let desencriptado = cajaTexto.value.replace(/ai|\n|imes|ober|ufat/g, function(match) {
      return reglasDesencriptado[match];
    });
    document.getElementById("areaDesencriptado").value = desencriptado;
    console.log("Valor desencriptado:", desencriptado);
  }
}

function copiarTexto(){
  navigator.clipboard.writeText(areaEncriptado.value);
}
