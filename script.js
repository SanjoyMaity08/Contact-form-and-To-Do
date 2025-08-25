// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Form submitted successfully!";
  formMessage.style.color = "green";
  this.reset();
});

// To-Do List DOM Manipulation
document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.style.marginLeft = "1rem";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
});