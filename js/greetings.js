const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greet = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  // const hour = new Date().getHours();
  // if (hour > 18) {
  //   greet.innerText = `Good evening. ${username}`;
  // } else if (hour > 12) {
  //   greet.innerText = `Good afternoon. ${username}`;
  // } else if (hour > 6) {
  //   greet.innerText = `Good morning. ${username}`;
  // } else {
  //   greet.innerText = `Good night. ${username}`;
  // }
  greet.innerText = `Hello, ${username}`;
  greet.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
