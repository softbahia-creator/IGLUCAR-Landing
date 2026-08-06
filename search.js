document.addEventListener("DOMContentLoaded",()=>{

const input=document.getElementById("vehicle-search");
const button=document.getElementById("search-btn");

if(!input||!button)return;

button.addEventListener("click",buscar);

input.addEventListener("keydown",e=>{
if(e.key==="Enter")buscar();
});

function buscar(){

const termo=input.value.trim();

if(termo===""){
alert("Digite o modelo do seu veículo.");
input.focus();
return;
}

const destino="https://iglucar.com.br/index.php?route=product/search&search="+encodeURIComponent(termo);

window.location.href=destino;

}

});
