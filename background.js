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

  }
  );

  async function guardarImputacion(domain) {
    var repositorio = domain.domain.split("/");

    var diasSemana = domain.diaSemana;
    var icon = domain.icon;
    var texto = domain.textarea;
    var usuario = domain.usuario;

    var curr = new Date;
    var fecha = new Date(curr);
    var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstday = new Date(fecha.setDate(first + 1));
    var lastday = new Date(fecha.setDate(last + 1));

    var semana = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + firstday.getMonth() + "Y" + firstday.getFullYear();

    firebase.database().ref("sprint/" + repositorio[repositorio.length - 1] + "/" + 1 + "/" + semana + "/" + usuario + "/" + diasSemana).set(
      {
        emoticono: icon,
        descripcion: texto,
      }

    );


  }

  async function recuperarSprint(domain) {
    var respuesta;
    var repositorio = domain.split("/");
    var firebaseData = firebase.database().ref("sprint/" + repositorio[repositorio.length - 1]);
    var curr = new Date;
    var fecha = new Date(curr);
    var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstday = new Date(fecha.setDate(first + 1));
    var lastday = new Date(fecha.setDate(last + 1));

    var semana = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + firstday.getMonth() + "Y" + firstday.getFullYear();

    firebaseData.on('value', (snapshot) => {
      const data = snapshot.val();
      respuesta = data.filter(x => x[semana] != undefined);
      console.log(respuesta);
    });
  }

  async function peticionUsuario(url) {
    var respuesta;
    await fetch(url, {
      method: 'GET', // or 'PUT'
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token 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'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => respuesta = response);
    return respuesta;
  }

  async function peticionUsuariosYSave(url, domain) {
    var respuesta;
    var respuesta2;
    await fetch(url, {
      method: 'GET', // or 'PUT'
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token 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'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => respuesta = response);

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
  }

  async function guardarSprintYSemanas(url, datos) {

    var respuesta;
    await fetch(url, {
      method: 'GET', // or 'PUT'
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token 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'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => respuesta = response);

    respuesta.forEach(element => {

      var semanas = datos.semanas;
      var curr = new Date;
      var usuario = element.login;
      var repositorio = datos.dominio.split("/");
      while (semanas != 0) {
        var fecha = new Date(curr);
        var first = fecha.getDate() - fecha.getDay(); // First day is the day of the month - the day of the week
        var last = first + 6; // last day is the first day + 6

        var firstday = new Date(fecha.setDate(first + 1));
        var lastday = new Date(fecha.setDate(last + 1));

        var semana = "D" + firstday.getDate() + "-" + lastday.getDate() + "M" + firstday.getMonth() + "Y" + firstday.getFullYear();

        firebase.database().ref("semanas/" + repositorio[repositorio.length - 1] + "/" + semana).set(
          {
            lunes: true,
            martes: true,
            miercoles: true,
            jueves: true,
            viernes: true,
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
