const notaMin=1, notaMax=10, cantMaterias=3;
let mate=document.getElementById('mate');
let lengua=document.getElementById('lengua');
let efsi=document.getElementById('efsi');
let promBtn=document.getElementById('prom');
let mayorNota=document.getElementById('mayorNota');
let pVisor=document.getElementById('pVisor');
let gif= document.getElementById("gif");
const gifs=[
    "gifs/1.gif",
    "gifs/2.gif",
    "gifs/3.gif",
    "gifs/4.gif"
];

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
    let notaMax=notas[0];
    let materiasMaxNota=[];
    let materias=["matemática", "lengua", "efsi"]
    for(let i=0;i<notas.length;i++){
        if(notaMax<notas[i]){
            notaMax=notas[i];
        }
    }
    for(let i=0;i<notas.length;i++){
        if(notas[i]==notaMax){
            materiasMaxNota.push(materias[i]);
        }
    }

    return materiasMaxNota;
}
const mostrarGif = (nota) =>{
    if(nota<=3){
        gif.src=gifs[0];
    } else if(nota>3&&nota<6){
        gif.src=gifs[1];
    } else if(nota>=6&&nota<8){
        gif.src=gifs[2];
    } else{
        gif.src=gifs[3];
    }
}

promBtn.addEventListener('click',()=>{
    if(datosValidos()){
        if(promedioNotas()>=6){
            pVisor.style.color="green";
        } else{
            pVisor.style.color="red";
        }
        pVisor.innerText=promedioNotas();
        mostrarGif(promedioNotas());
    } else{
        alert("Los datos no son válidos o no has ingresado todas las notas!");
    }
});
mayorNota.addEventListener('click',()=>{
    let materiasMaxNota=mayorNotaInt([parseInt(mate.value),parseInt(lengua.value),parseInt(efsi.value)]);
    if(datosValidos()){
    pVisor.style.color="blue"
    pVisor.innerText="La/s materia/s con mayor nota es/son: "+materiasMaxNota.join(", ");
    }else{
        alert("Los datos no son válidos o no has ingresado todas las notas!");
    }
});