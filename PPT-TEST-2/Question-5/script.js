function validateForm(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var dob = document.getElementById('dob').value;
    var color = document.getElementById('color').value;
  
    // Validate name (should not be empty)
    if (name.trim() === '') {
      showError('name', 'Name is required');
    } else {
      hideError('name');
    }
  
    // Validate email (should be a valid email address)
    if (!isValidEmail(email)) {
      showError('email', 'Invalid email');
    } else {
      hideError('email');
    }
  
    // Validate phone number (should be 10 digits)
    if (!isValidPhoneNumber(phone)) {
      showError('phone', 'Invalid phone number');
    } else {
      hideError('phone');
    }
  
    // Validate password (should be at least 8 characters)
    if (password.length < 8) {
      showError('password', 'Password should be at least 8 characters');
    } else {
      hideError('password');
    }
  
    // Validate age (should be between 18 and 99)
    if (age < 18 || age > 99) {
      showError('age', 'Age should be between 18 and 99');
    } else {
      hideError('age');
    }
  
    // Validate gender (should be selected)
    if (gender === '') {
      showError('gender', 'Please select a gender');
    } else {
      hideError('gender');
    }
  
    // Validate date of birth (should not be empty)
    if (dob === '') {
      showError('dob', 'Date of Birth is required');
    } else {
      hideError('dob');
    }
  
    // Validate favorite color (should not be empty)
    if (color === '') {
      showError('color', 'Favorite color is required');
    } else {
      hideError('color');
    }
  
    // Submit the form if all validations pass
    if (
      name.trim() !== '' &&
      isValidEmail(email) &&
      isValidPhoneNumber(phone) &&
      password.length >= 8 &&
      age >= 18 &&
      age <= 99 &&
      gender !== '' &&
      dob !== '' &&
      color !== ''
    ) {
      document.getElementById('myForm').submit();
    }
  }
  
  function isValidEmail(email) {
    // Simple email validation regex
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    return emailRegex.test(email);
  }
  
  function isValidPhoneNumber(phone) {
    // Simple phone number validation regex (10 digits)
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
  
  function showError(field, message) {
    var errorField = document.getElementById(field + '-error');
    if (errorField) {
      errorField.innerText = message;
    } else {
      var div = document.createElement('div');
      div.classList.add('error');
      div.innerText = message;
      div.id = field + '-error';
      var inputField = document.getElementById(field);
      inputField.parentNode.insertBefore(div, inputField.nextSibling);
    }
  }
  
  function hideError(field) {
    var errorField = document.getElementById(field + '-error');
    if (errorField) {
      errorField.remove();
    }
  }
  