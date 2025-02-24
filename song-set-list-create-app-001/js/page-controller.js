const nowSingingTitle = []; // 歌唱中の楽曲名を格納する配列
const setLists = []; // 歌い終わった楽曲名を格納する配列

const addSongTitle = () => {
  const title = document.getElementById("song-title-input").value;

  // 入力がない場合は何もしない
  if(title.trim() === "") return;

  if(nowSingingTitle.length === 0 || nowSingingTitle[0] === ""){
    // 歌唱中の楽曲がない場合、歌唱中の楽曲に追加
    nowSingingTitle.push(title);
  }else{
    // 歌唱中の楽曲がある場合、歌い終わった楽曲に追加
    setLists.push(nowSingingTitle[0]);
    setLocalStorage('songTitles', JSON.stringify(setLists));

    // 歌唱中の楽曲を更新
    nowSingingTitle.push(title);
    nowSingingTitle.shift();
  }
  updateSongList();
  
  document.getElementById("singing-title").textContent = title;
  document.getElementById("song-title-input").value = ""; // 入力欄をクリア

  setLocalStorage('singingTitle', title);
}

const updateSongList = () => {
  const listElement = document.getElementById("song-title-list");
  listElement.innerHTML = "";

  for (let i = 0; i < setLists.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${i + 1}. ${setLists[i]}`;
    listElement.appendChild(listItem);
  }
  scrollToBottom();
}

const clearSingingTitle = () => {
  nowSingingTitle.shift();
  document.getElementById("singing-title").textContent = "---";
  setLocalStorage('singingTitle', "---");
}

const clearSongTitles = () => {
  setLists.length = 0;
  document.getElementById("song-title-list").innerHTML = "";
  setLocalStorage('songTitles', JSON.stringify(setLists));
  closeConfirmPopup();
}

const scrollToBottom = () => {
  const element = document.getElementById("song-title-list");
  element.scrollTop = element.scrollHeight - element.clientHeight;
}

const handlePopup = (id, isDisplay) => {
  const element = document.getElementById(id);
  if(isDisplay){
    element.style.display = "block";
  }else{
    element.style.display = "none";
  }
}

const handleConfirmPopup = () => {
  const element = document.getElementById("confirm-popup");
  if(element.style.display === "block"){
    element.style.display = "none";
  }else{
    element.style.display = "block";
    closeSettingPopup();
  }
}

const handleSettingPopup = () => {
  const element = document.getElementById("setting-popup");
  if(element.style.display === "block"){
    element.style.display = "none";
  }else{
    element.style.display = "block";
    closeConfirmPopup();
  }
}

const closeConfirmPopup = () => {
  handlePopup("confirm-popup", false);
}

const closeSettingPopup = () => {
  handlePopup("setting-popup", false);
}

const colorPicker = document.getElementById("color-picker");
const selectedColor = document.getElementById("selected-color");

colorPicker.addEventListener("input", function(event) {
  const selectedHexColor = event.target.value;
  selectedColor.textContent = event.target.value;
  localStorage.setItem("selectedColor", selectedHexColor);
});

