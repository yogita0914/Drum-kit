const arraywords = document.getElementById('header');
arraywords.addEventListener('click', (e) => {
    let get = e.target.innerHTML;
    mySounds(get);
    buttonAnimation(get);
})
arraywords.addEventListener('keydown', (e) => {
    let get = e.key;
    let array = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
    if (!array.includes(get)) {
        alert('Wrong key press');
        return;
    }
    mySounds(get);
    buttonAnimation(get);
})
const mySounds = (key) => {
    const sound = new Audio(`sounds/${key}.mp3`);
    sound.play();
}
const buttonAnimation = (key) => {
    const active = document.querySelector(`.${key}`);
    active.classList.add('pressed');
    setTimeout(() => {
        active.classList.remove('pressed');
    }, 100);
}