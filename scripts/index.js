
function changeText(text) {
    const nameText = document.getElementById(text);
    if(text == 'name') {
        nameText.innerHTML = 'Tijuus'
    }
    else {
        nameText.innerHTML = 'playing volleyball and gaming'
    }
}

function changeBack(text) {
    const nameText = document.getElementById(text);
    if(text == 'name') {
        nameText.innerHTML = 'Andzhur'
    }
    else {
        nameText.innerHTML = 'creating and innovating'
    }
}

var oldScrollY = window.scrollY;
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    if (oldScrollY > window.scrollY) {
        header.classList.add('nav-scrolled');
    } else {
        header.classList.remove('nav-scrolled');
    } 
    oldScrollY = window.scrollY;
})
