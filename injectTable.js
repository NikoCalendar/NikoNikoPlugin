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
        var colum = document.getElementById('col1');
        var repoUser = window.location.pathname;

        var semana = document.getElementById('selectSemana');

        if (button.checked) {
            dia.setAttribute("style", "background-color: ");
            colum.setAttribute("style", "background-color: ");
            chrome.runtime.sendMessage({ command: "setDia", data: { domain: { dia: 1, valor: true, domain: repoUser, semana: semana.value } } }, (response) => {
                console.log(response);
            })
        } else {
            dia.setAttribute("style", "background-color: red");
            colum.setAttribute("style", "background-color: red");
            chrome.runtime.sendMessage({ command: "setDia", data: { domain: { dia: 1, valor: false, domain: repoUser, semana: semana.value } } }, (response) => {
                console.log(response);
            })
        }
    });
}

function injectEventInButtonDia2() {
    var button = document.getElementById('c2');
    button.addEventListener('click', async () => {
        var dia = document.getElementById('martes');
        var colum = document.getElementById('col2');
        var repoUser = window.location.pathname;

        var semana = document.getElementById('selectSemana');

        if (button.checked) {
            dia.setAttribute("style", "background-color: ");
            colum.setAttribute("style", "background-color: ");
            chrome.runtime.sendMessage({ command: "setDia", data: { domain: { dia: 2, valor: true, domain: repoUser, semana: semana.value } } }, (response) => {
                console.log(response);
            })
        } else {
            dia.setAttribute("style", "background-color: red");
            colum.setAttribute("style", "background-color: red");
            chrome.runtime.sendMessage({ command: "setDia", data: { domain: { dia: 2, valor: false, domain: repoUser, semana: semana.value } } }, (response) => {
                console.log(response);
            })
        }
    });
}

function injectEventInButtonDia3() {
    var button = document.getElementById('c3');
    button.addEventListener('click', async () => {
        var dia = document.getElementById('miercoles');
        var colum = document.getElementById('col3');
        var repoUser = window.location.pathname;

        var semana = document.getElementById('selectSemana');

        if (button.checked) {
            dia.setAttribute("style", "background-color: ");
            colum.setAttribute("style", "background-color: ");
            chrome.runtime.sendMessage({ command: "setDia", data: { domain: { dia: 3, valor: true, domain: repoUser, semana: semana.value } } }, (response) => {
                console.log(response);
            })
        } else {
            dia.setAttribute("style", "background-color: red");
            colum.setAttribute("style", "background-color: red");
            chrome.runtime.sendMessage({ command: "setDia", data: { domain: { dia: 3, valor: false, domain: repoUser, semana: semana.value } } }, (response) => {
                console.log(response);
            })
        }
    });
}

function injectEventInButtonDia4() {
    var button = document.getElementById('c4');
    button.addEventListener('click', async () => {
        var dia = document.getElementById('jueves');
        var colum = document.getElementById('col4');
        var repoUser = window.location.pathname;

        var semana = document.getElementById('selectSemana');

        if (button.checked) {
            dia.setAttribute("style", "background-color: ");
            colum.setAttribute("style", "background-color: ");
            chrome.runtime.sendMessage({ command: "setDia", data: { domain: { dia: 4, valor: true, domain: repoUser, semana: semana.value } } }, (response) => {
                console.log(response);
            })
        } else {
            dia.setAttribute("style", "background-color: red");
            colum.setAttribute("style", "background-color: red");
            chrome.runtime.sendMessage({ command: "setDia", data: { domain: { dia: 4, valor: false, domain: repoUser, semana: semana.value } } }, (response) => {
                console.log(response);
            })
        }
    });
}

function injectEventInButtonDia5() {
    var button = document.getElementById('c5');
    button.addEventListener('click', async () => {
        var dia = document.getElementById('viernes');
        var colum = document.getElementById('col5');
        var repoUser = window.location.pathname;

        var semana = document.getElementById('selectSemana');

        if (button.checked) {
            dia.setAttribute("style", "background-color: ");
            colum.setAttribute("style", "background-color: ");
            chrome.runtime.sendMessage({ command: "setDia", data: { domain: { dia: 5, valor: true, domain: repoUser, semana: semana.value } } }, (response) => {
                console.log(response);
            })
        } else {
            dia.setAttribute("style", "background-color: red");
            colum.setAttribute("style", "background-color: red");
            chrome.runtime.sendMessage({ command: "setDia", data: { domain: { dia: 5, valor: false, domain: repoUser, semana: semana.value } } }, (response) => {
                console.log(response);
            })
        }
    });
}

function injectEventInButtonDia6() {
    var button = document.getElementById('c6');
    button.addEventListener('click', async () => {
        var dia = document.getElementById('sabado');
        var colum = document.getElementById('col6');
        var repoUser = window.location.pathname;

        var semana = document.getElementById('selectSemana');

        if (button.checked) {
            dia.setAttribute("style", "background-color: ");
            colum.setAttribute("style", "background-color: ");
            chrome.runtime.sendMessage({ command: "setDia", data: { domain: { dia: 6, valor: true, domain: repoUser, semana: semana.value } } }, (response) => {
                console.log(response);
            })
        } else {
            dia.setAttribute("style", "background-color: red");
            colum.setAttribute("style", "background-color: red");
            chrome.runtime.sendMessage({ command: "setDia", data: { domain: { dia: 6, valor: false, domain: repoUser, semana: semana.value } } }, (response) => {
                console.log(response);
            })
        }
    });
}

