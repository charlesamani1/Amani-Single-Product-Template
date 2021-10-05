let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.menus');

menu.onclick = () =>{
  navbar.classList.toggle('active');

}

window.onscroll = () =>{
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll').classList.add('active');
  }else{
    document.querySelector('#scroll').classList.remove('active');
  }

}

