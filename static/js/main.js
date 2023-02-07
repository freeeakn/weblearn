const btn = document.getElementById("naviBtn");
const navi = document.getElementById("navi");

function windowListener() {
    var width = window.innerWidth;
    if (width < 767) {
      navi.classList.add("hide");
    } else {
        navi.classList.remove("hide");
    }
}

window.addEventListener('resize', function() {
    windowListener();
});

document.getElementById("naviBtn").addEventListener("click", function() {
    if (navi.classList.contains("hide")) {
        navi.classList.remove("hide");
        btn.classList.remove("menu-icon");
        btn.classList.add("cross");
    } else {
        navi.classList.add("naviup");
        btn.classList.add("menu-icon");
        btn.classList.remove("cross");
        setTimeout(
            function() {
            navi.classList.add("hide");
            navi.classList.remove("naviup");
            },
            200
        );
    }
});

alert("<3");