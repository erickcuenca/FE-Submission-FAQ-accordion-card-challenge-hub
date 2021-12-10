const panels = document.querySelectorAll(".qa-container");
panels.forEach(panel => {
    panel.addEventListener("click", function() {
        this.querySelector(".panel").style.maxHeight != 0 && this.querySelector(".panel").style.maxHeight != "0px"
        ? this.querySelector(".panel").style.maxHeight="0px" 
        : this.querySelector(".panel").style.maxHeight= this.querySelector(".panel").scrollHeight + "px"
        this.querySelector("p").classList.toggle("active-question");
        this.querySelector(".arrow").classList.toggle("active-arrow")
    })
})
