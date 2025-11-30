const form = document.getElementById("subscribeForm")
const input = document.getElementById("emailInput")
const dialog = document.getElementById("successDialog")
const userEmail = document.getElementById("userEmail")
const error = document.getElementById("emailError")
const closeBtn = document.getElementById("closeDialog")

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

form.addEventListener("submit", function (e) {
  e.preventDefault()

  const email = input.value

  if (regex.test(email)) {
    error.textContent = ""
    form.style.display = "none"
    userEmail.textContent = email
    dialog.showModal()
  } else {
    error.textContent = "Please enter a valid email"
  }
})

closeBtn.addEventListener("click", function () {
  dialog.close()
})
