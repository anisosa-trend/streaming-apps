const localStorageController = (() => {
  // 定数定義
  const STORAGE_KEYS = {
    SINGING_TITLE: "singingTitle",
    SONG_TITLES: "songTitles",
    SELECTED_COLOR: "selectedColor",
    BG_COLOR: "bgColor",
  };

  // DOM要素のキャッシュ
  const domElements = {
    singingTitle: document.getElementById("singing-title"),
    songTitleList: document.getElementById("song-title-list"),
    clockTime: document.getElementById("clock-time"),
    clockDate: document.getElementById("clock-date"),
    accountName: document.getElementById("account-name"),
    accountHashtag: document.getElementById("account-hashtag"),
    nowSingingHeading: document.getElementById("now-singing-heading"),
    setListHeading: document.getElementById("set-list-heading"),
    view: document.getElementById("view"),
  };

  const colorElements = [
    domElements.clockTime,
    domElements.clockDate,
    domElements.accountName,
    domElements.accountHashtag,
    domElements.nowSingingHeading,
    domElements.singingTitle,
    domElements.setListHeading,
    domElements.songTitleList,
  ];

  // DOM更新処理
  const updateSingingTitle = (title) => {
    domElements.singingTitle.textContent = title;
  };

  const updateSongTitles = (songTitles) => {
    domElements.songTitleList.innerHTML = "";
    songTitles.forEach((title, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${index + 1}. ${title}`;
      domElements.songTitleList.appendChild(listItem);
    });
    scrollController.scrollToBottom();
  };

  const updateColor = (color) => {
    colorElements.forEach((element) => {
      element.style.color = color;
      if (element.id !== "clock-time" && element.id !== "now-singing-heading" && element.id !== "set-list-heading" && element.id !== "song-title-list") return;
      element.style.borderColor = color;
    });
  };

  const updateBackgroundColor = (color) => {
    domElements.view.style.backgroundColor = color;
  };

  //ストレージに依存しない値の取得関数
  const getLocalStorageItem = (key) => {
    return localStorage.getItem(key);
  };

  // ストレージ変更時の処理
  const handleStorageChange = (event) => {
    if (!event.newValue) return;

    const { key, newValue } = event;

    switch (key) {
      case STORAGE_KEYS.SINGING_TITLE:
        updateSingingTitle(newValue);
        break;
      case STORAGE_KEYS.SONG_TITLES:
        updateSongTitles(JSON.parse(newValue));
        break;
      case STORAGE_KEYS.SELECTED_COLOR:
        updateColor(getLocalStorageItem(STORAGE_KEYS.SELECTED_COLOR));
        break;
      case STORAGE_KEYS.BG_COLOR:
        updateBackgroundColor(getLocalStorageItem(STORAGE_KEYS.BG_COLOR));
        break;
      default:
        break;
    }
  };

  // 初期化処理
  const init = () => {
    window.addEventListener("storage", handleStorageChange);
  };

  // 公開する関数
  const setItem = (key, value) => {
    localStorage.setItem(key, value);
  };

  const getItem = getLocalStorageItem;

  return {
    init,
    setItem,
    getItem,
  };
})();

localStorageController.init();
