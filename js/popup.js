let poupuDis = document.getElementById("pop-des");

function popupClose() {
    let popupOpen = document.getElementById("popup");
    let popupClose = document.getElementById("popup-close");
    popupOpen.style.display = "none";
  }

  setTimeout(function () {
    let popupOpen = document.getElementById("popup");
    popupOpen.style.display = "block";
  }, 3000);

  setInterval(function () {
    let popupOpen = document.getElementById("popup");
    popupOpen.style.display = "block";
    poupuDis.textContent="Sale on Men Dress";
  }, 20000);