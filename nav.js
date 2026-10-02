const navToggle=document.querySelector('.nav-toggle');

if(navToggle){
  const nav=document.getElementById(navToggle.getAttribute('aria-controls'));
  const label=navToggle.querySelector('span');
  const setMenuOpen=open=>{
    navToggle.setAttribute('aria-expanded',String(open));
    label.textContent=open?'Close':'Menu';
  };

  navToggle.addEventListener('click',()=>setMenuOpen(navToggle.getAttribute('aria-expanded')!=='true'));
  nav?.addEventListener('click',event=>{
    if(event.target.closest('a'))setMenuOpen(false);
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&navToggle.getAttribute('aria-expanded')==='true'){
      setMenuOpen(false);
      navToggle.focus();
    }
  });
  window.addEventListener('resize',()=>{
    if(window.innerWidth>620)setMenuOpen(false);
  });
}
