// Fetch the currect year
document.getElementById("currentYear").innerText = new Date().getFullYear();
// Job title
const jobTitle = ["a CEO & Founder", "an IT Lecturer", "a Software Developer","a SQL Developer", "a Web Developer"];
// Declaring variables
let cnt =0;
let title = "";
let index = 0;
let letter = "";

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
let funcTyping = () =>{
    if(cnt > jobTitle.length ){
        // reset cnt
        cnt = 0;
        console.log("star over");
    }
    title = jobTitle[cnt];
    letter = title.length > 0 ? title.slice(0, ++index):
    title = jobTitle[cnt];
    //
    document.querySelector('.typing').innerText = letter;
    if(letter.length == title.length) {
        cnt++;
        index = 0;
    }
    setTimeout(funcTyping, 200);
}
// Calling a function
funcTyping();
// Profile Url
let profile_urls = [
    'https://i.postimg.cc/W3tfwN1H/joel1.jpg',
    'https://i.postimg.cc/zD64pgWS/joel2.jpg',
    'https://i.postimg.cc/rwL322fD/joel3.jpg'
];

(function loadImage() {
    profile_urls.forEach( (item, index)=> {
        document.querySelectorAll('.profile-imgs')[index].src = `${item}`;
    })
})();
// On scroll
window.addEventListener('scroll', ()=> {
    let skills = document.querySelector('#skills');
    let progressBar = document.querySelector('.progress-bar');
    let currPos = skills.getBoundingClientRect().top;
    let innerH = window.innerHeight;
    if(currPos < innerH) {
        document.querySelector('.up-arrow').display= 'block';
        progressBar.classList.add('progress-animation');
    }else {
        progressBar.classList.remove('progress-animation');
    }
});
