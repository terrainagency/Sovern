export function resizeInput(e, width) {
    if(e.target.value !== '') {
        e.target.nextSibling.textContent = e.target.value;
        e.target.style.width = e.target.nextSibling.offsetWidth + "px";
    } else {
        e.target.style.width = width
    }
}