injectButtonHtml(function () {
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

function injectEventInButtonDia1() {
    var button = document.getElementById('c1');
    button.addEventListener('click', async () => {
        var dia = document.getElementById('lunes');
        if (button.checked) {
            dia.setAttribute("style", "background-color: ");
        } else {
            dia.setAttribute("style", "background-color: red");
        }
    });
}

function injectEventInButtonDia2() {
    var button = document.getElementById('c2');
    button.addEventListener('click', async () => {
        var dia = document.getElementById('martes');
        if (button.checked) {
            dia.setAttribute("style", "background-color: ");
        } else {
            dia.setAttribute("style", "background-color: red");
        }
    });
}

function injectEventInButtonDia3() {
    var button = document.getElementById('c3');
    button.addEventListener('click', async () => {
        var dia = document.getElementById('miercoles');
        if (button.checked) {
            dia.setAttribute("style", "background-color: ");
        } else {
            dia.setAttribute("style", "background-color: red");
        }
    });
}

function injectEventInButtonDia4() {
    var button = document.getElementById('c4');
    button.addEventListener('click', async () => {
        var dia = document.getElementById('jueves');
        if (button.checked) {
            dia.setAttribute("style", "background-color: ");
        } else {
            dia.setAttribute("style", "background-color: red");
        }
    });
}

function injectEventInButtonDia5() {
    var button = document.getElementById('c5');
    button.addEventListener('click', async () => {
        var dia = document.getElementById('viernes');
        if (button.checked) {
            dia.setAttribute("style", "background-color: ");
        } else {
            dia.setAttribute("style", "background-color: red");
        }
    });
}

function injectEventInButtonDia6() {
    var button = document.getElementById('c6');
    button.addEventListener('click', async () => {
        var dia = document.getElementById('sabado');
        if (button.checked) {
            dia.setAttribute("style", "background-color: ");
        } else {
            dia.setAttribute("style", "background-color: red");
        }
    });
}

function injectEventInButtonDia7() {
    var button = document.getElementById('c7');
    button.addEventListener('click', async () => {
        var dia = document.getElementById('domingo');
        if (button.checked) {
            dia.setAttribute("style", "background-color: ");
        } else {
            dia.setAttribute("style", "background-color: red");
        }
    });
}

function injectEventInButtonShowForm() {
    var button = document.getElementById('definirSprint');
    button.addEventListener('click', async () => {
        var button = document.getElementById("formularioParaSprint");
        var calendario = document.getElementById("mainBox");
        calendario.setAttribute("style", "display: none");
        button.setAttribute("style", "display: inline");

        

    });
}

function injectEventInButtonShowEst() {
    var button = document.getElementById('estSprint');
    button.addEventListener('click', async () => {
        var button = document.getElementById("pantallaEst");
        var calendario = document.getElementById("mainBox");
        calendario.setAttribute("style", "display: none");
        button.setAttribute("style", "display: inline");
    });
}

function injectEventInButtonShowCalendarEst() {
    var button = document.getElementById('atrasE');
    button.addEventListener('click', async () => {
        var button = document.getElementById("pantallaEst");
        var calendario = document.getElementById("mainBox");
        calendario.setAttribute("style", "display: ");
        button.setAttribute("style", "display: none");
    });
}

function injectEventInButtonImputar() {
    var button = document.getElementById("myBtn");
    button.addEventListener('click', async () => {
        let icon = document.getElementById("smile");
        icon.src = chrome.runtime.getURL("images/smile-beam-regular.svg");
        let icon2 = document.getElementById("sad");
        icon2.src = chrome.runtime.getURL("images/frown-open-regular.svg");
        let icon3 = document.getElementById("meh");
        icon3.src = chrome.runtime.getURL("images/meh-regular.svg");
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    });
}

function injectEventInButtonImputarCancelar() {
    var button = document.getElementById("cancelarInputacion");
    button.addEventListener('click', async () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    });
}

function injectEventInButtonImputarAceptar() {
    var button = document.getElementById("aceptarInputacion");
    button.addEventListener('click', async () => {
        var icon1 = document.getElementById("icon1");
        var icon2 = document.getElementById("icon2");
        var icon3 = document.getElementById("icon3");
        var user = document.getElementById("icon3");
        var icon;
        var textarea1 = document.getElementById("Textarea1");
        var diaSemana;

        if (icon1.checked) {
            icon = icon1.value;
        } else if (icon2.checked) {
            icon = icon2.value;
        } else {
            icon = icon3.value;
        }

        var position = new Date().getDay();

        if (position == 1) {
            diaSemana = 'lunes'
        } else if (position == 2) {
            diaSemana = 'martes'
        } else if (position == 3) {
            diaSemana = 'miercoles'
        } else if (position == 4) {
            diaSemana = 'jueves'
        } else if (position == 5) {
            diaSemana = 'viernes'
        } else if (position == 6) {
            diaSemana = 'sabado'
        } else if (position == 0) {
            diaSemana = 'domingo'
        }
        var repoUser = window.location.pathname;
        console.log(icon + ' - ' + textarea1.value);
        chrome.runtime.sendMessage({ command: "getUsuarioLogueado", data: { domain: '' } }, (response) => {
            chrome.runtime.sendMessage({ command: "guardarImputacion", data: { domain: { usuario: response.login, icon: icon, textarea: textarea1.value, diaSemana: diaSemana, domain: repoUser } } }, (response) => {
                alert("Datos guardados con exito");
                var modal = document.getElementById("myModal");
                modal.style.display = "none";
            });
        });

    });
}

function injectEventInButtonSubmit() {
    var button = document.getElementById('submitForm');
    button.addEventListener('click', async () => {
        var sprints = document.getElementById("fsprint");
        var semanas = document.getElementById("fduracion");

        console.log(sprints.value + ' - ' + semanas.value);

        chrome.runtime.sendMessage({ command: "firebaseGuardarSprint", data: { domain: { sprints: sprints.value, semanas: semanas.value, dominio: window.location.pathname } } }, (response) => {
            console.log(response);
            if (response) {
                alert("Datos guardados con exito");
                var button = document.getElementById("formularioParaSprint");
                var calendario = document.getElementById("mainBox");
                calendario.setAttribute("style", "display: ");
                button.setAttribute("style", "display: none");

                var sprint = document.getElementById("selectSprint");
                var semana = document.getElementById("selectSemana");

                var opcionSprint = document.createElement('option')
                opcionSprint.value = sprints.value;
                opcionSprint.text = sprints.value;
                sprint.appendChild(opcionSprint);

                while (semanas.value != 0) {
                    var opcionSemana = document.createElement('option')
                    opcionSemana.value = semanas.value;
                    opcionSemana.text = semanas.value;
                    semana.append(opcionSemana);
                    semanas.value--;
                }

 //               var valuetonull1 = document.getElementById("fsprint");
 //               valuetonull1.value = "";
  //              var valuetonull2 = document.getElementById("fduracion");
  //              valuetonull2.value = "";

            } else {
                alert("Error al guardar los datos");
            }
        });
    });
}

function injectEventInButtonShowCalendar() {
    var button = document.getElementById('cancelar');
    button.addEventListener('click', async () => {
        var button = document.getElementById("formularioParaSprint");
        var calendario = document.getElementById("mainBox");
        calendario.setAttribute("style", "display: ");
        button.setAttribute("style", "display: none");
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
            chrome.runtime.sendMessage({ command: "getUsuarioLogueado", data: { domain: domain } }, (response2) => {
                var curr = new Date; // get current date
                var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
                var last = first + 6; // last day is the first day + 6

                var firstday = new Date(curr.setDate(first + 1));
                var lastday = new Date(curr.setDate(last + 1));

                var position = new Date().getDay();


                response.forEach(element => {
                    if (element.login == response2.login) {
                        if (position == 1) {
                            var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td><button id='myBtn' class='btn btn-primary'>Imputar</button></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
                            html = html.replace('<tbody>', rowUsuario);
                        } else if (position == 2) {
                            var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td> </td><td><button id='myBtn' class='btn btn-primary'>Imputar</button></td><td></td><td></td><td></td><td></td><td></td></tr>";
                            html = html.replace('<tbody>', rowUsuario);
                        } else if (position == 3) {
                            var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td> </td><td> </td><td><button id='myBtn' class='btn btn-primary'>Imputar</button></td><td></td><td></td><td></td><td></td></tr>";
                            html = html.replace('<tbody>', rowUsuario);
                        } else if (position == 4) {
                            var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td> </td><td> </td><td> </td><td><button id='myBtn' class='btn btn-primary'>Imputar</button></td><td></td><td></td><td></td></tr>";
                            html = html.replace('<tbody>', rowUsuario);
                        } else if (position == 5) {
                            var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td> </td><td> </td><td> </td><td> </td><td><button id='myBtn' class='btn btn-primary'>Imputar</button></td><td></td><td></td></tr>";
                            html = html.replace('<tbody>', rowUsuario);
                        } else if (position == 6) {
                            var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td> </td><td> </td><td> </td><td> </td><td> </td><td><button id='myBtn' class='btn btn-primary'>Imputar</button></td><td></td></tr>";
                            html = html.replace('<tbody>', rowUsuario);
                        } else if (position == 0) {
                            var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td><button id='myBtn' class='btn btn-primary'>Imputar</button></td></tr>";
                            html = html.replace('<tbody>', rowUsuario);
                        }
                    } else {
                        var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
                        html = html.replace('<tbody>', rowUsuario);
                    }
                });


                var semana = "<p class='semana'>Semana: " + firstday.getDate() + "/" + firstday.getMonth() + "/" + firstday.getFullYear() + " a " + lastday.getDate() + "/" + lastday.getMonth() + "/" + lastday.getFullYear() + "</p>";
                html = html.replace('<p class="semana"></p>', semana);

                contenido.insertAdjacentHTML('beforeend', html);

                chrome.runtime.sendMessage({ command: "getSprint", data: { domain: domain } }, (response) => {
                    console.log(response);
                })

                injectEventInButtonShowForm();
                injectEventInButtonSubmit();
                injectEventInButtonShowCalendar();
                injectEventInButtonImputarCancelar();
                injectEventInButtonImputar();
                injectEventInButtonImputarAceptar();
                injectEventInButtonDia1();
                injectEventInButtonDia2();
                injectEventInButtonDia3();
                injectEventInButtonDia4();
                injectEventInButtonDia5();
                injectEventInButtonDia6();
                injectEventInButtonDia7();
                injectEventInButtonShowCalendarEst();
                injectEventInButtonShowEst();
            });
        });
        var selectedButton = document.getElementsByClassName("UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item selected");
        selectedButton[0].setAttribute("style", "border-bottom-color: transparent; font-weight: 400;");
        return response;
    });
}