document.addEventListener("DOMContentLoaded",()=>{

const links=document.querySelectorAll('a[href*="youtube.com"],a[href*="youtu.be"]');

links.forEach(link=>{

link.setAttribute("rel","noopener noreferrer");

link.addEventListener("click",()=>{

if(typeof gtag==="function"){
gtag("event","video_click",{
event_category:"Videos",
event_label:link.href
});
}

if(typeof fbq==="function"){
fbq("trackCustom","VideoClick",{
url:link.href
});
}

});

});

const iframe=document.querySelector(".hero-video iframe");

if(iframe){

iframe.setAttribute("loading","lazy");
iframe.setAttribute("referrerpolicy","strict-origin-when-cross-origin");

}

});
