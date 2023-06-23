

function validateForm() {
    var fname = document.getElementById('fname').value;
    var email = document.getElementById('emailId').value;
    var contact = document.getElementById('contact').value;
    var pw1 = document.getElementById('pw1').value;
    var pw2 = document.getElementById('pw2').value;
    var cbox = document.getElementById('cbox').checked;
  
    // Clear previous error messages
    document.getElementById('fnameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('contactError').textContent = '';
    document.getElementById('pw1Error').textContent = '';
    document.getElementById('pw2Error').textContent = '';
  
    // Perform form validation
    if (fname.trim() === '') {
      document.getElementById('fnameError').textContent = 'Full Name is required.';
      return;
    }
  
    if (email.trim() === '') {
      document.getElementById('emailError').textContent = 'Email Address is required.';
      return;
    }
  
    if (contact.trim() === '') {
      document.getElementById('contactError').textContent = 'Contact Number is required.';
      return;
    }
  
    if (pw1.trim() === '') {
      document.getElementById('pw1Error').textContent = 'Password is required.';
      return;
    }
  
    if (pw2.trim() === '') {
      document.getElementById('pw2Error').textContent = 'Confirm Password is required.';
      return;
    }
  
    if (pw1 !== pw2) {
      document.getElementById('pw2Error').textContent = 'Passwords do not match.';
      return;
    }
  
    if (!cbox) {
      alert('Please agree to the Terms and Conditions.');
      return;
    }
  
    // Form validation passed, navigate to the index page
    window.location.href = 'index.html';
  }
  