// Tab switcher
function showTab(id){
  document.querySelectorAll('.qtab').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.qpane').forEach(p=>p.classList.remove('on'));
  document.querySelector('[onclick="showTab(\''+id+'\'\')"]').classList.add('on');
  document.getElementById('pane-'+id).classList.add('on');
}
function toast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2000);
}
function copyColor(hex,name){navigator.clipboard.writeText(hex).then(()=>toast(name+' '+hex+' copied'));}
function copyText(txt){navigator.clipboard.writeText(txt).then(()=>toast('Copied!'));}
function copyBlock(id){
  const data=(typeof COPY_BLOCKS!=='undefined'&&COPY_BLOCKS[id])||(typeof LAYOUT_SNIPPETS!=='undefined'&&LAYOUT_SNIPPETS[id]);
  if(data){navigator.clipboard.writeText(data).then(()=>toast('Copied to clipboard'));return;}
  const el=document.getElementById(id);
  if(el)navigator.clipboard.writeText(el.innerText||el.textContent).then(()=>toast('Copied'));
}
function copyIcon(name){
  const el=document.getElementById('icn-'+name);
  if(el)navigator.clipboard.writeText(el.outerHTML).then(()=>toast(name+' SVG copied'));
}
const sects=document.querySelectorAll('section[id],div[id="hero"]');
const links=document.querySelectorAll('nav a');
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)links.forEach(l=>{
      l.classList.remove('active');
      if(l.getAttribute('href')==='#'+e.target.id)l.classList.add('active');
    });
  });
},{rootMargin:'-20% 0px -70% 0px'});
sects.forEach(s=>obs.observe(s));