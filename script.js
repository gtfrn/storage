document.getElementById("payBillBtn").onclick = function() {
    // Add logic to navigate or perform action for "Pay bill"
};

document.getElementById("uHaulBtn").onclick = function() {
    // Add logic to navigate or perform action for "U-Haul"
};

document.getElementById("learnMoreBtn").onclick = function() {
    // Add logic to navigate or perform action for "Learn more..."
};
function checkOverlap(element) {
  const rect1 = element.getBoundingClientRect();

  for (const el of document.querySelectorAll('*')) {
    if (el === element) continue;
    const rect2 = el.getBoundingClientRect();
    if (
      rect1.right >= rect2.left &&
      rect1.left <= rect2.right &&
      rect1.bottom >= rect2.top &&
      rect1.top <= rect2.bottom
    ) {
      return true;
    }
  }
  return false;
}

function positionEmailButton() {
  const emailButton = document.getElementById('emailButton');
  let positionX = window.innerWidth - emailButton.offsetWidth - 20;
  let positionY = window.innerHeight - emailButton.offsetHeight - 20;

  emailButton.style.right = positionX + 'px';
  emailButton.style.bottom = positionY + 'px';

  while (checkOverlap(emailButton)) {
    positionY -= 10;
    emailButton.style.bottom = positionY + 'px';
  }
}

window.addEventListener('load', positionEmailButton);
window.addEventListener('resize', positionEmailButton);
