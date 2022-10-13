window.onload = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
    });
}
function mostrarContainer() {
    document.getElementById('containerAdd').style.display = 'flex'
}
function esconderContainer() {
    document.getElementById('containerAdd').style.display = 'none'
}
function mostrarContainer2() {
    document.getElementById('containerAdd2').style.display = 'flex'
}
function esconderContainer2() {
    document.getElementById('containerAdd2').style.display = 'none'
}