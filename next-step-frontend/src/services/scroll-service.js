export function scrollToElement(targetId, behaviour) {
    let target = document.getElementById(targetId);
    window.scrollTo({top: target.offsetTop - 80, behavior: behaviour});
}