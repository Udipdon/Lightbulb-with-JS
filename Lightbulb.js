let isBulbOn = false;

function toggleBulb() {
  const bulb = document.getElementById("bulb");

  if (isBulbOn) {
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
  } else {
    bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
  }

  isBulbOn = !isBulbOn; // Toggle the state
}
