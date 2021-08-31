try {

  self.importScripts('firebase/firebase-app.js', 'firebase/firebase-database.js');


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCmtwXWT2Ot1PSDYssOqxZUaT-Cpk0GKh4",
    authDomain: "nikocalendar-14ee2.firebaseapp.com",
    projectId: "nikocalendar-14ee2",
    storageBucket: "nikocalendar-14ee2.appspot.com",
    messagingSenderId: "217161690206",
    appId: "1:217161690206:web:4bba17150d08a8f27018cf",
    measurementId: "G-ZLEN5YL2WP"
  };
  firebase.initializeApp(firebaseConfig);

  console.log(firebase);
  // Get a reference to the database service
  var database = firebase.database();

  chrome.runtime.onMessage.addListener((msg, sender, resp) => {
    //obtiene el id de un usuario 
    if (msg.command == "gitTest") {

      var url = 'https://api.github.com/users/migmogcam';
      var data = { username: 'example' };

      fetch(url, {
        method: 'GET', // or 'PUT'
        // body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response.id));

    }
    //Obtiene usuarios de un repo con autenticacion
    if (msg.command == "gitTestWithAut") {
      var domain = msg.data.domain;
      var url = 'https://api.github.com/repos' + domain + '/collaborators';
      var data = { username: 'example' };
      peticionUsuariosYSave(url, domain).then(resp);
      return true;
    }

    if (msg.command == "getUsuarioLogueado") {
      var url = 'https://api.github.com/user';
      peticionUsuario(url).then(resp);
      return true;
    }

    if (msg.command == "firebaseGuardarSprint") {
      var datos = msg.data.domain;
      var url = 'https://api.github.com/repos' + datos.dominio + '/collaborators';
      guardarSprintYSemanas(url, datos).then(resp);
      return true;
    }

    if (msg.command == "getSprint") {
      var datos = msg.data.domain;
      var url = 'https://api.github.com/repos' + datos.dominio + '/collaborators';
      recuperarSprint(datos).then(resp);
      return true;
    }

    if (msg.command == "guardarImputacion") {
      var datos = msg.data.domain;
      guardarImputacion(datos).then(resp);
      return true;
    }

    if (msg.command == "setDia") {
      var datos = msg.data.domain;
      cambiarValorDia(datos).then(resp);
      return true;
    }

    if (msg.command == "getSemana") {
      var datos = msg.data.domain;
      recuperarUltimaSemanaSprint(datos).then(resp);
      return true;
    }

    if (msg.command == "iconoMasUsadoSprint") {
      var datos = msg.data.domain;
      iconoMasUsadoSprint(datos).then(resp);
      return true;
    }

    if (msg.command == "iconoMasUsadoSprintUsuario") {
      var datos = msg.data.domain;
      iconoMasUsadoSprintUsuario(datos).then(resp);
      return true;
    }

    if (msg.command == "iconoMasUsadoPorDia") {
      var datos = msg.data.domain;
      iconoMasUsadoPorDia(datos).then(resp);
      return true;
    }

    if (msg.command == "iconoMasUsadoSemana") {
      var datos = msg.data.domain;
      iconoMasUsadoSemana(datos).then(resp);
      return true;
    }

    if (msg.command == "iconoMasUsadoSprintGlobal") {
      var datos = msg.data.domain;
      iconoMasUsadoSprintGlobal(datos).then(resp);
      return true;
    }

    if (msg.command == "iconoMasUsadoSprintUsuarioGlobal") {
      var datos = msg.data.domain;
      iconoMasUsadoSprintUsuarioGlobal(datos).then(resp);
      return true;
    }

    if (msg.command == "iconoMasUsadoPorDiaGlobal") {
      var datos = msg.data.domain;
      iconoMasUsadoPorDiaGlobal(datos).then(resp);
      return true;
    }

    if (msg.command == "iconoMasUsadoSemanaGlobal") {
      var datos = msg.data.domain;
      iconoMasUsadoSemanaGlobal(datos).then(resp);
      return true;
    }

    if (msg.command == "fueraDefechaPorSprint") {
      var datos = msg.data.domain;
      fueraDefechaPorSprint(datos).then(resp);
      return true;
    }

    if (msg.command == "fueraDefechaPorSprintGlobal") {
      var datos = msg.data.domain;
      fueraDefechaPorSprintGlobal(datos).then(resp);
      return true;
    }
  }
  );

  async function readLocalStorage() {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(['key'], function (result) {
        if (result.key) {
          resolve(result.key);
        } else {
          resolve('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');
        }
      });
    });
  };

  async function guardarImputacion(domain) {
    var repositorio = domain.domain.split("/");

    var diasSemana = domain.diaSemana;
    var icon = domain.icon;
    var texto = domain.textarea;
    var usuario = domain.usuario;
    var sprint = domain.sprint;
    var fechaImp = domain.fecha;
    var fueraTiempo = "-";

    if (fechaImp === "") {
      var curr = new Date;
    } else {
      var curr = new Date(fechaImp);
      fueraTiempo = "si";
    }
    var fecha = new Date(curr);
    var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstday = new Date(fecha.setDate(first + 1));
    var lastday = new Date(fecha.setDate(last + 1));

    var mes = firstday.getMonth() + 1;

    var semana = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + mes + "Y" + firstday.getFullYear();

    firebase.database().ref("sprint/" + repositorio[repositorio.length - 1] + "/" + sprint + "/" + semana + "/" + usuario + "/" + diasSemana).set(
      {
        emoticono: icon,
        descripcion: texto,
        timeout: fueraTiempo,
      }

    );


  }

  async function cambiarValorDia(domain) {
    var repositorio = domain.domain.split("/");
    var position = domain.dia;
    var valor = domain.valor;
    var semana1 = domain.semana;

    if (semana1) {
      var semana = semana1;
    } else {
      var curr = new Date;
      var fecha = new Date(curr);
      var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
      var last = first + 6; // last day is the first day + 6

      var firstday = new Date(fecha.setDate(first + 1));
      var lastday = new Date(fecha.setDate(last + 1));

      var mes = firstday.getMonth() + 1;

      var semana = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + mes + "Y" + firstday.getFullYear();
    }

    if (position == 1) {
      firebase.database().ref("semanas/" + repositorio[repositorio.length - 1] + "/" + semana).update({
        lunes: valor
      }
      );
    } else if (position == 2) {
      firebase.database().ref("semanas/" + repositorio[repositorio.length - 1] + "/" + semana).update({
        martes: valor
      }
      );
    } else if (position == 3) {
      firebase.database().ref("semanas/" + repositorio[repositorio.length - 1] + "/" + semana).update({
        miercoles: valor
      }
      );
    } else if (position == 4) {
      firebase.database().ref("semanas/" + repositorio[repositorio.length - 1] + "/" + semana).update({
        jueves: valor
      }
      );
    } else if (position == 5) {
      firebase.database().ref("semanas/" + repositorio[repositorio.length - 1] + "/" + semana).update({
        viernes: valor
      }
      );
    } else if (position == 6) {
      firebase.database().ref("semanas/" + repositorio[repositorio.length - 1] + "/" + semana).update({
        sabado: valor
      }
      );
    } else if (position == 7) {
      firebase.database().ref("semanas/" + repositorio[repositorio.length - 1] + "/" + semana).update({
        domingo: valor
      }
      );
    }

  }

  async function iconoMasUsadoSprint(domain) {
    var numeroSprint = domain.sprint;
    var sprints = await recuperarSprint(domain.domain);
    var sprint;
    var icon1 = 0;
    var icon2 = 0;
    var icon3 = 0;
    var sinIcon = 0;

    for (let key in sprints) {
      if (key == numeroSprint) {
        sprint = sprints[key];
      }
    }

    for (let key2 in sprint) {
      semana = sprint[key2];

      for (let key3 in semana) {
        usuario = semana[key3];

        for (let key4 in usuario) {
          dias = usuario[key4];

          if (dias.emoticono === "icon1") {
            ++icon1;
          } else if (dias.emoticono === "icon2") {
            ++icon2;
          } else if (dias.emoticono === "icon3") {
            ++icon3;
          } else {
            ++sinIcon;
          }

        }

      }
    }

    return [icon1, icon2, icon3, sinIcon];
  }

  async function iconoMasUsadoSprintGlobal(domain) {
    var sprints = await recuperarSprint(domain.domain);
    var icon1 = 0;
    var icon2 = 0;
    var icon3 = 0;
    var sinIcon = 0;

    var curr = new Date;
    var fecha = new Date(curr);
    var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstday = new Date(fecha.setDate(first + 1));
    var lastday = new Date(fecha.setDate(last + 1));

    var mes = firstday.getMonth() + 1;

    var semana1 = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + mes + "Y" + firstday.getFullYear();
    var sprint1;
    if (sprints) {
      for (let key in sprints) {
        if (sprints[key]) {
          if (sprints[key][semana1]) {
            sprint1 = key;
          }
        }
      }
    }

    var noUltimoSprint = 0;
    for (let key in sprints) {
      sprint = sprints[key]
      ++noUltimoSprint;

      if (sprint1 == noUltimoSprint) {
        break;
      }

      for (let key2 in sprint) {
        semana = sprint[key2];

        for (let key3 in semana) {
          usuario = semana[key3];

          for (let key4 in usuario) {
            dias = usuario[key4];

            if (dias.emoticono === "icon1") {
              ++icon1;
            } else if (dias.emoticono === "icon2") {
              ++icon2;
            } else if (dias.emoticono === "icon3") {
              ++icon3;
            } else {
              ++sinIcon;
            }

          }

        }
      }
    }
    // 
    return [icon1, icon2, icon3, sinIcon];
  }

  async function fueraDefechaPorSprint(domain) {
    var numeroSprint = domain.sprint;
    var sprints = await recuperarSprint(domain.domain);
    var sprint;
    var contador = 0;
    var diasTotales = 0;

    for (let key in sprints) {
      if (key == numeroSprint) {
        sprint = sprints[key];
      }
    }

    for (let key2 in sprint) {
      semana = sprint[key2];

      for (let key3 in semana) {
        usuario = semana[key3];

        for (let key4 in usuario) {
          dias = usuario[key4];

          if (dias.timeout === "si") {
            ++contador;
          }
          ++diasTotales;

        }

      }
    }

    return [contador, diasTotales];
  }

  async function fueraDefechaPorSprintGlobal(domain) {
    var sprints = await recuperarSprint(domain.domain);
    var contador = 0;
    var diasTotales = 0;

    var curr = new Date;
    var fecha = new Date(curr);
    var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstday = new Date(fecha.setDate(first + 1));
    var lastday = new Date(fecha.setDate(last + 1));

    var mes = firstday.getMonth() + 1;

    var semana1 = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + mes + "Y" + firstday.getFullYear();
    var sprint1;
    if (sprints) {
      for (let key in sprints) {
        if (sprints[key]) {
          if (sprints[key][semana1]) {
            sprint1 = key;
          }
        }
      }
    }

    var noUltimoSprint = 0;
    for (let key in sprints) {
      sprint = sprints[key]
      ++noUltimoSprint;

      if (sprint1 == noUltimoSprint) {
        break;
      }

      for (let key2 in sprint) {
        semana = sprint[key2];

        for (let key3 in semana) {
          usuario = semana[key3];

          for (let key4 in usuario) {
            dias = usuario[key4];

            if (dias.timeout === "si") {
              ++contador;
            }
            ++diasTotales;

          }

        }
      }
    }
    // 
    return [contador, diasTotales];
  }

  async function iconoMasUsadoSemana(domain) {
    var numeroSprint = domain.sprint;
    var sprints = await recuperarSprint(domain.domain);
    var sprint;
    let m = new Map();

    for (let key in sprints) {
      if (key == numeroSprint) {
        sprint = sprints[key];
      }
    }

    for (let key2 in sprint) {
      semana = sprint[key2];
      var icon1 = 0;
      var icon2 = 0;
      var icon3 = 0;
      var sinIcon = 0;
      for (let key3 in semana) {
        usuario = semana[key3];
        for (let key4 in usuario) {
          dias = usuario[key4];

          if (dias.emoticono === "icon1") {
            ++icon1;
          } else if (dias.emoticono === "icon2") {
            ++icon2;
          } else if (dias.emoticono === "icon3") {
            ++icon3;
          } else {
            ++sinIcon;
          }

        }
      }
      if (m.has(key2)) {
        var arrAux = m.get(key2);
        arrAux[0] = arrAux[0] + icon1;
        arrAux[1] = arrAux[1] + icon2;
        arrAux[2] = arrAux[2] + icon3;
        arrAux[3] = arrAux[3] + sinIcon;
        m.set(key2, arrAux);
      } else {
        m.set(key2, [icon1, icon2, icon3, sinIcon]);
      }
    }

    return [...m];
  }

  async function iconoMasUsadoSemanaGlobal(domain) {
    var sprints = await recuperarSprint(domain.domain);
    let m = new Map();
    var curr = new Date;
    var fecha = new Date(curr);
    var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstday = new Date(fecha.setDate(first + 1));
    var lastday = new Date(fecha.setDate(last + 1));

    var mes = firstday.getMonth() + 1;

    var semana1 = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + mes + "Y" + firstday.getFullYear();
    var sprint1;
    if (sprints) {
      for (let key in sprints) {
        if (sprints[key]) {
          if (sprints[key][semana1]) {
            sprint1 = key;
          }
        }
      }
    }

    var noUltimoSprint = 0;
    for (let key in sprints) {
      sprint = sprints[key]
      ++noUltimoSprint;

      if (sprint1 == noUltimoSprint) {
        break;
      }


      for (let key2 in sprint) {
        semana = sprint[key2];
        var icon1 = 0;
        var icon2 = 0;
        var icon3 = 0;
        var sinIcon = 0;
        for (let key3 in semana) {
          usuario = semana[key3];
          for (let key4 in usuario) {
            dias = usuario[key4];

            if (dias.emoticono === "icon1") {
              ++icon1;
            } else if (dias.emoticono === "icon2") {
              ++icon2;
            } else if (dias.emoticono === "icon3") {
              ++icon3;
            } else {
              ++sinIcon;
            }

          }
        }
        if (m.has(key2)) {
          var arrAux = m.get(key2);
          arrAux[0] = arrAux[0] + icon1;
          arrAux[1] = arrAux[1] + icon2;
          arrAux[2] = arrAux[2] + icon3;
          arrAux[3] = arrAux[3] + sinIcon;
          m.set(key2, arrAux);
        } else {
          m.set(key2, [icon1, icon2, icon3, sinIcon]);
        }
      }
    }

    return [...m];
  }

  async function iconoMasUsadoSprintUsuario(domain) {
    var numeroSprint = domain.sprint;
    var sprints = await recuperarSprint(domain.domain);
    var sprint;
    var arr = [];
    let m = new Map();

    for (let key in sprints) {
      if (key == numeroSprint) {
        sprint = sprints[key];
      }
    }

    for (let key2 in sprint) {
      semana = sprint[key2];
      for (let key3 in semana) {
        usuario = semana[key3];
        var icon1 = 0;
        var icon2 = 0;
        var icon3 = 0;
        var sinIcon = 0;
        for (let key4 in usuario) {
          dias = usuario[key4];

          if (dias.emoticono === "icon1") {
            ++icon1;
          } else if (dias.emoticono === "icon2") {
            ++icon2;
          } else if (dias.emoticono === "icon3") {
            ++icon3;
          } else {
            ++sinIcon;
          }

        }
        if (m.has(key3)) {
          var arrAux = m.get(key3);
          arrAux[0] = arrAux[0] + icon1;
          arrAux[1] = arrAux[1] + icon2;
          arrAux[2] = arrAux[2] + icon3;
          arrAux[3] = arrAux[3] + sinIcon;
          m.set(key3, arrAux);
        } else {
          m.set(key3, [icon1, icon2, icon3, sinIcon]);
        }
      }
    }

    return [...m];
  }

  async function iconoMasUsadoSprintUsuarioGlobal(domain) {
    var sprints = await recuperarSprint(domain.domain);
    let m = new Map();
    var curr = new Date;
    var fecha = new Date(curr);
    var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstday = new Date(fecha.setDate(first + 1));
    var lastday = new Date(fecha.setDate(last + 1));

    var mes = firstday.getMonth() + 1;

    var semana1 = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + mes + "Y" + firstday.getFullYear();
    var sprint1;
    if (sprints) {
      for (let key in sprints) {
        if (sprints[key]) {
          if (sprints[key][semana1]) {
            sprint1 = key;
          }
        }
      }
    }

    var noUltimoSprint = 0;
    for (let key in sprints) {
      sprint = sprints[key]
      ++noUltimoSprint;

      if (sprint1 == noUltimoSprint) {
        break;
      }



      for (let key2 in sprint) {
        semana = sprint[key2];
        for (let key3 in semana) {
          usuario = semana[key3];
          var icon1 = 0;
          var icon2 = 0;
          var icon3 = 0;
          var sinIcon = 0;
          for (let key4 in usuario) {
            dias = usuario[key4];

            if (dias.emoticono === "icon1") {
              ++icon1;
            } else if (dias.emoticono === "icon2") {
              ++icon2;
            } else if (dias.emoticono === "icon3") {
              ++icon3;
            } else {
              ++sinIcon;
            }

          }
          if (m.has(key3)) {
            var arrAux = m.get(key3);
            arrAux[0] = arrAux[0] + icon1;
            arrAux[1] = arrAux[1] + icon2;
            arrAux[2] = arrAux[2] + icon3;
            arrAux[3] = arrAux[3] + sinIcon;
            m.set(key3, arrAux);
          } else {
            m.set(key3, [icon1, icon2, icon3, sinIcon]);
          }
        }
      }
    }

    return [...m];
  }

  async function iconoMasUsadoPorDia(domain) {
    var numeroSprint = domain.sprint;
    var sprints = await recuperarSprint(domain.domain);
    var sprint;
    let m = new Map();

    for (let key in sprints) {
      if (key == numeroSprint) {
        sprint = sprints[key];
      }
    }

    for (let key2 in sprint) {
      semana = sprint[key2];
      for (let key3 in semana) {
        usuario = semana[key3];

        for (let key4 in usuario) {
          dias = usuario[key4];
          var icon1 = 0;
          var icon2 = 0;
          var icon3 = 0;
          var sinIcon = 0;
          if (dias.emoticono === "icon1") {
            ++icon1;
          } else if (dias.emoticono === "icon2") {
            ++icon2;
          } else if (dias.emoticono === "icon3") {
            ++icon3;
          } else {
            ++sinIcon;
          }
          if (m.has(key4)) {
            var arrAux = m.get(key4);
            arrAux[0] = arrAux[0] + icon1;
            arrAux[1] = arrAux[1] + icon2;
            arrAux[2] = arrAux[2] + icon3;
            arrAux[3] = arrAux[3] + sinIcon;
            m.set(key4, arrAux);
          } else {
            m.set(key4, [icon1, icon2, icon3, sinIcon]);
          }
        }
      }
    }

    return [...m];
  }

  async function iconoMasUsadoPorDiaGlobal(domain) {
    var sprints = await recuperarSprint(domain.domain);
    let m = new Map();
    var curr = new Date;
    var fecha = new Date(curr);
    var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstday = new Date(fecha.setDate(first + 1));
    var lastday = new Date(fecha.setDate(last + 1));

    var mes = firstday.getMonth() + 1;

    var semana1 = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + mes + "Y" + firstday.getFullYear();
    var sprint1;
    if (sprints) {
      for (let key in sprints) {
        if (sprints[key]) {
          if (sprints[key][semana1]) {
            sprint1 = key;
          }
        }
      }
    }
    var noUltimoSprint = 0;
    for (let key in sprints) {
      sprint = sprints[key]
      ++noUltimoSprint;

      if (sprint1 == noUltimoSprint) {
        break;
      }



      for (let key2 in sprint) {
        semana = sprint[key2];
        for (let key3 in semana) {
          usuario = semana[key3];

          for (let key4 in usuario) {
            dias = usuario[key4];
            var icon1 = 0;
            var icon2 = 0;
            var icon3 = 0;
            var sinIcon = 0;
            if (dias.emoticono === "icon1") {
              ++icon1;
            } else if (dias.emoticono === "icon2") {
              ++icon2;
            } else if (dias.emoticono === "icon3") {
              ++icon3;
            } else {
              ++sinIcon;
            }
            if (m.has(key4)) {
              var arrAux = m.get(key4);
              arrAux[0] = arrAux[0] + icon1;
              arrAux[1] = arrAux[1] + icon2;
              arrAux[2] = arrAux[2] + icon3;
              arrAux[3] = arrAux[3] + sinIcon;
              m.set(key4, arrAux);
            } else {
              m.set(key4, [icon1, icon2, icon3, sinIcon]);
            }
          }
        }
      }
    }
    return [...m];
  }

  async function recuperarSprint(domain) {
    var repositorio = domain.split("/");
    var firebaseData = firebase.database().ref("sprint/" + repositorio[repositorio.length - 1]);
    const snap = await firebaseData.once('value');
    return snap.val();
  }

  async function recuperarUltimaSemanaSprint2(domain) {
    var repositorio = domain.split("/");
    var firebaseData = firebase.database().ref("semanas/" + repositorio[repositorio.length - 1]).orderByKey().limitToLast(1);

    const snap = await firebaseData.once('value');
    return snap.val();
  }

  async function recuperarUltimaSemanaSprint(domain) {
    var repositorio = domain.split("/");
    var firebaseData = firebase.database().ref("semanas/" + repositorio[repositorio.length - 1]);

    const snap = await firebaseData.once('value');
    return snap.val();
  }

  async function peticionUsuario(url) {
    var respuesta;
    var token = await readLocalStorage();
    await fetch(url, {
      method: 'GET', // or 'PUT'
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token ' + token
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => respuesta = response);
    return respuesta;

  }

  async function peticionUsuariosYSave(url, domain) {
    var token = await readLocalStorage();
    var respuesta;
    var respuesta2;
    await fetch(url, {
      method: 'GET', // or 'PUT'
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token ' + token
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => respuesta = response);
    if (respuesta.message !== "Must have push access to view repository collaborators.") {
      respuesta.forEach(element => {
        var usuario = element.login;
        var repositorio = domain.split("/");
        firebase.database().ref("repositorios/" + repositorio[repositorio.length - 1] + "/" + usuario).set({
          activo: true
        }
        );
        firebase.database().ref("usuarios/" + usuario).set(
          {
            idGit: element.id
          }
        );
      });
      return respuesta;
    } else {
      return false;
    }
  }

  async function guardarSprintYSemanas(url, datos) {
    var token = await readLocalStorage();
    var respuesta;
    await fetch(url, {
      method: 'GET', // or 'PUT'
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token ' + token
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => respuesta = response);

    var ultimaSemana = await recuperarUltimaSemanaSprint(datos.dominio);
    var respuesta2;
    var dateresponse2;

    for (let key in ultimaSemana) {
      var extractoSeamana = key;
      var semanaSplit = extractoSeamana.split('-');
      var valorNumerioSeamana = semanaSplit[1].match(/\d+/g);
      var valorNumericoDia = semanaSplit[0].match(/\d+/g);

      var mesSplit = +valorNumerioSeamana[1] - 1;
      var diaSplit = +valorNumericoDia[0] + 7;

      var auxDate = new Date(valorNumerioSeamana[2], mesSplit, diaSplit);

      if (dateresponse2) {
        if (auxDate > dateresponse2) {
          dateresponse2 = auxDate;
          respuesta2 = key;
        }
      } else {
        dateresponse2 = auxDate;
        respuesta2 = key;
      }
    }

    respuesta.forEach(element => {

      var semanas = datos.semanas;
      if (respuesta2) {
        var semanaSplit = respuesta2.split('-');
        var valorNumerioSeamana = semanaSplit[1].match(/\d+/g);
        var valorNumericoDia = semanaSplit[0].match(/\d+/g);

        var mesSplit = +valorNumerioSeamana[1] - 1;
        var diaSplit = +valorNumericoDia[0] + 7;

        var curr = new Date(valorNumerioSeamana[2], mesSplit, diaSplit);
      } else {
        var curr = new Date();
      }
      var usuario = element.login;
      var repositorio = datos.dominio.split("/");
      while (semanas != 0) {
        var fecha = new Date(curr);
        var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
        var last = first + 6; // last day is the first day + 6

        var firstday = new Date(fecha.setDate(first + 1));
        var lastday = new Date(fecha.setDate(last + 1));

        var mes = firstday.getMonth() + 1;

        var semana = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + mes + "Y" + firstday.getFullYear();

        firebase.database().ref("semanas/" + repositorio[repositorio.length - 1] + "/" + semana).set(
          {
            lunes: true,
            martes: true,
            miercoles: true,
            jueves: true,
            viernes: true,
            sabado: true,
            domingo: true
          }
        );


        //Como calcular el sprint¿
        var sprint = datos.sprints;

        var diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

        diasSemana.forEach(
          elemento => {
            firebase.database().ref("sprint/" + repositorio[repositorio.length - 1] + "/" + sprint + "/" + semana + "/" + usuario + "/" + elemento).set(
              {
                emoticono: '-',
                descripcion: '-',
                timeout: '-',
              }
            );
          }
        );

        semanas--;
        curr.setDate(curr.getDate() + 7)
      }
    });
    if (respuesta) {
      return true;
    } else {
      return false;
    }
  }

} catch (e) {
  console.log(e);
}
