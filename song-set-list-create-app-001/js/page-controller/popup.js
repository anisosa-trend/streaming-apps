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

const handlePopup = (id, isDisplay) => {
  const element = document.getElementById(id);
  if(isDisplay){
    element.style.display = "block";
  }else{
    element.style.display = "none";
  }
}

const closeConfirmPopup = () => {
  handlePopup("confirm-popup", false);
}

const closeSettingPopup = () => {
  handlePopup("setting-popup", false);
}