function injectEventInButtonDia7() {
    var button = document.getElementById('c7');
    button.addEventListener('click', async () => {
        var dia = document.getElementById('domingo');
        var colum = document.getElementById('col7');
        var repoUser = window.location.pathname;

        var semana = document.getElementById('selectSemana');

        if (button.checked) {
            dia.setAttribute("style", "background-color: ");
            colum.setAttribute("style", "background-color: ");
            chrome.runtime.sendMessage({ command: "setDia", data: { domain: { dia: 7, valor: true, domain: repoUser, semana: semana.value } } }, (response) => {
                console.log(response);
            })
        } else {
            dia.setAttribute("style", "background-color: red");
            colum.setAttribute("style", "background-color: red");
            chrome.runtime.sendMessage({ command: "setDia", data: { domain: { dia: 7, valor: false, domain: repoUser, semana: semana.value } } }, (response) => {
                console.log(response);
            })
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
    var titulo = document.getElementById('tituloEst');
    button.addEventListener('click', async () => {
        var repoUser = window.location.pathname;
        var sprint1;
        chrome.runtime.sendMessage({ command: "getSprint", data: { domain: repoUser } }, (response3) => {
            var sprint = document.getElementById("selectSprint");
            if (sprint.value == 'null') {
                var curr = new Date;
                var fecha = new Date(curr);
                var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
                var last = first + 6; // last day is the first day + 6

                var firstday = new Date(fecha.setDate(first + 1));
                var lastday = new Date(fecha.setDate(last + 1));

                var mes = firstday.getMonth() + 1;

                var semana1 = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + mes + "Y" + firstday.getFullYear();

                if (response3) {
                    for (let key in response3) {
                        if (response3[key]) {
                            if (response3[key][semana1]) {
                                sprint1 = key;
                            }
                        }
                    }
                }
            } else {
                sprint1 = sprint.value;
            }
            titulo.innerHTML = "Estadisticas del sprint " + sprint1;
            chrome.runtime.sendMessage({ command: "iconoMasUsadoSprint", data: { domain: { domain: repoUser, sprint: sprint1 } } }, (response) => {
                chrome.runtime.sendMessage({ command: "iconoMasUsadoSprintUsuario", data: { domain: { domain: repoUser, sprint: sprint1 } } }, (response2) => {
                    chrome.runtime.sendMessage({ command: "iconoMasUsadoPorDia", data: { domain: { domain: repoUser, sprint: sprint1 } } }, (response3) => {
                        chrome.runtime.sendMessage({ command: "iconoMasUsadoSemana", data: { domain: { domain: repoUser, sprint: sprint1 } } }, (response4) => {
                            chrome.runtime.sendMessage({ command: "fueraDefechaPorSprint", data: { domain: { domain: repoUser, sprint: sprint1 } } }, (response5) => {
                                var respuesta = response;

                                var icon1 = respuesta[0];
                                var icon2 = respuesta[1];
                                var icon3 = respuesta[2];
                                var sinIcono = respuesta[3];
                                var totalIcon = icon1 + icon2 + icon3 + sinIcono;

                                var iconoMasUsado;
                                var iconoMasUsadoNumero;

                                let m = new Map([['icon1', icon1], ['icon2', icon2], ['icon3', icon3], ['sinIcono', sinIcono]])

                                var result = [...m.entries()].reduce((a, e) => e[1] > a[1] ? e : a);

                                iconoMasUsado = result[0];
                                iconoMasUsadoNumero = result[1];

                                var iconoMasUsadoHtml = document.getElementById("iconoMasUsado");

                                if (iconoMasUsado === 'icon1') {
                                    var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                    iconoMasUsadoHtml.innerHTML = '<b>Icono más usado: </b> <img src="' + src + '" alt="Smile"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero + " de un total de " + totalIcon;
                                } else if (iconoMasUsado === 'icon2') {
                                    var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                    iconoMasUsadoHtml.innerHTML = '<b>Icono más usado: </b> <img src="' + src + '" alt="Sad" width="50" height="50"></img> Con ' + iconoMasUsadoNumero + " de un total de " + totalIcon;
                                } else if (iconoMasUsado === 'icon3') {
                                    var src = chrome.runtime.getURL("images/meh-regular.svg");
                                    iconoMasUsadoHtml.innerHTML = '<b>Icono más usado: </b> <img src="' + src + '" alt="Meh"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero + " de un total de " + totalIcon;
                                } else {
                                    iconoMasUsadoHtml.innerHTML = '<b>Icono más usado: </b> Sin icono Con ' + iconoMasUsadoNumero + " de un total de " + totalIcon;
                                }

                                var fueraDeFecha = document.getElementById("fueraDeFecha");

                                var fueraFecha = response5[0];
                                var totalDias = response5[1];
                                fueraDeFecha.innerHTML = '<b>Imputaciónes fuera de fecha: </b>' + fueraFecha + ' de ' + totalDias;


                                var listaUsuariosIcono = document.getElementById("listaUsuariosIcono");
                                listaUsuariosIcono.innerHTML = "";
                                var mapobj = new Map(response2);

                                for (const [key, value] of mapobj) {

                                    var icon1User = value[0];
                                    var icon2User = value[1];
                                    var icon3User = value[2];
                                    var sinIconoUser = value[3];
                                    var totalIconUser = icon1User + icon2User + icon3User + sinIconoUser;

                                    let m2 = new Map([['icon1', icon1User], ['icon2', icon2User], ['icon3', icon3User], ['sinIcono', sinIconoUser]])

                                    var result2 = [...m2.entries()].reduce((a, e) => e[1] > a[1] ? e : a);

                                    iconoMasUsado2 = result2[0];
                                    iconoMasUsadoNumero2 = result2[1];

                                    if (iconoMasUsado2 === 'icon1') {
                                        var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                        var li = document.createElement("li");
                                        li.innerHTML = "<b>Usuario " + key + '</b> Icono más usado: <img src="' + src + '" alt="Smile"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                        listaUsuariosIcono.appendChild(li);
                                    } else if (iconoMasUsado2 === 'icon2') {
                                        var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                        var li = document.createElement("li");
                                        li.innerHTML = "<b>Usuario " + key + '</b> Icono más usado: <img src="' + src + '" alt="Smile"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                        listaUsuariosIcono.appendChild(li);
                                    } else if (iconoMasUsado2 === 'icon3') {
                                        var src = chrome.runtime.getURL("images/meh-regular.svg");
                                        var li = document.createElement("li");
                                        li.innerHTML = "<b>Usuario " + key + '</b> Icono más usado: <img src="' + src + '" alt="Smile"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                        listaUsuariosIcono.appendChild(li);
                                    } else {
                                        var li = document.createElement("li");
                                        li.innerHTML = "<b>Usuario " + key + '</b> Icono más usado: Sin icono Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                        listaUsuariosIcono.appendChild(li);
                                    }

                                }

                                var listaIconosSprint = document.getElementById("listaIconosSprint");
                                listaIconosSprint.innerHTML = "";

                                var src1 = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                var li1 = document.createElement("li");
                                li1.innerHTML = '<b>Icono: </b> <img src="' + src1 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon1 + " de un total de " + totalIcon;
                                listaIconosSprint.appendChild(li1);

                                var src2 = chrome.runtime.getURL("images/frown-open-regular.svg");
                                var li2 = document.createElement("li");
                                li2.innerHTML = '<b>Icono: </b> <img src="' + src2 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon2 + " de un total de " + totalIcon;
                                listaIconosSprint.appendChild(li2);

                                var src3 = chrome.runtime.getURL("images/meh-regular.svg");
                                var li3 = document.createElement("li");
                                li3.innerHTML = '<b>Icono: </b> <img src="' + src3 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon3 + " de un total de " + totalIcon;
                                listaIconosSprint.appendChild(li3);

                                var li4 = document.createElement("li");
                                li4.innerHTML = '<b>Sin icono: </b> Con ' + sinIcono + " de un total de " + totalIcon;
                                listaIconosSprint.appendChild(li4);


                                var listaIconosSprintDia = document.getElementById("listaIconosSprintDia");
                                listaIconosSprintDia.innerHTML = "";
                                var mapobj2 = new Map(response3);

                                for (const [key, value] of mapobj2) {

                                    var icon1User = value[0];
                                    var icon2User = value[1];
                                    var icon3User = value[2];
                                    var sinIconoUser = value[3];
                                    var totalIconUser = icon1User + icon2User + icon3User + sinIconoUser;

                                    let m2 = new Map([['icon1', icon1User], ['icon2', icon2User], ['icon3', icon3User], ['sinIcono', sinIconoUser]])

                                    var result2 = [...m2.entries()].reduce((a, e) => e[1] > a[1] ? e : a);

                                    iconoMasUsado2 = result2[0];
                                    iconoMasUsadoNumero2 = result2[1];

                                    if (iconoMasUsado2 === 'icon1') {
                                        var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                        var li = document.createElement("li");
                                        li.innerHTML = "<b>Día " + key + '</b> Icono más usado: <img src="' + src + '" alt="Smile"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                        listaIconosSprintDia.appendChild(li);
                                    } else if (iconoMasUsado2 === 'icon2') {
                                        var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                        var li = document.createElement("li");
                                        li.innerHTML = "<b>Día " + key + '</b> Icono más usado: <img src="' + src + '" alt="Smile"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                        listaIconosSprintDia.appendChild(li);
                                    } else if (iconoMasUsado2 === 'icon3') {
                                        var src = chrome.runtime.getURL("images/meh-regular.svg");
                                        var li = document.createElement("li");
                                        li.innerHTML = "<b>Día " + key + '</b> Icono más usado: <img src="' + src + '" alt="Smile"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                        listaIconosSprintDia.appendChild(li);
                                    } else {
                                        var li = document.createElement("li");
                                        li.innerHTML = "<b>Día " + key + '</b> Icono más usado: Sin icono Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                        listaIconosSprintDia.appendChild(li);
                                    }

                                }

                                var listaIconosUsuarioResumen = document.getElementById("listaIconosUsuarioResumen");
                                listaIconosUsuarioResumen.innerHTML = "";
                                var mapobj = new Map(response2);

                                for (const [key, value] of mapobj) {

                                    var icon1User = value[0];
                                    var icon2User = value[1];
                                    var icon3User = value[2];
                                    var sinIconoUser = value[3];
                                    var totalIconUser = icon1User + icon2User + icon3User + sinIconoUser;

                                    let m2 = new Map([['icon1', icon1User], ['icon2', icon2User], ['icon3', icon3User], ['sinIcono', sinIconoUser]])

                                    var result2 = [...m2.entries()].reduce((a, e) => e[1] > a[1] ? e : a);

                                    iconoMasUsado2 = result2[0];
                                    iconoMasUsadoNumero2 = result2[1];

                                    var liUsuario = document.createElement("li");
                                    liUsuario.innerHTML = "<b>" + key + "</b>"
                                    var ul1 = document.createElement("ul");
                                    ul1.classList.add("ml-4");
                                    ul1.classList.add("mb-4");

                                    var src1 = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                    var li1 = document.createElement("li");
                                    li1.innerHTML = '<b>Icono: </b> <img src="' + src1 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon1User + " de un total de " + totalIconUser;
                                    ul1.appendChild(li1);

                                    var src2 = chrome.runtime.getURL("images/frown-open-regular.svg");
                                    var li2 = document.createElement("li");
                                    li2.innerHTML = '<b>Icono: </b> <img src="' + src2 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon2User + " de un total de " + totalIconUser;
                                    ul1.appendChild(li2);

                                    var src3 = chrome.runtime.getURL("images/meh-regular.svg");
                                    var li3 = document.createElement("li");
                                    li3.innerHTML = '<b>Icono: </b> <img src="' + src3 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon3User + " de un total de " + totalIconUser;
                                    ul1.appendChild(li3);

                                    var li4 = document.createElement("li");
                                    li4.innerHTML = '<b>Sin icono: </b> Con ' + sinIconoUser + " de un total de " + totalIconUser;
                                    ul1.appendChild(li4);

                                    liUsuario.appendChild(ul1);

                                    listaIconosUsuarioResumen.appendChild(liUsuario);

                                }

                                var listaIconosSemanaResumen = document.getElementById("listaIconosSemanaResumen");
                                listaIconosSemanaResumen.innerHTML = "";
                                var mapobj = new Map(response4);

                                for (const [key, value] of mapobj) {

                                    var icon1User = value[0];
                                    var icon2User = value[1];
                                    var icon3User = value[2];
                                    var sinIconoUser = value[3];
                                    var totalIconUser = icon1User + icon2User + icon3User + sinIconoUser;

                                    let m2 = new Map([['icon1', icon1User], ['icon2', icon2User], ['icon3', icon3User], ['sinIcono', sinIconoUser]])

                                    var result2 = [...m2.entries()].reduce((a, e) => e[1] > a[1] ? e : a);

                                    iconoMasUsado2 = result2[0];
                                    iconoMasUsadoNumero2 = result2[1];

                                    var liUsuario = document.createElement("li");


                                    var extractoSeamana = key;
                                    var semanaSplit = extractoSeamana.split('-');
                                    var valorNumerioSeamana = semanaSplit[1].match(/\d+/g);
                                    var valorNumericoDia = semanaSplit[0].match(/\d+/g);

                                    var mesSplit = +valorNumerioSeamana[1] - 1;
                                    var diaSplit = +valorNumericoDia[0];

                                    var curr = new Date(valorNumerioSeamana[2], mesSplit, diaSplit);
                                    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
                                    var last = first + 6; // last day is the first day + 6

                                    var firstday = new Date(curr.setDate(first + 1));
                                    var lastday = new Date(curr.setDate(last + 1));

                                    var mes = firstday.getMonth() + 1;

                                    var mes2 = lastday.getMonth() + 1;

                                    var semana = document.getElementById("semana");

                                    liUsuario.innerHTML = "<b>Semana: " + firstday.getDate() + "/" + mes + "/" + firstday.getFullYear() + " a " + lastday.getDate() + "/" + mes2 + "/" + lastday.getFullYear() + "</b>";


                                    var ul1 = document.createElement("ul");
                                    ul1.classList.add("ml-4");
                                    ul1.classList.add("mb-4");

                                    var src1 = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                    var li1 = document.createElement("li");
                                    li1.innerHTML = '<b>Icono: </b> <img src="' + src1 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon1User + " de un total de " + totalIconUser;
                                    ul1.appendChild(li1);

                                    var src2 = chrome.runtime.getURL("images/frown-open-regular.svg");
                                    var li2 = document.createElement("li");
                                    li2.innerHTML = '<b>Icono: </b> <img src="' + src2 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon2User + " de un total de " + totalIconUser;
                                    ul1.appendChild(li2);

                                    var src3 = chrome.runtime.getURL("images/meh-regular.svg");
                                    var li3 = document.createElement("li");
                                    li3.innerHTML = '<b>Icono: </b> <img src="' + src3 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon3User + " de un total de " + totalIconUser;
                                    ul1.appendChild(li3);

                                    var li4 = document.createElement("li");
                                    li4.innerHTML = '<b>Sin icono: </b> Con ' + sinIconoUser + " de un total de " + totalIconUser;
                                    ul1.appendChild(li4);

                                    liUsuario.appendChild(ul1);

                                    listaIconosSemanaResumen.appendChild(liUsuario);

                                }


                                var listaIconosSprintDiaResumen = document.getElementById("listaIconosSprintDiaResumen");
                                listaIconosSprintDiaResumen.innerHTML = "";
                                var mapobj = new Map(response3);

                                for (const [key, value] of mapobj) {

                                    var icon1User = value[0];
                                    var icon2User = value[1];
                                    var icon3User = value[2];
                                    var sinIconoUser = value[3];
                                    var totalIconUser = icon1User + icon2User + icon3User + sinIconoUser;

                                    let m2 = new Map([['icon1', icon1User], ['icon2', icon2User], ['icon3', icon3User], ['sinIcono', sinIconoUser]])

                                    var result2 = [...m2.entries()].reduce((a, e) => e[1] > a[1] ? e : a);

                                    iconoMasUsado2 = result2[0];
                                    iconoMasUsadoNumero2 = result2[1];

                                    var liUsuario = document.createElement("li");
                                    liUsuario.innerHTML = "<b>" + key + "</b>"
                                    var ul1 = document.createElement("ul");
                                    ul1.classList.add("ml-4");
                                    ul1.classList.add("mb-4");

                                    var src1 = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                    var li1 = document.createElement("li");
                                    li1.innerHTML = '<b>Icono: </b> <img src="' + src1 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon1User + " de un total de " + totalIconUser;
                                    ul1.appendChild(li1);

                                    var src2 = chrome.runtime.getURL("images/frown-open-regular.svg");
                                    var li2 = document.createElement("li");
                                    li2.innerHTML = '<b>Icono: </b> <img src="' + src2 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon2User + " de un total de " + totalIconUser;
                                    ul1.appendChild(li2);

                                    var src3 = chrome.runtime.getURL("images/meh-regular.svg");
                                    var li3 = document.createElement("li");
                                    li3.innerHTML = '<b>Icono: </b> <img src="' + src3 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon3User + " de un total de " + totalIconUser;
                                    ul1.appendChild(li3);

                                    var li4 = document.createElement("li");
                                    li4.innerHTML = '<b>Sin icono: </b> Con ' + sinIconoUser + " de un total de " + totalIconUser;
                                    ul1.appendChild(li4);

                                    liUsuario.appendChild(ul1);

                                    listaIconosSprintDiaResumen.appendChild(liUsuario);

                                }



                                var button = document.getElementById("pantallaEst");
                                var calendario = document.getElementById("mainBox");
                                calendario.setAttribute("style", "display: none");
                                button.setAttribute("style", "display: inline");
                            });
                        });
                    });
                });
            });
        });
    });
}

function injectEventInButtonShowEstGlobal() {
    var button = document.getElementById('estGlobales');
    var titulo = document.getElementById('tituloEst');
    button.addEventListener('click', async () => {
        var repoUser = window.location.pathname;
        chrome.runtime.sendMessage({ command: "iconoMasUsadoSprintGlobal", data: { domain: { domain: repoUser } } }, (response) => {
            chrome.runtime.sendMessage({ command: "iconoMasUsadoSprintUsuarioGlobal", data: { domain: { domain: repoUser } } }, (response2) => {
                chrome.runtime.sendMessage({ command: "iconoMasUsadoPorDiaGlobal", data: { domain: { domain: repoUser } } }, (response3) => {
                    chrome.runtime.sendMessage({ command: "iconoMasUsadoSemanaGlobal", data: { domain: { domain: repoUser } } }, (response4) => {
                        chrome.runtime.sendMessage({ command: "fueraDefechaPorSprintGlobal", data: { domain: { domain: repoUser } } }, (response5) => {
                            var respuesta = response;
                            titulo.innerHTML = "Estadisticas Globales";
                            var icon1 = respuesta[0];
                            var icon2 = respuesta[1];
                            var icon3 = respuesta[2];
                            var sinIcono = respuesta[3];
                            var totalIcon = icon1 + icon2 + icon3 + sinIcono;

                            var iconoMasUsado;
                            var iconoMasUsadoNumero;

                            let m = new Map([['icon1', icon1], ['icon2', icon2], ['icon3', icon3], ['sinIcono', sinIcono]])

                            var result = [...m.entries()].reduce((a, e) => e[1] > a[1] ? e : a);

                            iconoMasUsado = result[0];
                            iconoMasUsadoNumero = result[1];

                            var iconoMasUsadoHtml = document.getElementById("iconoMasUsado");

                            if (iconoMasUsado === 'icon1') {
                                var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                iconoMasUsadoHtml.innerHTML = '<b>Icono más usado: </b> <img src="' + src + '" alt="Smile"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero + " de un total de " + totalIcon;
                            } else if (iconoMasUsado === 'icon2') {
                                var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                iconoMasUsadoHtml.innerHTML = '<b>Icono más usado: </b> <img src="' + src + '" alt="Sad" width="50" height="50"></img> Con ' + iconoMasUsadoNumero + " de un total de " + totalIcon;
                            } else if (iconoMasUsado === 'icon3') {
                                var src = chrome.runtime.getURL("images/meh-regular.svg");
                                iconoMasUsadoHtml.innerHTML = '<b>Icono más usado: </b> <img src="' + src + '" alt="Meh"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero + " de un total de " + totalIcon;
                            } else {
                                iconoMasUsadoHtml.innerHTML = '<b>Icono más usado: </b> Sin icono Con ' + iconoMasUsadoNumero + " de un total de " + totalIcon;
                            }

                            var fueraDeFecha = document.getElementById("fueraDeFecha");

                            var fueraFecha = response5[0];
                            var totalDias = response5[1];
                            fueraDeFecha.innerHTML = '<b>Imputaciónes fuera de fecha: </b>' + fueraFecha + ' de ' + totalDias;


                            var listaUsuariosIcono = document.getElementById("listaUsuariosIcono");
                            listaUsuariosIcono.innerHTML = "";
                            var mapobj = new Map(response2);

                            for (const [key, value] of mapobj) {

                                var icon1User = value[0];
                                var icon2User = value[1];
                                var icon3User = value[2];
                                var sinIconoUser = value[3];
                                var totalIconUser = icon1User + icon2User + icon3User + sinIconoUser;

                                let m2 = new Map([['icon1', icon1User], ['icon2', icon2User], ['icon3', icon3User], ['sinIcono', sinIconoUser]])

                                var result2 = [...m2.entries()].reduce((a, e) => e[1] > a[1] ? e : a);

                                iconoMasUsado2 = result2[0];
                                iconoMasUsadoNumero2 = result2[1];

                                if (iconoMasUsado2 === 'icon1') {
                                    var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                    var li = document.createElement("li");
                                    li.innerHTML = "<b>Usuario " + key + '</b> Icono más usado: <img src="' + src + '" alt="Smile"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                    listaUsuariosIcono.appendChild(li);
                                } else if (iconoMasUsado2 === 'icon2') {
                                    var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                    var li = document.createElement("li");
                                    li.innerHTML = "<b>Usuario " + key + '</b> Icono más usado: <img src="' + src + '" alt="Smile"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                    listaUsuariosIcono.appendChild(li);
                                } else if (iconoMasUsado2 === 'icon3') {
                                    var src = chrome.runtime.getURL("images/meh-regular.svg");
                                    var li = document.createElement("li");
                                    li.innerHTML = "<b>Usuario " + key + '</b> Icono más usado: <img src="' + src + '" alt="Smile"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                    listaUsuariosIcono.appendChild(li);
                                } else {
                                    var li = document.createElement("li");
                                    li.innerHTML = "<b>Usuario " + key + '</b> Icono más usado: Sin icono Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                    listaUsuariosIcono.appendChild(li);
                                }

                            }

                            var listaIconosSprint = document.getElementById("listaIconosSprint");
                            listaIconosSprint.innerHTML = "";

                            var src1 = chrome.runtime.getURL("images/smile-beam-regular.svg");
                            var li1 = document.createElement("li");
                            li1.innerHTML = '<b>Icono: </b> <img src="' + src1 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon1 + " de un total de " + totalIcon;
                            listaIconosSprint.appendChild(li1);

                            var src2 = chrome.runtime.getURL("images/frown-open-regular.svg");
                            var li2 = document.createElement("li");
                            li2.innerHTML = '<b>Icono: </b> <img src="' + src2 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon2 + " de un total de " + totalIcon;
                            listaIconosSprint.appendChild(li2);

                            var src3 = chrome.runtime.getURL("images/meh-regular.svg");
                            var li3 = document.createElement("li");
                            li3.innerHTML = '<b>Icono: </b> <img src="' + src3 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon3 + " de un total de " + totalIcon;
                            listaIconosSprint.appendChild(li3);

                            var li4 = document.createElement("li");
                            li4.innerHTML = '<b>Sin icono: </b> Con ' + sinIcono + " de un total de " + totalIcon;
                            listaIconosSprint.appendChild(li4);


                            var listaIconosSprintDia = document.getElementById("listaIconosSprintDia");
                            listaIconosSprintDia.innerHTML = "";
                            var mapobj2 = new Map(response3);

                            for (const [key, value] of mapobj2) {

                                var icon1User = value[0];
                                var icon2User = value[1];
                                var icon3User = value[2];
                                var sinIconoUser = value[3];
                                var totalIconUser = icon1User + icon2User + icon3User + sinIconoUser;

                                let m2 = new Map([['icon1', icon1User], ['icon2', icon2User], ['icon3', icon3User], ['sinIcono', sinIconoUser]])

                                var result2 = [...m2.entries()].reduce((a, e) => e[1] > a[1] ? e : a);

                                iconoMasUsado2 = result2[0];
                                iconoMasUsadoNumero2 = result2[1];

                                if (iconoMasUsado2 === 'icon1') {
                                    var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                    var li = document.createElement("li");
                                    li.innerHTML = "<b>Día " + key + '</b> Icono más usado: <img src="' + src + '" alt="Smile"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                    listaIconosSprintDia.appendChild(li);
                                } else if (iconoMasUsado2 === 'icon2') {
                                    var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                    var li = document.createElement("li");
                                    li.innerHTML = "<b>Día " + key + '</b> Icono más usado: <img src="' + src + '" alt="Smile"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                    listaIconosSprintDia.appendChild(li);
                                } else if (iconoMasUsado2 === 'icon3') {
                                    var src = chrome.runtime.getURL("images/meh-regular.svg");
                                    var li = document.createElement("li");
                                    li.innerHTML = "<b>Día " + key + '</b> Icono más usado: <img src="' + src + '" alt="Smile"  width="50" height="50"></img> Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                    listaIconosSprintDia.appendChild(li);
                                } else {
                                    var li = document.createElement("li");
                                    li.innerHTML = "<b>Día " + key + '</b> Icono más usado: Sin icono Con ' + iconoMasUsadoNumero2 + " de un total de " + totalIconUser;
                                    listaIconosSprintDia.appendChild(li);
                                }

                            }

                            var listaIconosUsuarioResumen = document.getElementById("listaIconosUsuarioResumen");
                            listaIconosUsuarioResumen.innerHTML = "";
                            var mapobj = new Map(response2);

                            for (const [key, value] of mapobj) {

                                var icon1User = value[0];
                                var icon2User = value[1];
                                var icon3User = value[2];
                                var sinIconoUser = value[3];
                                var totalIconUser = icon1User + icon2User + icon3User + sinIconoUser;

                                let m2 = new Map([['icon1', icon1User], ['icon2', icon2User], ['icon3', icon3User], ['sinIcono', sinIconoUser]])

                                var result2 = [...m2.entries()].reduce((a, e) => e[1] > a[1] ? e : a);

                                iconoMasUsado2 = result2[0];
                                iconoMasUsadoNumero2 = result2[1];

                                var liUsuario = document.createElement("li");
                                liUsuario.innerHTML = "<b>" + key + "</b>"
                                var ul1 = document.createElement("ul");
                                ul1.classList.add("ml-4");
                                ul1.classList.add("mb-4");

                                var src1 = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                var li1 = document.createElement("li");
                                li1.innerHTML = '<b>Icono: </b> <img src="' + src1 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon1User + " de un total de " + totalIconUser;
                                ul1.appendChild(li1);

                                var src2 = chrome.runtime.getURL("images/frown-open-regular.svg");
                                var li2 = document.createElement("li");
                                li2.innerHTML = '<b>Icono: </b> <img src="' + src2 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon2User + " de un total de " + totalIconUser;
                                ul1.appendChild(li2);

                                var src3 = chrome.runtime.getURL("images/meh-regular.svg");
                                var li3 = document.createElement("li");
                                li3.innerHTML = '<b>Icono: </b> <img src="' + src3 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon3User + " de un total de " + totalIconUser;
                                ul1.appendChild(li3);

                                var li4 = document.createElement("li");
                                li4.innerHTML = '<b>Sin icono: </b> Con ' + sinIconoUser + " de un total de " + totalIconUser;
                                ul1.appendChild(li4);

                                liUsuario.appendChild(ul1);

                                listaIconosUsuarioResumen.appendChild(liUsuario);

                            }

                            var listaIconosSemanaResumen = document.getElementById("listaIconosSemanaResumen");
                            listaIconosSemanaResumen.innerHTML = "";
                            var mapobj = new Map(response4);

                            for (const [key, value] of mapobj) {

                                var icon1User = value[0];
                                var icon2User = value[1];
                                var icon3User = value[2];
                                var sinIconoUser = value[3];
                                var totalIconUser = icon1User + icon2User + icon3User + sinIconoUser;

                                let m2 = new Map([['icon1', icon1User], ['icon2', icon2User], ['icon3', icon3User], ['sinIcono', sinIconoUser]])

                                var result2 = [...m2.entries()].reduce((a, e) => e[1] > a[1] ? e : a);

                                iconoMasUsado2 = result2[0];
                                iconoMasUsadoNumero2 = result2[1];

                                var liUsuario = document.createElement("li");


                                var extractoSeamana = key;
                                var semanaSplit = extractoSeamana.split('-');
                                var valorNumerioSeamana = semanaSplit[1].match(/\d+/g);
                                var valorNumericoDia = semanaSplit[0].match(/\d+/g);

                                var mesSplit = +valorNumerioSeamana[1] - 1;
                                var diaSplit = +valorNumericoDia[0];

                                var curr = new Date(valorNumerioSeamana[2], mesSplit, diaSplit);
                                var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
                                var last = first + 6; // last day is the first day + 6

                                var firstday = new Date(curr.setDate(first + 1));
                                var lastday = new Date(curr.setDate(last + 1));

                                var mes = firstday.getMonth() + 1;

                                var mes2 = lastday.getMonth() + 1;

                                var semana = document.getElementById("semana");

                                liUsuario.innerHTML = "<b>Semana: " + firstday.getDate() + "/" + mes + "/" + firstday.getFullYear() + " a " + lastday.getDate() + "/" + mes2 + "/" + lastday.getFullYear() + "</b>";

                                var ul1 = document.createElement("ul");
                                ul1.classList.add("ml-4");
                                ul1.classList.add("mb-4");

                                var src1 = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                var li1 = document.createElement("li");
                                li1.innerHTML = '<b>Icono: </b> <img src="' + src1 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon1User + " de un total de " + totalIconUser;
                                ul1.appendChild(li1);

                                var src2 = chrome.runtime.getURL("images/frown-open-regular.svg");
                                var li2 = document.createElement("li");
                                li2.innerHTML = '<b>Icono: </b> <img src="' + src2 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon2User + " de un total de " + totalIconUser;
                                ul1.appendChild(li2);

                                var src3 = chrome.runtime.getURL("images/meh-regular.svg");
                                var li3 = document.createElement("li");
                                li3.innerHTML = '<b>Icono: </b> <img src="' + src3 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon3User + " de un total de " + totalIconUser;
                                ul1.appendChild(li3);

                                var li4 = document.createElement("li");
                                li4.innerHTML = '<b>Sin icono: </b> Con ' + sinIconoUser + " de un total de " + totalIconUser;
                                ul1.appendChild(li4);

                                liUsuario.appendChild(ul1);

                                listaIconosSemanaResumen.appendChild(liUsuario);

                            }

                            var listaIconosSprintDiaResumen = document.getElementById("listaIconosSprintDiaResumen");
                            listaIconosSprintDiaResumen.innerHTML = "";
                            var mapobj = new Map(response3);

                            for (const [key, value] of mapobj) {

                                var icon1User = value[0];
                                var icon2User = value[1];
                                var icon3User = value[2];
                                var sinIconoUser = value[3];
                                var totalIconUser = icon1User + icon2User + icon3User + sinIconoUser;

                                let m2 = new Map([['icon1', icon1User], ['icon2', icon2User], ['icon3', icon3User], ['sinIcono', sinIconoUser]])

                                var result2 = [...m2.entries()].reduce((a, e) => e[1] > a[1] ? e : a);

                                iconoMasUsado2 = result2[0];
                                iconoMasUsadoNumero2 = result2[1];

                                var liUsuario = document.createElement("li");
                                liUsuario.innerHTML = "<b>" + key + "</b>"
                                var ul1 = document.createElement("ul");
                                ul1.classList.add("ml-4");
                                ul1.classList.add("mb-4");

                                var src1 = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                var li1 = document.createElement("li");
                                li1.innerHTML = '<b>Icono: </b> <img src="' + src1 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon1User + " de un total de " + totalIconUser;
                                ul1.appendChild(li1);

                                var src2 = chrome.runtime.getURL("images/frown-open-regular.svg");
                                var li2 = document.createElement("li");
                                li2.innerHTML = '<b>Icono: </b> <img src="' + src2 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon2User + " de un total de " + totalIconUser;
                                ul1.appendChild(li2);

                                var src3 = chrome.runtime.getURL("images/meh-regular.svg");
                                var li3 = document.createElement("li");
                                li3.innerHTML = '<b>Icono: </b> <img src="' + src3 + '" alt="Smile"  width="50" height="50"></img> Usado ' + icon3User + " de un total de " + totalIconUser;
                                ul1.appendChild(li3);

                                var li4 = document.createElement("li");
                                li4.innerHTML = '<b>Sin icono: </b> Con ' + sinIconoUser + " de un total de " + totalIconUser;
                                ul1.appendChild(li4);

                                liUsuario.appendChild(ul1);

                                listaIconosSprintDiaResumen.appendChild(liUsuario);

                            }


                            var button = document.getElementById("pantallaEst");
                            var calendario = document.getElementById("mainBox");
                            calendario.setAttribute("style", "display: none");
                            button.setAttribute("style", "display: inline");
                        });
                    });
                });
            });
        });

    });
}

function injectEventInSelectSprint() {
    var select = document.getElementById('selectSprint');
    select.addEventListener('change', async () => {
        var domain = window.location.pathname;
        chrome.runtime.sendMessage({ command: "getSprint", data: { domain: domain } }, (response) => {
            var selectValue = document.getElementById('selectSprint');
            for (let key in response) {
                if (selectValue.value === key) {
                    var semanas = response[key];
                    var semana = document.getElementById("selectSemana");
                    for (i = semana.length; i >= 0; i--) {
                        semana.remove(i);
                    }

                    var textoSprint = document.getElementById("sprint");

                    textoSprint.innerHTML = "Sprint: " + key;

                    var opcionSemana = document.createElement('option')
                    opcionSemana.value = "null";
                    opcionSemana.text = "Semana";
                    semana.append(opcionSemana);
                    for (let sem in semanas) {
                        var opcionSemana = document.createElement('option')
                        opcionSemana.value = sem;
                        opcionSemana.text = sem;
                        semana.append(opcionSemana);
                    }
                }
            }
        });
    });
}

function injectEventOnloadTable() {
    var domain = window.location.pathname;
    chrome.runtime.sendMessage({ command: "getSprint", data: { domain: domain } }, (response) => {
        chrome.runtime.sendMessage({ command: "getSemana", data: { domain: domain } }, (response2) => {
            chrome.runtime.sendMessage({ command: "getUsuarioLogueado", data: { domain: domain } }, (response3) => {

                var curr = new Date;
                var fecha = new Date(curr);
                var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
                var last = first + 6; // last day is the first day + 6

                var firstday = new Date(fecha.setDate(first + 1));
                var lastday = new Date(fecha.setDate(last + 1));

                var mes = firstday.getMonth() + 1;

                var semana1 = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + mes + "Y" + firstday.getFullYear();

                var semanaDbdias;
                if (response2[semana1]) {
                    semanaDbdias = response2[semana1];
                }


                if (semanaDbdias) {
                    for (let key in semanaDbdias) {
                        if (key === 'lunes') {
                            var button = document.getElementById('c1');
                            if (!semanaDbdias[key] && button.checked) {
                                button.click();
                            } else if (!button.checked) {
                                button.click();
                            }
                        } else if (key == 'martes') {
                            var button = document.getElementById('c2');
                            if (!semanaDbdias[key] && button.checked) {
                                button.click();
                            } else if (semanaDbdias[key] && !button.checked) {
                                button.click();
                            }
                        } else if (key == 'miercoles') {
                            var button = document.getElementById('c3');
                            if (!semanaDbdias[key] && button.checked) {
                                button.click();
                            } else if (semanaDbdias[key] && !button.checked) {
                                button.click();
                            }
                        } else if (key == 'jueves') {
                            var button = document.getElementById('c4');
                            if (!semanaDbdias[key] && button.checked) {
                                button.click();
                            } else if (semanaDbdias[key] && !button.checked) {
                                button.click();
                            }
                        } else if (key == 'viernes') {
                            var button = document.getElementById('c5');
                            if (!semanaDbdias[key] && button.checked) {
                                button.click();
                            } else if (semanaDbdias[key] && !button.checked) {
                                button.click();
                            }
                        } else if (key == 'sabado') {
                            var button = document.getElementById('c6');
                            if (!semanaDbdias[key] && button.checked) {
                                button.click();
                            } else if (semanaDbdias[key] && !button.checked) {
                                button.click();
                            }
                        } else if (key == 'domingo') {
                            var button = document.getElementById('c7');
                            if (!semanaDbdias[key] && button.checked) {
                                button.click();
                            } else if (semanaDbdias[key] && !button.checked) {
                                button.click();
                            }
                        }
                    }
                }


                var semanaDb;
                for (let key in response) {
                    if (response[key]) {
                        if (response[key][semana1]) {

                            semanaDb = response[key][semana1];
                        }
                    }
                } 2

                var position5 = new Date().getDay();

                if (semanaDb) {
                    for (let key in semanaDb) {
                        //key es persona

                        var tab = document.getElementById('tableMain');
                        var arr = [];
                        var n = tab.rows.length;
                        for (i = 1; i < n; i++) {
                            if (tab.rows[i].cells[0].innerHTML === key) {
                                for (colu = 1; colu < 8; colu++) {
                                    if (colu === 1) {
                                        if (semanaDb[key].lunes.emoticono === 'icon1') {
                                            var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Smile"  width="50" height="50" title="' + semanaDb[key].lunes.descripcion + '"></img>';
                                        } else if (semanaDb[key].lunes.emoticono === 'icon2') {
                                            var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Sad" width="50" height="50" title="' + semanaDb[key].lunes.descripcion + '"></img>';
                                        } else if (semanaDb[key].lunes.emoticono === 'icon3') {
                                            var src = chrome.runtime.getURL("images/meh-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Meh"  width="50" height="50" title="' + semanaDb[key].lunes.descripcion + '"></img>';
                                        } else {
                                            tab.rows[i].cells[colu].innerHTML = ''
                                        }
                                        // if ((colu === position5) && (response3.login == key) && (semanaDb[key].lunes.emoticono != '-')) {
                                        //     tab.rows[i].cells[colu].innerHTML = tab.rows[i].cells[colu].innerHTML + "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                        // } else if ((colu === position5) && (response3.login == key) && (semanaDb[key].lunes.emoticono == '-')) {
                                        //     tab.rows[i].cells[colu].innerHTML = "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                        // }
                                    } else if (colu == 2) {
                                        if (semanaDb[key].martes.emoticono === 'icon1') {
                                            var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Smile"  width="50" height="50" title="' + semanaDb[key].martes.descripcion + '"></img>';
                                        } else if (semanaDb[key].martes.emoticono === 'icon2') {
                                            var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Sad" width="50" height="50" title="' + semanaDb[key].martes.descripcion + '"></img>';
                                        } else if (semanaDb[key].martes.emoticono === 'icon3') {
                                            var src = chrome.runtime.getURL("images/meh-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Meh"  width="50" height="50" title="' + semanaDb[key].martes.descripcion + '"></img>';
                                        } else {
                                            tab.rows[i].cells[colu].innerHTML = ''
                                        }
                                        // if ((colu === position5) && (response3.login == key) && (semanaDb[key].martes.emoticono != '-')) {
                                        //     tab.rows[i].cells[colu].innerHTML = tab.rows[i].cells[colu].innerHTML + "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                        // } else if ((colu === position5) && (response3.login == key) && (semanaDb[key].martes.emoticono == '-')) {
                                        //     tab.rows[i].cells[colu].innerHTML = "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                        // }
                                    } else if (colu == 3) {
                                        if (semanaDb[key].miercoles.emoticono === 'icon1') {
                                            var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Smile"  width="50" height="50" title="' + semanaDb[key].miercoles.descripcion + '"></img>';
                                        } else if (semanaDb[key].miercoles.emoticono === 'icon2') {
                                            var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Sad" width="50" height="50" title="' + semanaDb[key].miercoles.descripcion + '"></img>';
                                        } else if (semanaDb[key].miercoles.emoticono === 'icon3') {
                                            var src = chrome.runtime.getURL("images/meh-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Meh"  width="50" height="50" title="' + semanaDb[key].miercoles.descripcion + '"></img>';
                                        } else {
                                            tab.rows[i].cells[colu].innerHTML = ''
                                        }
                                        // if ((colu === position5) && (response3.login == key) && (semanaDb[key].miercoles.emoticono != '-')) {
                                        //     tab.rows[i].cells[colu].innerHTML = tab.rows[i].cells[colu].innerHTML + "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                        // } else if ((colu === position5) && (response3.login == key) && (semanaDb[key].miercoles.emoticono == '-')) {
                                        //     tab.rows[i].cells[colu].innerHTML = "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                        // }
                                    } else if (colu == 4) {
                                        if (semanaDb[key].jueves.emoticono === 'icon1') {
                                            var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Smile"  width="50" height="50" title="' + semanaDb[key].jueves.descripcion + '"></img>';
                                        } else if (semanaDb[key].jueves.emoticono === 'icon2') {
                                            var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Sad" width="50" height="50" title="' + semanaDb[key].jueves.descripcion + '"></img>';
                                        } else if (semanaDb[key].jueves.emoticono === 'icon3') {
                                            var src = chrome.runtime.getURL("images/meh-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Meh"  width="50" height="50" title="' + semanaDb[key].jueves.descripcion + '"></img>';
                                        } else {
                                            tab.rows[i].cells[colu].innerHTML = ''
                                        }
                                        // if ((colu === position5) && (response3.login == key) && (semanaDb[key].jueves.emoticono != '-')) {
                                        //     tab.rows[i].cells[colu].innerHTML = tab.rows[i].cells[colu].innerHTML + "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                        // } else if ((colu === position5) && (response3.login == key) && (semanaDb[key].jueves.emoticono == '-')) {
                                        //     tab.rows[i].cells[colu].innerHTML = "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                        // }
                                    } else if (colu == 5) {
                                        if (semanaDb[key].viernes.emoticono === 'icon1') {
                                            var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Smile"  width="50" height="50" title="' + semanaDb[key].viernes.descripcion + '"></img>';
                                        } else if (semanaDb[key].viernes.emoticono === 'icon2') {
                                            var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Sad" width="50" height="50" title="' + semanaDb[key].viernes.descripcion + '"></img>';
                                        } else if (semanaDb[key].viernes.emoticono === 'icon3') {
                                            var src = chrome.runtime.getURL("images/meh-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Meh"  width="50" height="50" title="' + semanaDb[key].viernes.descripcion + '"></img>';
                                        } else {
                                            tab.rows[i].cells[colu].innerHTML = ''
                                        }
                                        // if ((colu === position5) && (response3.login == key) && (semanaDb[key].viernes.emoticono != '-')) {
                                        //     tab.rows[i].cells[colu].innerHTML = tab.rows[i].cells[colu].innerHTML + "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                        // } else if ((colu === position5) && (response3.login == key) && (semanaDb[key].viernes.emoticono == '-')) {
                                        //     tab.rows[i].cells[colu].innerHTML = "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                        // }
                                    } else if (colu == 6) {
                                        if (semanaDb[key].sabado.emoticono === 'icon1') {
                                            var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Smile"  width="50" height="50" title="' + semanaDb[key].sabado.descripcion + '"></img>';
                                        } else if (semanaDb[key].sabado.emoticono === 'icon2') {
                                            var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Sad" width="50" height="50" title="' + semanaDb[key].sabado.descripcion + '"></img>';
                                        } else if (semanaDb[key].sabado.emoticono === 'icon3') {
                                            var src = chrome.runtime.getURL("images/meh-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Meh"  width="50" height="50" title="' + semanaDb[key].sabado.descripcion + '"></img>';
                                        } else {
                                            tab.rows[i].cells[colu].innerHTML = ''
                                        }
                                        // if ((colu === position5) && (response3.login == key) && (semanaDb[key].sabado.emoticono != '-')) {
                                        //     tab.rows[i].cells[colu].innerHTML = tab.rows[i].cells[colu].innerHTML + "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                        // } else if ((colu === position5) && (response3.login == key) && (semanaDb[key].sabado.emoticono == '-')) {
                                        //     tab.rows[i].cells[colu].innerHTML = "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                        // }
                                    } else if (colu == 7) {
                                        if (semanaDb[key].domingo.emoticono === 'icon1') {
                                            var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Smile"  width="50" height="50" title="' + semanaDb[key].domingo.descripcion + '"></img>';
                                        } else if (semanaDb[key].domingo.emoticono === 'icon2') {
                                            var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Sad" width="50" height="50" title="' + semanaDb[key].domingo.descripcion + '"></img>';
                                        } else if (semanaDb[key].domingo.emoticono === 'icon3') {
                                            var src = chrome.runtime.getURL("images/meh-regular.svg");
                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Meh"  width="50" height="50" title="' + semanaDb[key].domingo.descripcion + '"></img>';
                                        } else {
                                            tab.rows[i].cells[colu].innerHTML = ''
                                        }

                                        // if ((0 === position5) && (response3.login == key) && (semanaDb[key].domingo.emoticono != '-')) {
                                        //     tab.rows[i].cells[colu].innerHTML = tab.rows[i].cells[colu].innerHTML + "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                        // } else if ((0 === position5) && (response3.login == key) && (semanaDb[key].domingo.emoticono == '-')) {
                                        //     tab.rows[i].cells[colu].innerHTML = "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                        // }
                                    }
                                }
                            }
                        }
                    }
                }

                // var inputarboton = document.getElementById('myBtn');
                // inputarboton.style.visibility = 'visible';

                injectEventInButtonImputar();
            });
        });
    });

}

function injectEventInSelectSemana() {
    var select = document.getElementById('selectSemana');
    select.addEventListener('change', async () => {
        var domain = window.location.pathname;
        chrome.runtime.sendMessage({ command: "getSprint", data: { domain: domain } }, (response) => {
            chrome.runtime.sendMessage({ command: "getSemana", data: { domain: domain } }, (response2) => {
                chrome.runtime.sendMessage({ command: "getUsuarioLogueado", data: { domain: domain } }, (response3) => {
                    var selectValue = document.getElementById('selectSemana');

                    var extractoSeamana = selectValue.value;
                    var semanaSplit = extractoSeamana.split('-');
                    var valorNumerioSeamana = semanaSplit[1].match(/\d+/g);
                    var valorNumericoDia = semanaSplit[0].match(/\d+/g);

                    var mesSplit = +valorNumerioSeamana[1] - 1;
                    var diaSplit = +valorNumericoDia[0];

                    var curr = new Date(valorNumerioSeamana[2], mesSplit, diaSplit);
                    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
                    var last = first + 6; // last day is the first day + 6

                    var firstday = new Date(curr.setDate(first + 1));
                    var lastday = new Date(curr.setDate(last + 1));

                    var mes = firstday.getMonth() + 1;

                    var mes2 = lastday.getMonth() + 1;

                    var semana = document.getElementById("semana");

                    semana.innerHTML = "Semana: " + firstday.getDate() + "/" + mes + "/" + firstday.getFullYear() + " a " + lastday.getDate() + "/" + mes2 + "/" + lastday.getFullYear();

                    var curr2 = new Date;
                    var fecha2 = new Date(curr2);
                    var first2 = fecha2.getDate() - fecha2.getDay(); // First day is the day of the month - the day of the week
                    var last2 = first2 + 6; // last day is the first day + 6

                    var firstday2 = new Date(fecha2.setDate(first2 + 1));
                    var lastday2 = new Date(fecha2.setDate(last2 + 1));

                    var mes2 = firstday2.getMonth() + 1;

                    var semana2 = "D" + firstday2.getDate() + "-" + lastday2.getDate() + "M" + mes2 + "Y" + firstday2.getFullYear();

                    var semanaDbdias;
                    if (response2[selectValue.value]) {
                        semanaDbdias = response2[selectValue.value];
                    }


                    if (semanaDbdias) {
                        for (let key in semanaDbdias) {
                            if (key === 'lunes') {
                                var button = document.getElementById('c1');
                                if (!semanaDbdias[key] && button.checked) {
                                    button.click();
                                } else if (!button.checked) {
                                    button.click();
                                }
                            } else if (key == 'martes') {
                                var button = document.getElementById('c2');
                                if (!semanaDbdias[key] && button.checked) {
                                    button.click();
                                } else if (semanaDbdias[key] && !button.checked) {
                                    button.click();
                                }
                            } else if (key == 'miercoles') {
                                var button = document.getElementById('c3');
                                if (!semanaDbdias[key] && button.checked) {
                                    button.click();
                                } else if (semanaDbdias[key] && !button.checked) {
                                    button.click();
                                }
                            } else if (key == 'jueves') {
                                var button = document.getElementById('c4');
                                if (!semanaDbdias[key] && button.checked) {
                                    button.click();
                                } else if (semanaDbdias[key] && !button.checked) {
                                    button.click();
                                }
                            } else if (key == 'viernes') {
                                var button = document.getElementById('c5');
                                if (!semanaDbdias[key] && button.checked) {
                                    button.click();
                                } else if (semanaDbdias[key] && !button.checked) {
                                    button.click();
                                }
                            } else if (key == 'sabado') {
                                var button = document.getElementById('c6');
                                if (!semanaDbdias[key] && button.checked) {
                                    button.click();
                                } else if (semanaDbdias[key] && !button.checked) {
                                    button.click();
                                }
                            } else if (key == 'domingo') {
                                var button = document.getElementById('c7');
                                if (!semanaDbdias[key] && button.checked) {
                                    button.click();
                                } else if (semanaDbdias[key] && !button.checked) {
                                    button.click();
                                }
                            }
                        }
                    }






                    var semanaDb;
                    for (let key in response) {
                        if (response[key]) {
                            if (response[key][selectValue.value]) {

                                semanaDb = response[key][selectValue.value];
                            }
                        }
                    } 2

                    var position5 = new Date().getDay();

                    if (semanaDb) {
                        for (let key in semanaDb) {
                            //key es persona

                            var tab = document.getElementById('tableMain');
                            var arr = [];
                            var n = tab.rows.length;
                            for (i = 1; i < n; i++) {
                                if (tab.rows[i].cells[0].innerHTML === key) {
                                    for (colu = 1; colu < 8; colu++) {
                                        if (colu === 1) {
                                            if (semanaDb[key].lunes.emoticono === 'icon1') {
                                                var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Smile"  width="50" height="50" title="' + semanaDb[key].lunes.descripcion + '"></img>';
                                            } else if (semanaDb[key].lunes.emoticono === 'icon2') {
                                                var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Sad" width="50" height="50" title="' + semanaDb[key].lunes.descripcion + '"></img>';
                                            } else if (semanaDb[key].lunes.emoticono === 'icon3') {
                                                var src = chrome.runtime.getURL("images/meh-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Meh"  width="50" height="50" title="' + semanaDb[key].lunes.descripcion + '"></img>';
                                            } else {
                                                tab.rows[i].cells[colu].innerHTML = ''
                                            }
                                            // if ((colu === position5) && (response3.login == key) && (semanaDb[key].lunes.emoticono != '-')) {
                                            //     tab.rows[i].cells[colu].innerHTML = tab.rows[i].cells[colu].innerHTML + "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                            // } else if ((colu === position5) && (response3.login == key) && (semanaDb[key].lunes.emoticono == '-')) {
                                            //     tab.rows[i].cells[colu].innerHTML = "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                            // }
                                        } else if (colu == 2) {
                                            if (semanaDb[key].martes.emoticono === 'icon1') {
                                                var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Smile"  width="50" height="50" title="' + semanaDb[key].martes.descripcion + '"></img>';
                                            } else if (semanaDb[key].martes.emoticono === 'icon2') {
                                                var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Sad" width="50" height="50" title="' + semanaDb[key].martes.descripcion + '"></img>';
                                            } else if (semanaDb[key].martes.emoticono === 'icon3') {
                                                var src = chrome.runtime.getURL("images/meh-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Meh"  width="50" height="50" title="' + semanaDb[key].martes.descripcion + '"></img>';
                                            } else {
                                                tab.rows[i].cells[colu].innerHTML = ''
                                            }
                                            // if ((colu === position5) && (response3.login == key) && (semanaDb[key].martes.emoticono != '-')) {
                                            //     tab.rows[i].cells[colu].innerHTML = tab.rows[i].cells[colu].innerHTML + "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                            // } else if ((colu === position5) && (response3.login == key) && (semanaDb[key].martes.emoticono == '-')) {
                                            //     tab.rows[i].cells[colu].innerHTML = "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                            // }
                                        } else if (colu == 3) {
                                            if (semanaDb[key].miercoles.emoticono === 'icon1') {
                                                var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Smile"  width="50" height="50" title="' + semanaDb[key].miercoles.descripcion + '"></img>';
                                            } else if (semanaDb[key].miercoles.emoticono === 'icon2') {
                                                var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Sad" width="50" height="50" title="' + semanaDb[key].miercoles.descripcion + '"></img>';
                                            } else if (semanaDb[key].miercoles.emoticono === 'icon3') {
                                                var src = chrome.runtime.getURL("images/meh-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Meh"  width="50" height="50" title="' + semanaDb[key].miercoles.descripcion + '"></img>';
                                            } else {
                                                tab.rows[i].cells[colu].innerHTML = ''
                                            }
                                            // if ((colu === position5) && (response3.login == key) && (semanaDb[key].miercoles.emoticono != '-')) {
                                            //     tab.rows[i].cells[colu].innerHTML = tab.rows[i].cells[colu].innerHTML + "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                            // } else if ((colu === position5) && (response3.login == key) && (semanaDb[key].miercoles.emoticono == '-')) {
                                            //     tab.rows[i].cells[colu].innerHTML = "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                            // }
                                        } else if (colu == 4) {
                                            if (semanaDb[key].jueves.emoticono === 'icon1') {
                                                var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Smile"  width="50" height="50" title="' + semanaDb[key].jueves.descripcion + '"></img>';
                                            } else if (semanaDb[key].jueves.emoticono === 'icon2') {
                                                var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Sad" width="50" height="50" title="' + semanaDb[key].jueves.descripcion + '"></img>';
                                            } else if (semanaDb[key].jueves.emoticono === 'icon3') {
                                                var src = chrome.runtime.getURL("images/meh-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Meh"  width="50" height="50" title="' + semanaDb[key].jueves.descripcion + '"></img>';
                                            } else {
                                                tab.rows[i].cells[colu].innerHTML = ''
                                            }
                                            // if ((colu === position5) && (response3.login == key) && (semanaDb[key].jueves.emoticono != '-')) {
                                            //     tab.rows[i].cells[colu].innerHTML = tab.rows[i].cells[colu].innerHTML + "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                            // } else if ((colu === position5) && (response3.login == key) && (semanaDb[key].jueves.emoticono == '-')) {
                                            //     tab.rows[i].cells[colu].innerHTML = "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                            // }
                                        } else if (colu == 5) {
                                            if (semanaDb[key].viernes.emoticono === 'icon1') {
                                                var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Smile"  width="50" height="50" title="' + semanaDb[key].viernes.descripcion + '"></img>';
                                            } else if (semanaDb[key].viernes.emoticono === 'icon2') {
                                                var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Sad" width="50" height="50" title="' + semanaDb[key].viernes.descripcion + '"></img>';
                                            } else if (semanaDb[key].viernes.emoticono === 'icon3') {
                                                var src = chrome.runtime.getURL("images/meh-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Meh"  width="50" height="50" title="' + semanaDb[key].viernes.descripcion + '"></img>';
                                            } else {
                                                tab.rows[i].cells[colu].innerHTML = ''
                                            }
                                            // if ((colu === position5) && (response3.login == key) && (semanaDb[key].viernes.emoticono != '-')) {
                                            //     tab.rows[i].cells[colu].innerHTML = tab.rows[i].cells[colu].innerHTML + "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                            // } else if ((colu === position5) && (response3.login == key) && (semanaDb[key].viernes.emoticono == '-')) {
                                            //     tab.rows[i].cells[colu].innerHTML = "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                            // }
                                        } else if (colu == 6) {
                                            if (semanaDb[key].sabado.emoticono === 'icon1') {
                                                var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Smile"  width="50" height="50" title="' + semanaDb[key].sabado.descripcion + '"></img>';
                                            } else if (semanaDb[key].sabado.emoticono === 'icon2') {
                                                var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Sad" width="50" height="50" title="' + semanaDb[key].sabado.descripcion + '"></img>';
                                            } else if (semanaDb[key].sabado.emoticono === 'icon3') {
                                                var src = chrome.runtime.getURL("images/meh-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Meh"  width="50" height="50" title="' + semanaDb[key].sabado.descripcion + '"></img>';
                                            } else {
                                                tab.rows[i].cells[colu].innerHTML = ''
                                            }
                                            // if ((colu === position5) && (response3.login == key) && (semanaDb[key].sabado.emoticono != '-')) {
                                            //     tab.rows[i].cells[colu].innerHTML = tab.rows[i].cells[colu].innerHTML + "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                            // } else if ((colu === position5) && (response3.login == key) && (semanaDb[key].sabado.emoticono == '-')) {
                                            //     tab.rows[i].cells[colu].innerHTML = "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                            // }
                                        } else if (colu == 7) {
                                            if (semanaDb[key].domingo.emoticono === 'icon1') {
                                                var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Smile"  width="50" height="50" title="' + semanaDb[key].domingo.descripcion + '"></img>';
                                            } else if (semanaDb[key].domingo.emoticono === 'icon2') {
                                                var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Sad" width="50" height="50" title="' + semanaDb[key].domingo.descripcion + '"></img>';
                                            } else if (semanaDb[key].domingo.emoticono === 'icon3') {
                                                var src = chrome.runtime.getURL("images/meh-regular.svg");
                                                tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Meh"  width="50" height="50" title="' + semanaDb[key].domingo.descripcion + '"></img>';
                                            } else {
                                                tab.rows[i].cells[colu].innerHTML = ''
                                            }

                                            // if ((0 === position5) && (response3.login == key) && (semanaDb[key].domingo.emoticono != '-')) {
                                            //     tab.rows[i].cells[colu].innerHTML = tab.rows[i].cells[colu].innerHTML + "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                            // } else if ((0 === position5) && (response3.login == key) && (semanaDb[key].domingo.emoticono == '-')) {
                                            //     tab.rows[i].cells[colu].innerHTML = "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                            // }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    // if (selectValue.value === semana2) {
                    //     var inputarboton = document.getElementById('myBtn');
                    //     inputarboton.style.visibility = 'visible';
                    // } else {
                    //     var inputarboton = document.getElementById('myBtn');
                    //     inputarboton.style.visibility = 'hidden';
                    // }

                    injectEventInButtonImputar();
                });
            });
        });
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
        var imputarValido = true;
        if (imputarValido) {
            let icon = document.getElementById("smile");
            icon.src = chrome.runtime.getURL("images/smile-beam-regular.svg");
            let icon2 = document.getElementById("sad");
            icon2.src = chrome.runtime.getURL("images/frown-open-regular.svg");
            let icon3 = document.getElementById("meh");
            icon3.src = chrome.runtime.getURL("images/meh-regular.svg");
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
        }
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
        var repoUser = window.location.pathname;
        chrome.runtime.sendMessage({ command: "getSemana", data: { domain: repoUser } }, (response5) => {
            var icon1 = document.getElementById("icon1");
            var icon2 = document.getElementById("icon2");
            var icon3 = document.getElementById("icon3");
            var user = document.getElementById("icon3");
            var icon;
            var textarea1 = document.getElementById("Textarea1");
            var fechaImpAux = document.getElementById("fecha1");
            var fechaImp = fechaImpAux.value;
            var diaSemana;

            if (icon1.checked) {
                icon = icon1.value;
            } else if (icon2.checked) {
                icon = icon2.value;
            } else {
                icon = icon3.value;
            }

            if (fechaImp === "") {
                var position = new Date().getDay();
            } else {
                var position = new Date(fechaImp).getDay();
            }

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
            chrome.runtime.sendMessage({ command: "getSprint", data: { domain: repoUser } }, (response) => {
                chrome.runtime.sendMessage({ command: "getUsuarioLogueado", data: { domain: '' } }, (response3) => {
                    if (fechaImp === "") {
                        var curr = new Date;
                    } else {
                        var curr = new Date(fechaImp);
                    }
                    var fecha = new Date(curr);
                    var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
                    var last = first + 6; // last day is the first day + 6

                    var firstday = new Date(fecha.setDate(first + 1));
                    var lastday = new Date(fecha.setDate(last + 1));

                    var mes = firstday.getMonth() + 1;

                    var semana1 = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + mes + "Y" + firstday.getFullYear();
                    var sprint1;
                    if (response) {
                        for (let key in response) {
                            if (response[key]) {
                                if (response[key][semana1]) {
                                    sprint1 = key;
                                }
                            }
                        }
                    }
                    var diaActivo = true;

                    for (let key in response5) {
                        if (key === semana1) {
                            if (!response5[key][diaSemana]) {
                                diaActivo = false;
                            }
                        }
                    }
                    if (!diaActivo) {
                        alert("No se puede imputar en el día seleccionado");
                    } else {
                        chrome.runtime.sendMessage({ command: "guardarImputacion", data: { domain: { usuario: response3.login, icon: icon, textarea: textarea1.value, fecha: fechaImp, diaSemana: diaSemana, domain: repoUser, sprint: sprint1 } } }, (response2) => {
                            alert("Datos guardados con exito");
                            var modal = document.getElementById("myModal");
                            modal.style.display = "none";

                            var semanaDb;
                            for (let key in response) {
                                if (response[key]) {
                                    if (response[key][semana1]) {

                                        semanaDb = response[key][semana1];
                                    }
                                }
                            }

                            var position5 = new Date().getDay();

                            var semanaSelect = document.getElementById('selectSemana');

                            if (fechaImp === "" || semana1 === semanaSelect.value || semanaSelect.value === "null") {

                                if (fechaImp === "") {
                                    var position = new Date().getDay();
                                } else {
                                    var position = new Date(fechaImp).getDay();
                                }

                                if (semanaDb) {
                                    for (let key in semanaDb) {
                                        //key es persona

                                        var tab = document.getElementById('tableMain');
                                        var arr = [];
                                        var n = tab.rows.length;
                                        for (i = 1; i < n; i++) {
                                            if ((response3.login == tab.rows[i].cells[0].innerHTML)) {
                                                for (colu = 1; colu < 8; colu++) {
                                                    if (position == 0) {
                                                        position = 7;
                                                    }
                                                    if (colu === position) {
                                                        if (icon === 'icon1') {
                                                            var src = chrome.runtime.getURL("images/smile-beam-regular.svg");
                                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Smile"  width="50" height="50" title="' + textarea1.value + '"></img>';
                                                        } else if (icon === 'icon2') {
                                                            var src = chrome.runtime.getURL("images/frown-open-regular.svg");
                                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Sad" width="50" height="50" title="' + textarea1.value + '"></img>';
                                                        } else if (icon === 'icon3') {
                                                            var src = chrome.runtime.getURL("images/meh-regular.svg");
                                                            tab.rows[i].cells[colu].innerHTML = '<img src="' + src + '" alt="Meh"  width="50" height="50" title="' + textarea1.value + '"></img>';
                                                        }
                                                        //  else {
                                                        //     tab.rows[i].cells[colu].innerHTML = "<button id='myBtn' class='btn btn-primary'>Imputar</button>";
                                                        // }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            // var inputarboton = document.getElementById('myBtn');
                            // inputarboton.style.visibility = 'visible';


                            injectEventInButtonImputar();
                        });
                    }
                });
            });
        });
    });
}

function injectEventInButtonSubmit() {
    var button = document.getElementById('submitForm');
    button.addEventListener('click', async () => {
        var sprints = document.getElementById("fsprint");
        var semanas = document.getElementById("fduracion");
        var domain = window.location.pathname;
        chrome.runtime.sendMessage({ command: "getSprint", data: { domain: domain } }, (response2) => {
            var curr = new Date;
            var fecha = new Date(curr);
            var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
            var last = first + 6; // last day is the first day + 6

            var firstday = new Date(fecha.setDate(first + 1));
            var lastday = new Date(fecha.setDate(last + 1));

            var mes = firstday.getMonth() + 1;

            var semana1 = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + mes + "Y" + firstday.getFullYear();
            var sprint1;
            var ultimoSprint;
            if (response2) {
                for (let key in response2) {
                    if (response2[key]) {
                        if (response2[key][semana1]) {
                            sprint1 = key;
                        }
                    }
                }
            }
            if (response2) {
                for (let key in response2) {
                    if (response2[key]) {

                        ultimoSprint = key;

                    }
                }
            }
            ++ultimoSprint;
            if (sprints.value <= sprint1) {
                alert("No se puede editar un Sprint del pasado o que se encuentre en curso");
            } else if (sprints.value > ultimoSprint) {
                alert("No se puede crear un Sprint fuera de la secuencia de Sprints");
            } else {
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

                        //               while (semanas.value != 0) {
                        //                   var opcionSemana = document.createElement('option')
                        //                   opcionSemana.value = semanas.value;
                        //                   opcionSemana.text = semanas.value;
                        //                   semana.append(opcionSemana);
                        //                   semanas.value--;
                        //               }

                        //               var valuetonull1 = document.getElementById("fsprint");
                        //               valuetonull1.value = "";
                        //              var valuetonull2 = document.getElementById("fduracion");
                        //              valuetonull2.value = "";

                    } else {
                        alert("Error al guardar los datos");
                    }
                });
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
    chrome.runtime.sendMessage({ command: "gitTestWithAut", data: { domain: domain } }, (response5) => {
        if(response5){
        chrome.runtime.sendMessage({ command: "gitTestWithAut", data: { domain: domain } }, (response) => {
            var div = document.getElementsByClassName("gutter-condensed gutter-lg flex-column flex-md-row d-flex");
            div[0].remove();
            var button = document.getElementById("NikoCalendarButton");
            button.setAttribute("style", "border-bottom-color: #f9826c; font-weight: 600;");
            fetch(chrome.runtime.getURL('layout.html')).then(r => r.text()).then(html => {
                var contenido = document.getElementById('repo-content-pjax-container');
                chrome.runtime.sendMessage({ command: "getUsuarioLogueado", data: { domain: domain } }, (response2) => {
                    chrome.runtime.sendMessage({ command: "getSprint", data: { domain: domain } }, (response3) => {
                        var curr = new Date; // get current date
                        var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
                        var last = first + 6; // last day is the first day + 6

                        var firstday = new Date(curr.setDate(first + 1));
                        var lastday = new Date(curr.setDate(last + 1));

                        var position = new Date().getDay();


                        response.forEach(element => {
                            if (element.login == response2.login) {
                                //<button id='myBtn' class='btn btn-primary'>Imputar</button>
                                if (position == 1) {
                                    var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
                                    html = html.replace('<tbody>', rowUsuario);
                                } else if (position == 2) {
                                    var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td> </td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
                                    html = html.replace('<tbody>', rowUsuario);
                                } else if (position == 3) {
                                    var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td> </td><td> </td><td></td><td></td><td></td><td></td><td></td></tr>";
                                    html = html.replace('<tbody>', rowUsuario);
                                } else if (position == 4) {
                                    var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td> </td><td> </td><td> </td><td></td><td></td><td></td><td></td></tr>";
                                    html = html.replace('<tbody>', rowUsuario);
                                } else if (position == 5) {
                                    var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td> </td><td> </td><td> </td><td> </td><td></td><td></td><td></td></tr>";
                                    html = html.replace('<tbody>', rowUsuario);
                                } else if (position == 6) {
                                    var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td> </td><td> </td><td> </td><td> </td><td> </td><td></td><td></td></tr>";
                                    html = html.replace('<tbody>', rowUsuario);
                                } else if (position == 0) {
                                    var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td></td></tr>";
                                    html = html.replace('<tbody>', rowUsuario);
                                }
                            } else {
                                var rowUsuario = "<tbody><tr><td>" + element.login + "</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
                                html = html.replace('<tbody>', rowUsuario);
                            }
                        });

                        var mes = firstday.getMonth() + 1;

                        var mes2 = lastday.getMonth() + 1;

                        var semana = "<p id='semana' class='semana'>Semana: " + firstday.getDate() + "/" + mes + "/" + firstday.getFullYear() + " a " + lastday.getDate() + "/" + mes2 + "/" + lastday.getFullYear() + "</p>";
                        html = html.replace('<p id="semana" class="semana"></p>', semana);

                        var curr = new Date;
                        var fecha = new Date(curr);
                        var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
                        var last = first + 6; // last day is the first day + 6

                        var firstday = new Date(fecha.setDate(first + 1));
                        var lastday = new Date(fecha.setDate(last + 1));

                        var mes = firstday.getMonth() + 1;

                        var semana1 = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + mes + "Y" + firstday.getFullYear();

                        var sprintOption = "<option value='null'>Sprint</option>";

                        var sprint1;
                        if (response3) {
                            for (let key in response3) {
                                if (response3[key]) {

                                    sprintOption = sprintOption + '<option value="' + key + '">' + key + '</option>';

                                    if (response3[key][semana1]) {
                                        sprint1 = key;
                                    }
                                }
                            }
                        }
                        var sprint = "<p id='sprint' class='sprint'>Sprint: " + sprint1 + "</p>"
                        html = html.replace('<p id="sprint" class="sprint"></p>', sprint);
                        html = html.replace('<option value="null">Sprint</option>', sprintOption);

                        contenido.insertAdjacentHTML('beforeend', html);

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
                        injectEventInSelectSprint();
                        injectEventInSelectSemana();
                        injectEventOnloadTable();
                        injectEventInButtonShowEstGlobal();
                    });
                });
            });
            var selectedButton = document.getElementsByClassName("UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item selected");
            selectedButton[0].setAttribute("style", "border-bottom-color: transparent; font-weight: 400;");
            return response;
        });
    } else {
        alert("Debe configurar su Key de GitHub");
    }
    });
}