const carouselImg = document.querySelector(".carousel--img_item");
const imgs = document.querySelectorAll(".img");
const items = document.querySelectorAll(".item");
let index = 0;
let width = 0;

function CarouselFunc() {
  items.forEach((item) => item.classList.remove("active"));
  carouselImg.classList.remove("notransition");
  let Interval = setInterval(() => {
    width++;
    items[index].style.setProperty("--item-width", width + "%");
    if (width === 100) {
      width = 0;
      items[index].style.setProperty("--item-width", 0 + "%");
     
      index += 1;
      if (index >= imgs.length) {
        carouselImg.classList.add("notransition");
        imgs[0].style.transform = "translateX(-200%)";
        index = 0;
        setTimeout(() => {
          imgs[0].style.transform = "translateX(0%)";
        }, 200);
      }
      carouselImg.style.transform = `translateX(${-index * 100}%)`;
      clearInterval(Interval);
      setTimeout(() => {
        CarouselFunc();
      }, 1000);
    }
    3;
  }, 10);
}

CarouselFunc();


// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);