function generateCaptcha() {
  return Math.floor(100000 + Math.random() * 900000);
}

function displayCaptcha() {
  var captcha = generateCaptcha();
  document.getElementById("captchaDisplay").innerText = captcha;
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("refreshCaptcha")
    .addEventListener("click", function () {
      displayCaptcha();
    });

  displayCaptcha();

  document
    .getElementById("captchaForm")
    .addEventListener("submit", function (event) {
      var enteredCaptcha = document.getElementById("captcha").value;
      var displayedCaptcha =
        document.getElementById("captchaDisplay").innerText;

      if (enteredCaptcha !== displayedCaptcha) {
        alert("Captcha incorrect!");
        event.preventDefault();
      } else {
        alert(
          "REGISTRATION SUCCESSFULLY!  THANK YOU!  OUR TEAM WILL CONTACT YOU SOON!"
        );
        alert(
          "Kindly ignore next error message . You are successfully registered and we will contact you soon!"
        );
      }
    });
});
