var input = document.querySelector("#phone");
let iti = window.intlTelInput(input, {
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  initialCountry: "auto",
  geoIpLookup: function (callback) {
    fetch("https://ipapi.co/json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        callback(data.country_code);
      })
      .catch(function () {
        callback("us");
      });
  },
});

let form = document.getElementById("my-form");
let phoneInput = document.querySelector("#phone");
phoneInput.addEventListener("input", (event) => {});

oninput = (event) => {
  let invalidPhoneDiv = document.getElementById("invalidPhone");
  invalidPhoneDiv.style.display = "none";
};

async function handleSubmit(event) {
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);
  const invalidPhoneDiv = document.getElementById("invalidPhone");
  if (!iti.isValidNumber()) {
    invalidPhoneDiv.style.display = "block";
    event.preventDefault();
  } else {
    invalidPhoneDiv.style.display = "none";
  }
  //   fetch(event.target.action, {
  //     method: form.method,
  //     body: data,
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         status.innerHTML = "Thanks for your submission!";
  //         form.reset();
  //         // Simulate a mouse click:
  //         window.location.href = "thank-you.html";
  //       } else {
  //         response.json().then((data) => {
  //           if (Object.hasOwn(data, "errors")) {
  //             status.innerHTML = data["errors"].map((error) => error["message"]).join(", ");
  //           } else {
  //             status.innerHTML = "Oops! There was a problem submitting your form";
  //           }
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       status.innerHTML = "Oops! There was a problem submitting your form";
  //     });
}
form.addEventListener("submit", handleSubmit);
