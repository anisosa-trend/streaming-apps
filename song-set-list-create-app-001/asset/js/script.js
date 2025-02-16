const singingTitle = []; // 歌唱中の楽曲名を格納する配列
const songTitles = []; // 歌い終わった楽曲名を格納する配列

const addSongTitle = () => {
  const title = document.getElementById("songTitleInput").value;

  // 入力がない場合は何もしない
  if(title.trim() === "") return;

  if(singingTitle.length === 0 || singingTitle[0] === ""){
    // 歌唱中の楽曲がない場合、歌唱中の楽曲に追加
    singingTitle.push(title);
  }else{
    // 歌唱中の楽曲がある場合、歌い終わった楽曲に追加
    songTitles.push(singingTitle[0]);

    // 歌唱中の楽曲を更新
    singingTitle.push(title);
    singingTitle.shift();
  }
  updateSongList();
  document.getElementById("singingTitle").textContent = title;
  document.getElementById("songTitleInput").value = ""; // 入力欄をクリア
}

const updateSongList = () => {
  const listElement = document.getElementById("songTitleList");
  listElement.innerHTML = "";

  for (let i = 0; i < songTitles.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${i + 1}. ${songTitles[i]}`;
    listElement.appendChild(listItem);
  }
  scrollToBottom();
  document.getElementById("songTitleNum").textContent = `${songTitles.length}曲`;
}

const clearSingingTitle = () => {
  singingTitle.shift();
  document.getElementById("singingTitle").textContent = "";
}

const clearSongTitles = () => {
  songTitles.length = 0;
  document.getElementById("songTitleList").innerHTML = "";
  document.getElementById("songTitleNum").textContent = "0曲";
}

const downloadTextFile = () => {
  const currentDate = new Date().toLocaleDateString('sv-SE');
  const filename = `${currentDate}_set_list.txt`;

  const singingTitleArray = songTitles
    .concat(singingTitle)
    .map((title, index) => {
      return `${index + 1}. ${title}`;
    });

  // 配列を改行区切りの文字列に変換
  const text = singingTitleArray.join('\n');
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const element = document.createElement('a');
  element.setAttribute('href', url);
  element.setAttribute('download', filename);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

const scrollToBottom = () => {
  const element = document.getElementById("songTitleList");
  element.scrollTop = element.scrollHeight - element.clientHeight;
}