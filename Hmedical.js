  setInterval(updateClockAndGreeting, 1000);
function updateClockAndGreeting() {
  const now = new Date();
  const clock = document.getElementById("clock");
  const greeting = document.getElementById("greeting");

  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clock.textContent = `الساعة الآن: ${hours}:${minutes}:${seconds}`;

  let greetMsg = "";
  if (hours >= 5 && hours < 12) greetMsg = "صباح الخير، يعطيك العافية!";
  else if (hours >= 12 && hours < 18) greetMsg = "مرحبا، خطاك السوء!";
  else if (hours >= 18 && hours < 22) greetMsg = "مساء النور، سلامتك!";
  else greetMsg = "تصبح على خير، الله يقويك!";

  greeting.textContent = greetMsg;
}
setInterval(updateClockAndGreeting, 1000);
updateClockAndGreeting();
  function goBack() {
    window.history.back();
  }
  function updateHColor() {
    const hLetter = document.querySelector('.h-letter');
    const colors = ['white', '#ffb6b9', '#ffd3b6'];
    let index = 0;
    setInterval(() => {
      hLetter.style.color = colors[index];
      index = (index + 1) % colors.length;
    }, 5000);
  }
  
  updateHColor();  