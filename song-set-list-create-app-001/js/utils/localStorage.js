window.addEventListener('storage', function(event) {
  // event.key: 変更されたキー
  // event.newValue: 新しい値
  // event.oldValue: 古い値
  // event.url: 変更が発生したページのURL (同一オリジンのみ)
  // event.storageArea: localStorageオブジェクト

  switch (event.key) {
    case "singingTitle":
      document.getElementById("singing-title").textContent = event.newValue;
      break;

    case "songTitles":
      const songTitles = JSON.parse(event.newValue);
      const listElement = document.getElementById("song-title-list");
      listElement.innerHTML = "";
      for (let i = 0; i < songTitles.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `${i + 1}. ${songTitles[i]}`;
        listElement.appendChild(listItem);
      }
      scrollToBottom();
      break;
      
    case "selectedColor":
      const selectedHexColor = getLocalStorage("selectedColor");
      document.getElementById("clock-time").style.color = selectedHexColor;
      document.getElementById("clock-time").style.borderColor = selectedHexColor;
      document.getElementById("clock-date").style.color = selectedHexColor;
      document.getElementById("account-name").style.color = selectedHexColor;
      document.getElementById("account-hashtag").style.color = selectedHexColor;
      document.getElementById("now-singing-heading").style.color = selectedHexColor;
      document.getElementById("now-singing-heading").style.borderColor = selectedHexColor;
      document.getElementById("singing-title").style.color = selectedHexColor;
      document.getElementById("set-list-heading").style.color = selectedHexColor;
      document.getElementById("set-list-heading").style.borderColor = selectedHexColor;
      document.getElementById("song-title-list").style.color = selectedHexColor;
      document.getElementById("song-title-list").style.borderColor = selectedHexColor;
      break;
    
    case "bgColor":
      const bgColor = getLocalStorage("bgColor");
      document.getElementById("view").style.backgroundColor = bgColor;
      break;

    default:
      break;
  }
});

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
}

const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};
