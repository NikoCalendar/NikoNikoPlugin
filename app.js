// When the button is clicked, inject setPageBackgroundColor into current page
keyButton.addEventListener("click", async () => {
  var key = document.getElementById('key');
  chrome.storage.sync.set({ key: key.value }, function () {
    console.log('Value is set to ' +  key.value);

  });
  chrome.storage.local.set({key: key.value}, function() {
    console.log('Value is set to ' + key.value);
    var mensage = document.getElementById('mensage');
    mensage.innerHTML = 'Key guardada';
  });
});

github.addEventListener("click", async (tab) => {
  chrome.tabs.update({ url: "https://github.com/settings/tokens" });
})