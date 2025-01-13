document.querySelector('.click-to-enter').addEventListener('click', function() {
    this.classList.add('hide');
    
    document.querySelector('.main-content').classList.add('show');

    var video = document.getElementById('background-video');
    video.muted = false;
    video.play();
});


function copydiscorduser() {
    navigator.clipboard.writeText("mario_ot");
    alert("Discord User copied to clipboard!");
}

function copyemail() {
    navigator.clipboard.writeText("mario@rileyb.co.uk");
    alert("Email copied to clipboard!");
}
