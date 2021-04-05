// Control de errores
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
    if (msg.command == "save") {
      var domain = msg.data.domain;
      firebase.database().ref('test/' + domain.replace(/\./g,'')).set({
        operacion: "save",
        concepto: "prueba",
        objetoRecuperado: "Dominio de la pagina donde se ejecuto la funcion: " + domain
      })
      resp({ type: "result", status: "success", request: msg });
    }
  }
  )



} catch (e) {
  console.log(e);
}
