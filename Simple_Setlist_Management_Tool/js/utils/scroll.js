const scrollController = (() => {
  const domElements = {
    songTitleList: document.getElementById("song-title-list"),
  };

  const scrollToBottom = () => {
    if (!domElements.songTitleList) return;
    domElements.songTitleList.scrollTop = domElements.songTitleList.scrollHeight - domElements.songTitleList.clientHeight;
  };

  const init = () => {
    // ここに初期化処理があれば追加
  };

  return {
    init,
    scrollToBottom,
  };
})();

scrollController.init();
