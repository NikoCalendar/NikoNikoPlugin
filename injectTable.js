injectButtonHtml(function() {
    injectEventInButton();
  });


function injectButtonHtml(callback) {
    fetch(chrome.runtime.getURL('injectButton.html')).then(r => r.text()).then(html => {
        var contenido = document.getElementsByClassName('UnderlineNav-body list-style-none');
        contenido[0].insertAdjacentHTML('beforeend', html);
        callback();
    });
}

function injectEventInButton() {
    var button = document.getElementById('NikoCalendarButton');
    button.addEventListener('click', async () => {
        var repoUser = window.location.pathname; 
        writeData(repoUser);
    });
}
  
function writeData(domain) {
    chrome.runtime.sendMessage({ command: "gitTestWithAut", data: { domain: domain } }, (response) => {
        var div = document.getElementsByClassName("gutter-condensed gutter-lg flex-column flex-md-row d-flex");
        div[0].remove();
        var button = document.getElementById("NikoCalendarButton");
        button.setAttribute("style", "border-bottom-color: #f9826c; font-weight: 600;");
        fetch(chrome.runtime.getURL('layout.html')).then(r => r.text()).then(html => {
            var contenido = document.getElementById('repo-content-pjax-container');
            response.forEach(element => {
                var rowUsuario = "<tbody><tr><td>"+element.login+"</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
                html = html.replace('<tbody>', rowUsuario);
            });
            contenido.insertAdjacentHTML('beforeend', html);
        });
        var selectedButton = document.getElementsByClassName("UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item selected");
        selectedButton[0].setAttribute("style", "border-bottom-color: transparent; font-weight: 400;");
        return response;
      });
}