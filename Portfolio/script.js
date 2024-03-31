// Get the button element
let cvButton = document.getElementById("cvButton");
let creatieButtonGS = document.getElementById("creatieButtonGS");
let creatieButtonUIUX = document.getElementById("creatieButtonUIUX");
let creatieButton3D = document.getElementById("creatieButton3D");
let creatieButtonAnimation = document.getElementById("creatieButtonAnimation");

// Add click event listener
cvButton.addEventListener("click", function() {
    // Replace 'your_url_here' with the actual URL you want to open
    let url = "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:c4e8ac0c-fadf-32ba-a4b0-60e66133784b";
    // Open the URL in a new tab/window
    window.open(url);
});
creatieButtonGS.addEventListener("click", function() {
    let url = "Design_projecten.html";
    window.location.href = url;
});
creatieButtonUIUX.addEventListener("click", function() {
    let url = "wpl2.html";
    window.location.href = url;
});
creatieButton3D.addEventListener("click", function() {
    let url = "3D.html";
    window.location.href = url;
});
creatieButtonAnimation.addEventListener("click", function() {
    let url = "Animation.html";
    window.location.href = url;
});