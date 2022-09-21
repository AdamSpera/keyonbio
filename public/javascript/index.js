window.history.pushState("https://arcadia.onbio-key.com/", "", '/_layouts/PG/login.aspx?ReturnUrl=%2f');

document.getElementById("submitButton").addEventListener('click', function () {
  var useremail = document.getElementById("credential").value

  console.log(useremail)
  
  location.href = "https://arcadia.onbio-key.com";
});
