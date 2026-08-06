
document.addEventListener('DOMContentLoaded',()=>{

 const input=document.getElementById('vehicle-search');
 const button=document.getElementById('search-btn');

 button?.addEventListener('click',buscar);

 input?.addEventListener('keydown',e=>{
   if(e.key==='Enter'){
      buscar();
   }
 });

 function buscar(){

   const termo=input.value.trim();

   if(!termo){
      alert('Digite o modelo do veículo.');
      input.focus();
      return;
   }

   /*
    Integração futura:

    Buscar no OpenCart

    Exemplo:

    https://iglucar.com.br/index.php?route=product/search&search=
   */

   const destino=
   "https://iglucar.com.br/index.php?route=product/search&search="+
   encodeURIComponent(termo);

   window.location.href=destino;

 }

});
