// When the button is clicked, inject setPageBackgroundColor into current page
testbutoon.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  var url = new URL(tab.url)
  var domain = url.hostname
  writeData(domain);
});

function writeData(domain) {
  chrome.runtime.sendMessage({ command: "save", data: { domain: domain } }, (response) => {
    if (response.status == 'success') {
      console.log(response);
    }});
}