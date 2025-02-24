window.onload = () => {
  const accountNameElement = document.getElementById("account-name");
  const accountHashtagElement = document.getElementById("account-hashtag");

  accountNameElement.textContent = userSettings.xAccount;
  accountHashtagElement.textContent = userSettings.hashTag;
};
