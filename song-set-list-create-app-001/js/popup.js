// const openConfirmPopup = () => {
//   const confirmPopup = document.getElementById("confirm-popup");
//   confirmPopup.style.display = "block";
//   // closeSettingPopup();
// }

// const closeConfirmPopup = () => {
//   const confirmPopup = document.getElementById("confirm-popup");
//   confirmPopup.style.display = "none";
// }

// const openSettingPopup = () => {
//   const settingPopup = document.getElementById("setting-popup");
//   settingPopup.style.display = "block";
//   closeConfirmPopup();
// }

// const closeSettingPopup = () => {
//   const settingPopup = document.getElementById("setting-popup");
//   settingPopup.style.display = "none";
// }

const handlePopup = (id, isDisplay) => {
  const element = document.getElementById(id);
  if(isDisplay){
    element.style.display = "block";
  }else{
    element.style.display = "none";
  }
}

const openConfirmPopup = () => {
  handlePopup("confirm-popup", true);
}

const closeConfirmPopup = () => {
  handlePopup("confirm-popup", false);
}
