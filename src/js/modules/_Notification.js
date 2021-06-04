const notificationContainer = document.querySelector(".notification");
const notificationCloser = document.querySelector(".notification .close");

notificationCloser.addEventListener("click", function () {
  notificationContainer.classList.add("close");
});
