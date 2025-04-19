const popupController = (() => {
  // DOM elements cache
  const elements = {
    listClearButton: document.getElementById("list-clear-button"),
    cancelButton: document.getElementById("cancel-button"),
    confirmPopup: document.getElementById("confirm-popup"),
    settingButton: document.getElementById("setting-button"),
    settingPopup: document.getElementById("setting-popup"),
    copyPopup: document.getElementById("copy-popup"),
  };

  // Constants for popup display states
  const POPUP_DISPLAY_VISIBLE = "visible";
  const POPUP_DISPLAY_HIDDEN = "hidden";
  const POPUP_OPACITY_VISIBLE = 1;
  const POPUP_OPACITY_HIDDEN = 0;
  const POPUP_COPY_TIMEOUT = 2000;
  const POPUP_DISPLAY_NONE = "none";
  const POPUP_DISPLAY_BLOCK = "block";

  // Check if a popup is currently displayed
  const isPopupVisible = (element) => {
    return element.style.opacity === POPUP_OPACITY_VISIBLE.toString() && element.style.visibility === POPUP_DISPLAY_VISIBLE;
  };

  // Show or hide a popup
  const setPopupVisibility = (element, isVisible) => {
    element.style.display = isVisible ? POPUP_DISPLAY_BLOCK : POPUP_DISPLAY_NONE;
    element.style.opacity = isVisible ? POPUP_OPACITY_VISIBLE : POPUP_OPACITY_HIDDEN;
    element.style.visibility = isVisible ? POPUP_DISPLAY_VISIBLE : POPUP_DISPLAY_HIDDEN;
  };

  // Close the confirm popup
  const closeConfirmPopup = () => {
    setPopupVisibility(elements.confirmPopup, false);
  };

  // Close the setting popup
  const closeSettingPopup = () => {
    setPopupVisibility(elements.settingPopup, false);
  };

  // Open the confirm popup
  const openConfirmPopup = () => {
    if (isPopupVisible(elements.confirmPopup)) {
      closeConfirmPopup();
      return;
    }
    setPopupVisibility(elements.confirmPopup, true);
    closeSettingPopup();
  };

  // Open the setting popup
  const openSettingPopup = () => {
    if (isPopupVisible(elements.settingPopup)) {
      closeSettingPopup();
      return;
    }
    setPopupVisibility(elements.settingPopup, true);
    closeConfirmPopup();
  };

  // Show the copy popup
  const showCopyPopup = () => {
    closeSettingPopup();
    closeConfirmPopup();
    
    setPopupVisibility(elements.copyPopup, true);
    setTimeout(() => {
      setPopupVisibility(elements.copyPopup, false);
    }, POPUP_COPY_TIMEOUT);
  };

  // Attach event listeners to buttons
  const init = () => {
    elements.listClearButton.addEventListener("click", openConfirmPopup);
    elements.cancelButton.addEventListener("click", closeConfirmPopup);
    elements.settingButton.addEventListener("click", openSettingPopup);
  };

  // Public interface
  return {
    init,
    closeConfirmPopup,
    closeSettingPopup,
    openConfirmPopup,
    openSettingPopup,
    showCopyPopup,
  };
})();

popupController.init();
