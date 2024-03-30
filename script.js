document
        .getElementById("registrationForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          var password1 = document.getElementById("password1").value;
          var password2 = document.getElementById("password2").value;
          if (password1 !== password2) {
            document.getElementById("passwordError").style.display = "block";
          } else {
            document.getElementById("passwordError").style.display = "none";
            // Submit the form if passwords match
            this.submit();
          }
        });