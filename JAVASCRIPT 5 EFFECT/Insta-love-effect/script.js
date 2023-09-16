const main = document.querySelector("#main")
const love = document.querySelector("i")
main.addEventListener("dblclick", () => {
    love.style.transform = "translate(-50%, -50%) scale(1)"
    love.style.opacity = 0.8;

    setTimeout(() => {
        love.style.opacity = 0;
    },1500)
    setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)"
    },2500)
})