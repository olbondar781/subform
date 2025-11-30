const form = document.getElementById("subscribeForm")
const input = document.getElementById("emailInput")
const dialog = document.getElementById("successDialog")
const userEmail = document.getElementById("userEmail")

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

form.addEventListener("submit", function (e) {
  e.preventDefault()

  const email = input.value

  if (regex.test(email)) {
    form.style.display = "none"
    userEmail.textContent = email
    dialog.showModal()
  } else {
    alert("Введіть коректний email")
  }
})
