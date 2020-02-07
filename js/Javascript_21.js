const sv = document.querySelector(".speed-value");
const units = document.querySelector(".units");

navigator.geolocation.watchPosition( (data) => {
    units.textContent = data.coords.speed;
    // console.log(data.coords);
}, (err) => {
    console.error(err);
});
console.log("okok");