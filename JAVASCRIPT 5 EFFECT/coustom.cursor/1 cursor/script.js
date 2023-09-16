function circle() {
    const main = document.getElementById("main")
    main.addEventListener("mousemove", (dets) => {
        document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
})
}
circle()