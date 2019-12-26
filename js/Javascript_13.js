const imgAry = document.querySelectorAll(".slide-in");
const scrollListener = function () {
    animateSlide();
}

const animateSlide = function () {
    imgAry.forEach(ele => {
        const slideInAt =
            window.scrollY + window.innerHeight - ele.offsetHeight / 2;
        const imgBottom = ele.offsetTop + ele.offsetHeight;
        const isHaldShown = slideInAt > ele.offsetTop;
        const isNotScrolledPast = window.scrollY < imgBottom;
        if (isHaldShown && isNotScrolledPast) {
            ele.classList.add("active");
        } else {
            ele.classList.remove("active");
        }
    });
}

function debounce(func, delay = 15, immediate = true) {
    var timer;
    return function() {
        var context = this, args = arguments;
        var later = function () {
            timer = null;
            if (!immediate) func.apply(context, args);
        }
        var callNow = immediate && !timer;
        clearTimeout(timer);
        timer = setTimeout(later, delay);
        if (callNow) func.apply(context, args);
    };
}

window.addEventListener("scroll", debounce(scrollListener));
// animateSlide();