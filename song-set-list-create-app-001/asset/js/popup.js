const openConfirmPopup = () => {
  const confirmPopup = document.getElementById("confirm-popup");
  confirmPopup.style.display = "block";
  closeSettingPopup();
}

const closeConfirmPopup = () => {
  const confirmPopup = document.getElementById("confirm-popup");
  confirmPopup.style.display = "none";
}

const openSettingPopup = () => {
  const settingPopup = document.getElementById("setting-popup");
  settingPopup.style.display = "block";
  closeConfirmPopup();
}

const closeSettingPopup = () => {
  const settingPopup = document.getElementById("setting-popup");
  settingPopup.style.display = "none";
}