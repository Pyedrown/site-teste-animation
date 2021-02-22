
window.document.getElementsByTagName('button')[0].onclick = () => {
    document.getElementsByTagName('header')[0].classList.toggle('animation');

    document.getElementsByTagName('footer')[0].classList.toggle('animation');

    document.getElementsByTagName('button')[0].classList.toggle('animation-rotation')

    document.getElementsByTagName('a')[0].classList.toggle('animation-font-size');
    document.getElementsByTagName('a')[1].classList.toggle('animation-font-size');
};