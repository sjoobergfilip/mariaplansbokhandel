const navSlid = () =>{
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li');

    hamburger.addEventListener('click', () => {
        
        //buger menu
        nav.classList.toggle('nav-active');
        
        //animation hamburger
        hamburger.classList.toggle('toggle');
        
    });
}

navSlid();