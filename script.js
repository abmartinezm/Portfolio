function toggleMenu(){
    const menu=document.querySelector('.menu-links')
    const icon=document.querySelector('.hamburger-icon')
    const close=document.querySelector('.close-menu')
    menu.classList.toggle('open')
    icon.classList.toggle('open')
    close.classList.toggle('open')
}


const toggle= document.querySelector('#toggle');
toggle.addEventListener("click", themeSwitcher);

let isLight = true;

var linkedinImg=document.getElementById('linkedin');
var ctcLinkedinImg=document.getElementById('contact-linkedin');
var githubImg=document.getElementById('git');
var expImg=document.getElementById('exp');
var educImg=document.getElementById('edu');
var mailImg=document.getElementById('email')

function themeSwitcher(){
    isLight =!isLight;

    var rootElement = document.body;
    rootElement.classList.toggle('lightMode');

}



window.onscroll=function(e){
    var topScroll=document.getElementById('scroll');
    e.preventDefault();
    
    topScroll.style.display=document.documentElement.scrollTop >  300 ? "block" : "none";
    

}

function topScroll(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Storage theme on localstorage

const themeSwitch=document.getElementById('toggle');




var linkedinDark=document.getElementById('linkedin-2');
var ctcLinkedinDark=document.getElementById('contact-linkedin-2');
var githubDark=document.getElementById('git-2');
var expDark=document.getElementById('exp-2');
var educDark=document.getElementById('edu-2');
var mailDark=document.getElementById('email-2')

var checkbox=document.getElementById('toggle');

themeSwitch.checked=false;
function clickHandler(){
    if(this.checked){
        console.log('toggle clicked')
        document.body.classList.add('lightMode');

        localStorage.setItem('theme','lightMode');
        
        if(localStorage.getItem('theme')==='lightMode'){
            linkedinImg.style.display = 'none';
            linkedinDark.style.display = 'block';

            ctcLinkedinImg.style.display = 'none';
            ctcLinkedinDark.style.display = 'block';

            githubImg.style.display = 'none';
            githubDark.style.display = 'block';

            expImg.style.display = 'none';
            expDark.style.display = 'block'

            
            educImg.style.display = 'none';
            educDark.style.display = 'block'

            
            mailImg.style.display = 'none';
            mailDark.style.display = 'block'
        }


    }else{
        document.body.classList.remove('lightMode');

        localStorage.setItem('theme','dark')

            linkedinImg.style.display = 'block';
            linkedinDark.style.display = 'none';

            ctcLinkedinImg.style.display = 'block';
            ctcLinkedinDark.style.display = 'none';

            githubImg.style.display = 'block';
            githubDark.style.display = 'none';

            expImg.style.display = 'block';
            expDark.style.display = 'none'
        
            educImg.style.display = 'block';
            educDark.style.display = 'none'

            mailImg.style.display = 'block';
            mailDark.style.display = 'none'
        
    }
}
themeSwitch.addEventListener('click',clickHandler);




window.onload= checkTheme();



// Bring saved theme back

function checkTheme() {
    const localstorageTheme= localStorage.getItem('theme');

    if(localstorageTheme === 'lightMode' ){
        document.body.className='lightMode';

        toggle.checked=true;

        linkedinImg.style.display = 'none';
        linkedinDark.style.display = 'block';

        ctcLinkedinImg.style.display = 'none';
        ctcLinkedinDark.style.display = 'block';

        githubImg.style.display = 'none';
        githubDark.style.display = 'block'

        expImg.style.display = 'none';
        expDark.style.display = 'block'
    
        educImg.style.display = 'none';
        educDark.style.display = 'block'

        mailImg.style.display = 'none';
        mailDark.style.display = 'block'



    }else{
        document.body.className='dark';
        toggle.checked=false;

            linkedinImg.style.display = 'block';
            linkedinDark.style.display = 'none';

            ctcLinkedinImg.style.display = 'block';
            ctcLinkedinDark.style.display = 'none';

            githubImg.style.display = 'block';
            githubDark.style.display = 'none';

            expImg.style.display = 'block';
            expDark.style.display = 'none'
        
            educImg.style.display = 'block';
            educDark.style.display = 'none'

            mailImg.style.display = 'block';
            mailDark.style.display = 'none'
    }
}

// Ham menu

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 






