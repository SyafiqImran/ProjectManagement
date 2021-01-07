
// progress bar function
let i = 0;
let move = () => {
    if (i == 0) {
        i = 1;
        let elem = document.querySelector(".myBar");
        let width = 10;
        let id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
            clearInterval(id);
            i = 0;
            } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width  + "%";
            }
        }
    }
}


// Completed button to change color to green when clicked
let completedButtonStyle = _this => {
    _this.style.backgroundColor = "green";
  }
