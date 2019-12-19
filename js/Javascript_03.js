let init = function () {

    const inp = document.querySelectorAll(".grid-panel input");

    // console.dir(document.styleSheets[0].cssRules[0]);

    inp.forEach( ele =>{
        ele.addEventListener("change", setChangeListener);
        ele.addEventListener("mousemove", setChangeListener);
    });
    
}

let setChangeListener = function(e){
    let suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}