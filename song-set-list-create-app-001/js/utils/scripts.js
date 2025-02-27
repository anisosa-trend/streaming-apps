const scrollToBottom = () => {
  const element = document.getElementById("song-title-list");
  element.scrollTop = element.scrollHeight - element.clientHeight;
}
