const email = "ChipiChapaCompany@gmail.com";
const phone = "+086543575";

document.getElementById("email").textContent = email;
document.getElementById("phone").textContent = phone;

document.addEventListener("DOMContentLoaded", function(){
  var form = document.getElementById("registrationForm");
  form.addEventListener("submit", function(event) {
      event.preventDefault(); 

      var email = document.getElementById("email").value;
      var name = document.getElementById("name").value;
      var phone = document.getElementById("phone").value;
      var event = document.getElementById("event").value;
      var errorMessage = document.getElementById("error-message");

      
      if (email === "" || !email.includes("@")) {
          errorMessage.textContent = "Email tidak valid!";
          return;
      }
      if (name.length < 3) {
          errorMessage.textContent = "Nama harus minimal 3 karakter!";
          return;
      }
      if (!phone.startsWith("08") || phone.length > 14) {
          errorMessage.textContent = "Nomor telepon tidak valid!";
          return;
      }
      if (event === "") {
          errorMessage.textContent = "Event harus dipilih!";
          return;
      } 
      submitForm();
  });

function submitForm() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
              if (this.status == 201) {
                  alert("Pendaftaran berhasil!");
                  form.reset();
                  errorMessage.textContent = "";
              } else {
                  alert("Pendaftaran gagal! Silakan coba lagi.");
              }
          }
      };
      xhttp.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
      xhttp.setRequestHeader("Content-Type", "application/json");
      var data = {
          email: document.getElementById("email").value,
          name: document.getElementById("name").value,
          phone: document.getElementById("phone").value,
          event: document.getElementById("event").value
      };
      xhttp.send(JSON.stringify(data));
}

