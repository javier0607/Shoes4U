const signFormHandler = async (event) => {
    
    event.preventDefault();
  
    
    const email = document.querySelector('#email-sign').value.trim();
    const password = document.querySelector('#password-sign').value.trim();
  
    if (email && password) {
      
      const response = await fetch('/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up');
      }
    }
  };
  
  document
    .querySelector('.sign-form')
    .addEventListener('submit', signFormHandler);
  