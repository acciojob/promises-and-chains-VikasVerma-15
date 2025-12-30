const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const age = document.getElementById("age").value;
  const name = document.getElementById("name").value.trim();

  if (!age || !name) {
    alert("Please enter valid details.");
    return;
  }

  const agePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  agePromise.then(alert).catch(alert);
});
