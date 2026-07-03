const guardLists = JSON.parse(localStorage.getItem("guards")) || [];

class Guard {
  constructor(name, date, latitude, longitude, shift) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.date = date;
    this.latitude = latitude;
    this.longitude = longitude;
    this.shift = shift;
  }

  static save() {
    localStorage.setItem("guards", JSON.stringify(guardLists));
  }

  static addGuard(name, date, latitude, longitude, shift) {
    const newGuard = new Guard(name, date, latitude, longitude, shift);
    guardLists.push(newGuard);
    Guard.save();

    console.log("Guard added", newGuard);

    return newGuard;
  }
}

const form = document.querySelector("#guardForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const date = document.querySelector("#duty-date").value;
    const latitude = document.querySelector("#latitude").value;
    const longitude = document.querySelector("#longitude").value;

    const shiftGroup = document.querySelector(
      'calcite-radio-button-group[name="shift"]',
    );

    let shift = shiftGroup.value;

    if (!shift) {
      const checkedRadio = document.querySelector(
        'calcite-radio-button-group[name="shift"] calcite-radio-button[checked]',
      );
      shift = checkedRadio?.value;
    }

    Guard.addGuard(name, date, latitude, longitude, shift);

    form.reset();

    window.location.href = "success.html";
  });
}

const context = document.querySelector(".content");

function displayGuards() {
  context.innerHTML = "";

  guardLists.forEach((guard) => {
    context.innerHTML += `
      <div class="guard-card" id="guard-${guard.id}">
        <h3>${guard.name}</h3>
        <p><strong>Date:</strong> ${guard.date}</p>
        <p><strong>Shift:</strong> ${guard.shift}</p>
        <p><strong>Location:</strong> ${guard.latitude}, ${guard.longitude}</p>
        <hr>
      </div>
    `;
  });
}

if (context) {
  displayGuards();
}
