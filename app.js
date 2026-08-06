
document.addEventListener('DOMContentLoaded',()=>{

  console.log('IGLU-CAR Landing iniciada');

  // Rolagem suave
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click',e=>{
      e.preventDefault();
      const alvo=document.querySelector(link.getAttribute('href'));
      if(alvo){
        alvo.scrollIntoView({behavior:'smooth'});
      }
    });
  });

  // Animação de entrada
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('section').forEach(sec=>{
    observer.observe(sec);
  });

});
