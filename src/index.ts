const userForm = document.querySelector(".user-form") as HTMLFormElement;
const userName = document.querySelector("#name") as HTMLInputElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const userCountry = document.querySelector("#country") as HTMLSelectElement;
const userMessage = document.querySelector("#message") as HTMLTextAreaElement;

userForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const userData = {
    name: userName.value,
    email: userEmail.value,
    country: userCountry.value,
    message: userMessage.value,
  };
  console.log(userData);
});
