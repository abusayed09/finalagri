     const form = document.getElementById("contactForm");

      form.addEventListener("submit", function (event) {
        const name_variable = document.getElementById("name").value.trim();
        const email_variable = document.getElementById("email").value.trim();
         const topic_variable = document.getElementById("topic").value.trim();

          const message_variable = document.getElementById("message").value.trim();
        if (name_variable === "" || email_variable === "" || topic_variable === "" || message_variable === "") {
          alert("Please fill in all fields.");
          event.preventDefault(); // stop submit
        } else {
          alert("Form submitted successfully!");
        }
      });