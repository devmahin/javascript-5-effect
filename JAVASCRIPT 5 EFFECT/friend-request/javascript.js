const change = document.getElementById("change")
const btn = document.getElementById("add")

let check = 0;
btn.addEventListener("click", () => {
    if (check === 0) {
        change.innerHTML = "Friends"
        change.style.color = "green"
        btn.innerHTML = "Remove Friends"
        check = 1
        btn.style.backgroundColor = "red"


    } else{
        change.innerHTML = "Stranger"
        change.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0
        btn.style.backgroundColor = "green"
    }
})