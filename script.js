// Update the time display every second
function updateTime() {
  const timeElement = document.getElementById("current-time");
  const timezone = document.getElementById("timezone").value;
  const now =
    timezone === "local"
      ? new Date()
      : new Date(new Date().toLocaleString("en-US", { timeZone: timezone }));
  timeElement.textContent = now.toLocaleTimeString();

  updateBackground(now);
  updateGreeting(now);
}

// Update the background color based on the time of day
function updateBackground(now) {
  const hours = now.getHours();
  const body = document.body;
  if (hours < 6) {
    body.style.background = "linear-gradient(135deg, #2c3e50, #4ca1af)";
  } else if (hours < 12) {
    body.style.background = "linear-gradient(135deg, #ffafbd, #ffc3a0)";
  } else if (hours < 18) {
    body.style.background = "linear-gradient(135deg, #f7797d, #fbd786)";
  } else {
    body.style.background = "linear-gradient(135deg, #654ea3, #eaafc8)";
  }
}

// Update the greeting message based on the time of day
function updateGreeting(now) {
  const hours = now.getHours();
  const greetingElement = document.getElementById("greeting");
  if (hours < 12) {
    greetingElement.textContent = "Good Morning!";
  } else if (hours < 18) {
    greetingElement.textContent = "Good Afternoon!";
  } else {
    greetingElement.textContent = "Good Evening!";
  }
}

// Toggle the countdown timer
document
  .getElementById("countdown-toggle")
  .addEventListener("click", function () {
    const countdownElement = document.getElementById("countdown");
    countdownElement.classList.toggle("hidden");
    if (!countdownElement.classList.contains("hidden")) {
      startCountdown(new Date().getTime() + 60000); // 1 minute countdown
    }
  });

// Start the countdown timer
function startCountdown(endTime) {
  const countdownElement = document.getElementById("countdown");
  const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = "Countdown ended";
    } else {
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      countdownElement.textContent = `Countdown: ${seconds} seconds`;
    }
  }, 1000);
}

function updateTimeFact() {
  const factElement = document.getElementById("time-fact");
  factElement.textContent = facts[Math.floor(Math.random() * facts.length)];
}

setInterval(updateTime, 1000);
setInterval(updateTimeFact, 10000);

updateTime();
updateTimeFact();
