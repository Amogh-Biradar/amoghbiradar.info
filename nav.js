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

const main=document.querySelector('main');
const firstSection=main?.querySelector(':scope > section:first-child');

if(firstSection){
  const backToTop=document.createElement('button');
  const backToTopArrow=document.createElement('span');
  const backToTopLabel=document.createElement('span');
  backToTop.className='back-to-top';
  backToTop.type='button';
  backToTop.setAttribute('aria-label','Back to top');
  backToTopArrow.setAttribute('aria-hidden','true');
  backToTopArrow.textContent='↑';
  backToTopLabel.textContent='Top';
  backToTop.append(backToTopArrow,backToTopLabel);
  document.body.append(backToTop);

  const firstSectionObserver=new IntersectionObserver(([entry])=>{
    backToTop.classList.toggle('is-visible',!entry.isIntersecting);
  });
  firstSectionObserver.observe(firstSection);

  backToTop.addEventListener('click',()=>{
    const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({top:0,behavior:reduceMotion?'auto':'smooth'});
    document.querySelector('.wordmark')?.focus({preventScroll:true});
  });
}
