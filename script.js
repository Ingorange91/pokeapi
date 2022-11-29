'use strict'
const btn_pkn=document.querySelector('.btn_pkn');
const pk=document.querySelector(".pok_name");

btn_pkn.addEventListener('click', async()=>{
    let random=Math.trunc(Math.random()*700);
    console.log("numero asignado: ",random);
    let peticion= await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    let res= await peticion.json();

    let nombre=res.name;
    assing_data(nombre)
});

function assing_data(nombre){
    
    pk.textContent=nombre;
    console.log("insertando datos");
}



