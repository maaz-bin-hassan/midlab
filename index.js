document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior.
  
    // Get all form input elements
    const formInputs = document.querySelectorAll('#myForm input');
  
    // Log the form data to the console
    formInputs.forEach(input => {
      console.log(`${input.name}: ${input.value}`);
    });
  
    // Simulate a successful submission (replace with your actual submission logic)
    setTimeout(function() {
      document.getElementById("successMessage").style.display = "block";
    }, 2000); // Show success message after 2 seconds
  });
  