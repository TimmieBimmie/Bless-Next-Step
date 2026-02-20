export function scrollToElement(targetId, behaviour) {
    let target = document.getElementById(targetId);
    window.scrollTo({top: target.offsetTop - 150, behavior: behaviour});
}