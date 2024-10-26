window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progressWidth = (scrollPosition / totalHeight) * 100;

    document.querySelector('.scroll').style.width = progressWidth + '%';
});