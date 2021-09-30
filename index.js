var contactElems = document.getElementsByClassName("contact-card");
var shareElems = document.getElementsByClassName("mobile-share");

function showMobileSocial() {
    for (var i=0; i < shareElems.length; i += 1) {
        shareElems[i].style.display = "flex";
    }
}

function showDesktopSocial() {
    for (var i=0; i < shareElems.length; i += 1) {
        if (shareElems[i].style.display = "none") {
        shareElems[i].style.display = "inline-flex";
        } else {
            shareElems[i].style.display = "none";
        }
    }
}

function hideMobileSocial() {
    for (var i=0; i < shareElems.length; i += 1) {
        shareElems[i].style.display = "none";
    }
}

function hideContact() {
    for (var i=0; i < contactElems.length; i += 1) {
        contactElems[i].style.display = "none";
    }
    showMobileSocial();
}

function showContact() {
    for (var i=0; i < contactElems.length; i += 1) {
        contactElems[i].style.display = "flex";
    }
    hideMobileSocial();
}

// var button1 = document.querySelectorAll('#button1');
// button1.onclick = buttonClicked;
// function buttonClicked(){
//   var tooltip = document.querySelectorAll('.tooltiptext');
//   tooltip.style.visibility = 'visible';
// }