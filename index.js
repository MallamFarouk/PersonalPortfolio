// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {  
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault()
  if (validateForm) {
    console.log('Submitted')
    //this.submit()
  }

})

function validateForm() {
  //fetch input
  var nameInput = document.getElementById("name");
  var messageInput = document.getElementById("message");
  var emailInput = document.getElementById("email");

  // Regular expressions for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Flag to track validation status
  var isValid = true;

  // Reset previous error messages
  nameInput.setCustomValidity("");
  emailInput.setCustomValidity("");
  messageInput.setCustomValidity("");

  // Validate name
  if (nameInput.value.trim() === "") {
    nameInput.setCustomValidity("Please enter your name.");
    isValid = false;
  };
  // Validate email
  if (!emailRegex.test(emailInput.value.trim())) {
    emailInput.setCustomValidity("Please enter a valid email address.");
    isValid = false;
  }
  // Validate message
  if (messageInput.value.trim() === "") {
    messageInput.setCustomValidity("Please enter your message.");
    isValid = false;
  }

  // Return validation status
  return isValid;
} 