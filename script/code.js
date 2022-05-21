// Fetch the currect year
document.getElementById("currentYear").innerText = new Date().getFullYear();
// Job title
const jobTitle = ["a CEO & Founder", "an IT Lecturer", "a Software Developer","a SQL Developer", "a Web Developer"];
// Declaring variables
let cnt =0;
let title = '';
let index = 0;
let letter = '';

// Updating the width of the progress bar
updateWidth = (progress, value)=>{
    // round the value
    value = Math.round(value);
    // To change the width of the progress-bar
    progress.querySelector(".progress").style.width = value;
    // TO change the width of the span -> text in percentage
    progress.querySelector(".progress-contents").textContent = '${value}%';
}
//
funcTyping = () =>{
    if(cnt > jobTitle.length ){
        // reset cnt
        cnt = 0;
    }
    title = jobTitle[cnt];
    letter = title.slice(0, ++index);
    //
    document.querySelector('.typing').innerText = letter;
    if(letter.length == title.length) {
        cnt++;
        index = 0;
    }

    setTimeout(funcTyping, 1000);
}
// Calling a function
funcTyping();
