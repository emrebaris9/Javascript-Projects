const takip = document.getElementById("takipEt");
takip.style.position = "absolute";
window.onmousemove = function (e) {    //pencere içinde mouse hareketi buttona aktarılıyo
    takip.style.left = e.clientX + "px"; 
    takip.style.top = e.clientY + "px";
}