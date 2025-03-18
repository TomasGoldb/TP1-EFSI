const notaMin=1, notaMax=10, cantMaterias=3;
let mate=document.getElementById('mate');
let lengua=document.getElementById('lengua');
let efsi=document.getElementById('efsi');
let promBtn=document.getElementById('prom');
let mayorNota=document.getElementById('mayorNota');
let pVisor=document.getElementById('pVisor');

const validarNota=(input)=>{
    if(input.value>=notaMin&&input.value<=notaMax){
        input.style.border="2px solid green";
    } else if(input.value==""){
        input.style.border="1px solid black";
    }else{
        input.style.border="2px solid red";
    }
}

mate.addEventListener('input',()=>{
    mate=document.getElementById('mate');
    validarNota(mate);
});
lengua.addEventListener('input',()=>{
    lengua=document.getElementById('lengua');
    validarNota(lengua);
});
efsi.addEventListener('input',()=>{
    efsi=document.getElementById('efsi');
    validarNota(efsi);
});
const notaEsValida=(nota)=>nota>=notaMin&&nota<=notaMax;
const datosValidos = () => notaEsValida(parseInt(mate.value))&&notaEsValida(parseInt(lengua.value))&&notaEsValida(parseInt(efsi.value));

const promedioNotas = () => {
    let sumaNotas=parseInt(mate.value)+parseInt(lengua.value)+parseInt(efsi.value);
    let prom=sumaNotas/cantMaterias;
    return prom
}
const mayorNotaInt=(notas)=>{
    let notamax=notas[0];
    while
}

promBtn.addEventListener('click',()=>{
    if(datosValidos()){
        pVisor.innerText=promedioNotas();
    } else{
        alert("Los datos no son válidos o no has ingresado todas las notas!");
    }
});