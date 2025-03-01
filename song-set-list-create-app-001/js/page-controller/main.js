const mainController = (() => {
  let singingTitle = []; // 歌唱中の曲名
  let setLists = []; // セットリスト（歌い終わった曲名）

  //DOMを取得
  const elements = {
    copyButton: document.getElementById("copy-button"),
    songTitleInput: document.getElementById("song-title-input"),
    addButton: document.getElementById("add-button"),
    singingTitleClearButton: document.getElementById("singing-title-clear-button"),
    confirmButton: document.getElementById("confirm-button"),
    singingTitleDisplay: document.getElementById("singing-title"),
    songTitleList: document.getElementById("song-title-list"),
  };

  // 歌唱中の曲をセットリストに登録
  const addSongTitle = () => {
    const title = elements.songTitleInput.value;

    //入力がなければ処理をしない
    if (title.trim() === "") return;

    // 歌唱中がなければ歌唱中に入れる。あればセットリストに入れて、歌唱中を更新する
    if (singingTitle.length === 0 || !singingTitle[0]) {
      singingTitle.push(title);
    } else {
      setLists.push(singingTitle[0]);
      setLocalStorage('songTitles', JSON.stringify(setLists));

      singingTitle.push(title);
      singingTitle.shift();
    }
    //各処理の実行
    updateSongList();
    updateSingingTitleDisplay(title);
    clearSongTitleInput();
    setLocalStorage('singingTitle', title);
  };

  // 歌唱中楽曲名を更新する
  const updateSingingTitleDisplay = (title) => {
    elements.singingTitleDisplay.textContent = title;
  }

  // 入力欄をクリアする
  const clearSongTitleInput = () => {
    elements.songTitleInput.value = "";
  }

  //セットリストを更新する
  const updateSongList = () => {
    elements.songTitleList.innerHTML = "";
    setLists.forEach((title, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${index + 1}. ${title}`;
      elements.songTitleList.appendChild(listItem);
    });
    scrollToBottom(); // 他の場所に存在する可能性があるので、スコープ外にする
  };

  const clearSingingTitle = () => {
    // 歌唱中の楽曲名を初期化
    singingTitle.shift();
    elements.singingTitleDisplay.textContent = "---";
    setLocalStorage('singingTitle', "---");
  };

  // セットリストをクリアする
  const clearSongTitles = () => {
    setLists.length = 0;
    elements.songTitleList.innerHTML = "";
    setLocalStorage('songTitles', JSON.stringify(setLists));
    popupController.closeConfirmPopup();
  };

  // セットリストをコピー
  const copySongTitles = () => {
    //歌唱中楽曲があればセットリストへ登録
    if(singingTitle[0] !== ""){
      setLists.push(singingTitle[0]);
    }

    // セットリストをテキストに変換してクリップボードにコピー
    const copyText = setLists.map((title, index) => `${index + 1}. ${title}`).join("\n");
    navigator.clipboard.writeText(copyText);

    popupController.showCopyPopup();
  };

  //イベントを登録
  const init = () => {
    elements.copyButton.addEventListener("click", copySongTitles);
    elements.addButton.addEventListener("click", addSongTitle);
    elements.singingTitleClearButton.addEventListener("click", clearSingingTitle);
    elements.confirmButton.addEventListener("click", clearSongTitles);
  };

  return {
    init,
    setLists, // setLists を外部からアクセスできるように公開
    singingTitle, // nowSingingTitle を外部からアクセスできるように公開
  };
})();

mainController.init();