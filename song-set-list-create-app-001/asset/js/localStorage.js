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
  
    default:
      break;
  }
});

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
}
