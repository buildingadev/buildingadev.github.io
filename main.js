const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const links = document.querySelectorAll('.navbar-links ul li a');

toggleButton.addEventListener('click', toggleClass);

links.forEach( link=> {
    link.addEventListener('click', ()=>{
        if(screen.width<600){
            toggleClass();
        }
    });
});

function toggleClass(){
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
};
