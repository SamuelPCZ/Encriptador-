function encriptar() {
    let devolver = "";
    let texto = document.getElementById("entrada").value;
    
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == 'a') {
            devolver += "ai";
        } else if (texto[i] == 'e') {
            devolver += "enter";
        } else if (texto[i] == 'i') {
            devolver += "imes";
        } else if (texto[i] == 'o') {
            devolver += "ober";
        } else if (texto[i] == 'u') {
            devolver += "ufat";
        } else {
            devolver += texto[i];
        }
    }
    
    document.getElementById("salida").textContent = devolver;
    ocultarImagen();
}

function desencriptar() {

    let devolver = "";
    let texto = document.getElementById("entrada").value;

     
    for (let i = 0; i < texto.length; i++) {
        if (texto.substring(i, i + 2) == "ai") {
            devolver += "a";
            i += 1;
        } else if (texto.substring(i, i + 5) == "enter") {
            devolver += "e";
            i += 4;
        } else if (texto.substring(i, i + 4) == "imes") {
            devolver += "i";
            i += 3;
        } else if (texto.substring(i, i + 4) == "ober") {
            devolver += "o";
            i += 3;
        } else if (texto.substring(i, i + 4) == "ufat") {
            devolver += "u";
            i += 3;
        } else {
            devolver += texto[i];
        }
    }
    
    document.getElementById("salida").textContent = devolver;
    ocultarImagen();
}

function ocultarImagen() {
    let imagen = document.getElementById("imagen");
    imagen.style.display = "none";
}