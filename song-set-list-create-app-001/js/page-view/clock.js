const clockController = (() => {
  const domElements = {
    clockDate: document.getElementById("clock-date"),
    clockTime: document.getElementById("clock-time"),
  };

  const updateClock = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const date = now.getDate().toString().padStart(2, "0");
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][now.getDay()];
    const hour = now.getHours().toString().padStart(2, "0");
    const min = now.getMinutes().toString().padStart(2, "0");
    const sec = now.getSeconds().toString().padStart(2, "0");

    const today = `${month}/${date} ${day}`;
    const time = `${hour}:${min}`;

    domElements.clockDate.textContent = today;
    domElements.clockTime.textContent = time;
  };

  const init = () => {
    updateClock(); // 初期表示
    setInterval(updateClock, 1000); // 1秒ごとに更新
  };

  return {
    init,
  };
})();

clockController.init();
