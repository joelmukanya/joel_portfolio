// Fetch the currect year
document.getElementById("currentYear").innerText = new Date().getFullYear();

// Updating the width of the progress bar
updateWidth = (progress, value)=>{
    // round the value
    value = Math.round(value);
    // To change the width of the progress-bar
    progress.querySelector(".progress").style.width = value;
    // TO change the width of the span -> text in percentage
    progress.querySelector(".progress-contents").textContent = '${value}%';
}