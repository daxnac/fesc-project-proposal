/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

/* Contact Form Handler */

function getEmail() {
  event.preventDefault()
  var name = document.contact.fullname.value
  document.contact.fullname.value = ""
  var email= document.contact.email.value
  document.contact.email.value = ""
  var area = document.contact.area.value
  document.contact.area.value = ""
  var feedback = document.contact.feedback.value
  document.contact.feedback.value = ""
}
