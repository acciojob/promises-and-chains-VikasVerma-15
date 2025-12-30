const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const ageValue = document.getElementById("age").value;
  const name = document.getElementById("name").value.trim();

  if (!ageValue || Number(ageValue) <= 0 || !name) {
    alert("Please enter valid details.");
    return;
  }

  const age = Number(ageValue);

  const agePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (age >= 18) {
      resolve(`Welcome, ${name}. You can vote.`);
    } else {
      reject(`Oh sorry ${name}. You aren't old enough.`);
    }
  }, 4000);
});

  agePromise.then(alert).catch(alert);
});