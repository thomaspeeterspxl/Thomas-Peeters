document.addEventListener("DOMContentLoaded", function() {
    var cvButton = document.getElementById("cvButton");
    var creatieButtonGS = document.getElementById("creatieButtonGS");
    var creatieButtonUIUX = document.getElementById("creatieButtonUIUX");
    var creatieButton3D = document.getElementById("creatieButton3D");
    var creatieButtonAnimation = document.getElementById("creatieButtonAnimation");
    var creatieButtonWeb1 = document.getElementById("creatieButtonWeb1");
    var creatieButtonWeb2 = document.getElementById("creatieButtonWeb2");
    var DesignButton1 = document.getElementById("DesignButton1");
    var DesignButton2 = document.getElementById("DesignButton2");
    var DesignButton3 = document.getElementById("DesignButton3");
    var DesignButton4 = document.getElementById("DesignButton4");
    var DesignButton5 = document.getElementById("DesignButton5");
    var GithubButton1 = document.getElementById("GithubButton1");
    var GithubButton2 = document.getElementById("GithubButton2");

    cvButton.addEventListener("click", function() {
        var url1 = "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:c4e8ac0c-fadf-32ba-a4b0-60e66133784b";
        window.open(url1);
    });

    creatieButtonGS.addEventListener("click", function() {
        var url2 = "Design_projecten.html";
        window.location.href = url2;
    });

    creatieButtonUIUX.addEventListener("click", function() {
        var url3 = "wpl2.html";
        window.location.href = url3;
    });

    creatieButton3D.addEventListener("click", function() {
        var url4 = "3D.html";
        window.location.href = url4;
    });

    creatieButtonAnimation.addEventListener("click", function() {
        var url5 = "Animation.html";
        window.location.href = url5;
    });

    creatieButtonWeb1.addEventListener("click", function() {
        var url6 = "Code_projecten.html";
        window.location.href = url6;
    });

    creatieButtonWeb2.addEventListener("click", function() {
        var url7 = "Code_projecten.html";
        window.location.href = url7;
    });

    DesignButton1.addEventListener("click", function() {
        var url8 = "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:91d76097-8c04-3063-aa69-420b2633e377";
        window.open(url8);
    });

    DesignButton2.addEventListener("click", function() {
        var url9 = "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:f5b9da25-47c8-3f94-805e-d95871310f8e";
        window.open(url9);
    });

    DesignButton3.addEventListener("click", function() {
        var url10 = "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:67b1b5b2-5ee8-3d5f-9428-c90911658fe6";
        window.open(url10);
    });

    DesignButton4.addEventListener("click", function() {
        var url11 = "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:2214ba94-caa9-3b6b-978a-4fe16ba9513c";
        window.open(url11);
    });

    DesignButton5.addEventListener("click", function() {
        var url12 = "https://www.figma.com/proto/CrRIBgHT7MKPdtVl0PjzCu/Workshop-Figma---PXL-2023-(Copy)?page-id=1333%3A1136&node-id=1477-2552&scaling=contain";
        window.open(url12);
    });

    GithubButton1.addEventListener("click", function() {
        var url13 = "https://github.com/thomaspeeterspxl/Thomas-Peeters.git";
        window.open(url13);
    });

    GithubButton2.addEventListener("click", function() {
        var url14 = "https://github.com/thomaspeeterspxl/werkpakket2.git";
        window.open(url14);
    });
});
