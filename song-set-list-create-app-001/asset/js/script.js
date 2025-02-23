const singingTitle = []; // 歌唱中の楽曲名を格納する配列
const songTitles = []; // 歌い終わった楽曲名を格納する配列

const addSongTitle = () => {
  const title = document.getElementById("song-title-input").value;

  // 入力がない場合は何もしない
  if(title.trim() === "") return;

  if(singingTitle.length === 0 || singingTitle[0] === ""){
    // 歌唱中の楽曲がない場合、歌唱中の楽曲に追加
    singingTitle.push(title);
  }else{
    // 歌唱中の楽曲がある場合、歌い終わった楽曲に追加
    songTitles.push(singingTitle[0]);
    setLocalStorage('songTitles', JSON.stringify(songTitles));

    // 歌唱中の楽曲を更新
    singingTitle.push(title);
    singingTitle.shift();
  }
  updateSongList();
  
  document.getElementById("singing-title").textContent = title;
  document.getElementById("song-title-input").value = ""; // 入力欄をクリア

  setLocalStorage('singingTitle', title);
}

const updateSongList = () => {
  const listElement = document.getElementById("song-title-list");
  listElement.innerHTML = "";

  for (let i = 0; i < songTitles.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${i + 1}. ${songTitles[i]}`;
    listElement.appendChild(listItem);
  }
  scrollToBottom();
}

const clearSingingTitle = () => {
  singingTitle.shift();
  document.getElementById("singing-title").textContent = "---";
  setLocalStorage('singingTitle', "---");
}

const clearSongTitles = () => {
  songTitles.length = 0;
  document.getElementById("song-title-list").innerHTML = "";
  setLocalStorage('songTitles', JSON.stringify(songTitles));
  closeConfirmPopup();
}

const scrollToBottom = () => {
  const element = document.getElementById("song-title-list");
  element.scrollTop = element.scrollHeight - element.clientHeight;
}
