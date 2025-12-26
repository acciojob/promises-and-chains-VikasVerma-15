const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const age = Number(document.getElementById("age").value);
  const name = document.getElementById("name").value;

  // Validation: ONLY empty fields
  if (!name || isNaN(age)) {
    alert("Please enter valid details.");
    return;
  }

  const agePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // ✅ MUST be 4000ms
  });

  agePromise.then(alert).catch(alert);
});