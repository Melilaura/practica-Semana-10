const firebaseConfig = {
    apiKey: "AIzaSyC6Kx2tpLpoF1Tj-YZhBRk9B-vzqEQfG2U",
    authDomain: "semana10clase.firebaseapp.com",
    databaseURL: "https://semana10clase-default-rtdb.firebaseio.com",
    projectId: "semana10clase",
    storageBucket: "semana10clase.appspot.com",
    messagingSenderId: "673190053111",
    appId: "1:673190053111:web:c22a285b63505c017ffff2"
  };

  export function getFirebaseConfig(){
      if(!firebaseConfig || !firebaseConfig.apiKey){
          throw new Error("firebase configuration error");
      }else {
          return firebaseConfig;
      }
  }