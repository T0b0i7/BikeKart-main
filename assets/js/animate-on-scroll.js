// Adds 'in-view' class to .card and .product elements when they enter the viewport
(function(){
  if('IntersectionObserver' in window === false) return; // graceful fallback
  const elems = document.querySelectorAll('.card, .product');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        // optional: unobserve to avoid re-trigger
        observer.unobserve(entry.target);
      }
    })
  },{threshold:0.12});
  elems.forEach((el,i)=>{
    // stagger via CSS variable
    el.style.setProperty('--delay', String(i%10));
    observer.observe(el);
  });
})();
