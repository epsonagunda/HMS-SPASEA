document.getElementById("foot01").innerHTML =
"<p>&copy;  "+ new Date().getFullYear() + "  epsonagunda. All rights reserved.</p>";

                                                                                            
 //TIME
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  const currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = currentTime;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to show clock immediately
