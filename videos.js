
const videoMap = {
  andre: "",
  autoesporte: "",
  marcelinho: "",
  paulinho: "",
  zucatelli: "",
  impermeabilizacao: "",
  resistencia: "",
  instalacao: "",
  granizo: ""
};

function abrirVideo(chave){
  const url = videoMap[chave];
  if(!url){
    alert("Configure a URL do vídeo para: " + chave);
    return;
  }
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll("[data-video]").forEach(el=>{
    el.addEventListener("click", ()=>abrirVideo(el.dataset.video));
  });
});
