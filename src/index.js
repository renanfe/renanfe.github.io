import './asset/img/bars-solid.svg';
import './asset/img/times-solid.svg';
import './asset/img/jugoo-app.jpg';
import './asset/img/jugoo-dashboard.jpg';
import './asset/img/mva-servicos.jpg';
import './asset/img/recanto-da-biju.jpg';
import './asset/img/recanto-flyer-cartão.jpg';
import './asset/img/cantinho-da-biju.jpg';
import './asset/img/linkedin.svg';
import './asset/img/github.svg';
import './asset/img/renan-logo.png';
import 'normalize.css';
import 'normalize.css';
import './style.scss';

document.getElementById("menu-open").addEventListener("click", openMenu, false);
document.getElementById("menu-close").addEventListener("click", closeMenu, false);
document.querySelectorAll("#side-menu a").forEach( el =>   el.addEventListener("click", closeMenu, false));
document.querySelector("#menu-home").addEventListener("click", () => document.querySelector('#home').style.bottom = "0px", false )

function openMenu(){
  document.getElementById("side-menu").style.display = "block";
};

function closeMenu(){
  document.getElementById("side-menu").style.display = "none";
};

function resetHomeTop() {
  
}

window.onscroll = () => {

  const scrollTop = document.documentElement.scrollTop;
  const header = document.querySelector("header");
  const headerimg = document.querySelector("header img");

  if (scrollTop >= 600) {
    header.style.backgroundColor = "rgb(31, 31, 31)";

  } else {
    header.style.backgroundColor = "";

  }

  const scrolled = window.pageYOffset;
  const home = document.querySelector('#home');
  home.style.bottom = -(scrolled * 0.2) + 'px';
  
};