// Get the button element
var cvButton = document.getElementById("cvButton");
var creatieButtonGS = document.getElementById("creatieButtonGS");
var creatieButtonUIUX = document.getElementById("creatieButtonUIUX");
var creatieButton3D = document.getElementById("creatieButton3D");
var creatieButtonAnimation = document.getElementById("creatieButtonAnimation");

// Add click event listener
cvButton.addEventListener("click", function() {
    // Replace 'your_url_here' with the actual URL you want to open
    var url = "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:c4e8ac0c-fadf-32ba-a4b0-60e66133784b";
    // Open the URL in a new tab/window
    window.open(url);
});
creatieButtonGS.addEventListener("click", function() {
    var url = "Design_projecten.html";
    window.location.href = url;
});
creatieButtonUIUX.addEventListener("click", function() {
    var url = "wpl2.html";
    window.location.href = url;
});
creatieButton3D.addEventListener("click", function() {
    var url = "3D.html";
    window.location.href = url;
});
creatieButtonAnimation.addEventListener("click", function() {
    var url = "Animation.html";
    window.location.href = url;
});