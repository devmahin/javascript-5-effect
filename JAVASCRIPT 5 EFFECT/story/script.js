let arr = [
    {
        dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

    },
    {
        dp: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      
    },
    {
        dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
       
     
    },
    {
        dp: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
       
        
    },
]
let storys = document.getElementById("storys")
let clutter = "";
arr.forEach((dets,idx) => {
    clutter += `  <div id="story">
                <img id="${idx}" src="${dets.dp}" alt="">
            </div>`
})

storys.innerHTML = clutter


storys.addEventListener("click", function(dets) {
    let storys = arr[dets.target.id].story
    document.getElementById("fullScreen").style.display = "block"

    document.getElementById("fullScreen").style.backgroundImage = `url(${storys})`


    setTimeout(() => {
    document.getElementById("fullScreen").style.display = "none"

    },2000)
})

