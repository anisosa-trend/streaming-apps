const popupController = (() => {
  //DOMを取得
  const elements = {
    listClearButton: document.getElementById("list-clear-button"),
    cancelButton: document.getElementById("cancel-button"),
    confirmPopup: document.getElementById("confirm-popup"),
    settingButton: document.getElementById("setting-button"),
    settingPopup: document.getElementById("setting-popup"),
  };

  const isDisplayPopup = (element) => {
    return element.style.display === "block";
  }

  //ポップアップを表示非表示する
  const handlePopup = (element, isDisplay) => {
    element.style.display = isDisplay ? "block" : "none";
  };

  //確認用ポップアップを閉じる
  const closeConfirmPopup = () => {
    handlePopup(elements.confirmPopup, false);
  };

  //設定用ポップアップを閉じる
  const closeSettingPopup = () => {
    handlePopup(elements.settingPopup, false);
  };
  
  //確認用ポップアップを開く
  const openConfirmPopup = () => {
    if (isDisplayPopup(elements.confirmPopup)){
      closeConfirmPopup();
      return;
    }
    handlePopup(elements.confirmPopup, true);
    closeSettingPopup();
  };

  //設定用ポップアップを開く
  const openSettingPopup = () => {
    if (isDisplayPopup(elements.settingPopup)){
      closeSettingPopup();
      return;
    }
    handlePopup(elements.settingPopup, true);
    closeConfirmPopup();
  };

  //イベントを登録
  const init = () => {
    elements.listClearButton.addEventListener("click", openConfirmPopup);
    elements.cancelButton.addEventListener("click", closeConfirmPopup);
    elements.settingButton.addEventListener("click", openSettingPopup);
  };

  return {
    init,
    closeConfirmPopup,
    closeSettingPopup,
    openConfirmPopup,
    openSettingPopup,
  };
})();

popupController.init();
