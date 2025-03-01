const onloadController = (() => {
  const domElements = {
    accountName: document.getElementById("account-name"),
    accountHashtag: document.getElementById("account-hashtag"),
  };

  const init = () => {
    window.addEventListener("load", () => {
      domElements.accountName.textContent = userSettings.xAccount;
      domElements.accountHashtag.textContent = userSettings.hashTag;
    });
  };
    return {
      init,
    };
})();

onloadController.init();
