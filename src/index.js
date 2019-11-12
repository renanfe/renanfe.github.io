import './asset/img/profile.png';
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
  const headerH1 = document.querySelector("header h1");

  if (scrollTop >= 600) {
    header.style.backgroundColor = "rgb(31, 31, 31)";
    headerH1.style.visibility = "visible";
    headerH1.style.opacity = "1";
  } else {
    header.style.backgroundColor = "";
    headerH1.style.visibility = "hidden";
    headerH1.style.opacity = "0";
  }

  const scrolled = window.pageYOffset;
  const home = document.querySelector('#home');
  home.style.bottom = -(scrolled * 0.2) + 'px';
  
};