window.history.pushState("https://arcadia.onbio-key.com/", "", '/_layouts/PG/login.aspx?ReturnUrl=%2Fsso%2Fdefault.aspx');

document.getElementById("submitButton").addEventListener('click', function () {
  location.href = "https://arcadia.onbio-key.com";
});