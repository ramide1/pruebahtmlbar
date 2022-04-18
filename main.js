const botonIngresar = document.querySelector("#ingresar");
//Accion de el boton ingresar
botonIngresar.onclick = function(){
    let edadMinima = 18;
    let nombreUsuario = String(document.querySelector("#nombre-usuario").value);
    let edadUsuario = Number(document.querySelector("#edad-usuario").value);
    let resultado = document.querySelector("#resultado");
    if (nombreUsuario.toLowerCase() == "ramiro"){
        alert("Hola Ramiro, te llamas igual que yo!");
    }else if (nombreUsuario.toLowerCase() == "ignacio"){
        alert("Hola Ignacio, te llamas igual que un amigo mio!");
    }else {
        alert("Hola " + nombreUsuario + "!");
    };
    if (edadUsuario > edadMinima){
        alert("Ok, tenes " + edadUsuario + ", por lo tanto podes ingresar");
        resultado.innerText = nombreUsuario + " ingreso";
    }else if (edadUsuario < edadMinima){
        alert("Ok tenes " + edadUsuario + ", por lo tanto no podes ingresar");
        resultado.innerText = nombreUsuario + " no pudo ingresar";
    }else {
        alert("Ok tenes la edad minima, por lo tanto podes ingresar");
        resultado.innerText = nombreUsuario + " ingreso";
    };
    return false;
};