
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.main-nav a').forEach(a=>{if(a.href===location.href)a.classList.add('active');});
const form=document.querySelector('#suggestion-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const nome=data.get('nome');const email=data.get('email');const assunto=data.get('assunto');const mensagem=data.get('mensagem');const body=`Nome: ${nome}%0AEmail: ${email}%0AAssunto: ${assunto}%0A%0ASugestão:%0A${mensagem}`;const url=`mailto:projetoivob2@gmail.com?subject=${encodeURIComponent('Sugestão para o Checkpoint Games: '+assunto)}&body=${body}`;window.location.href=url;});}
