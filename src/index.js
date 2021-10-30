import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue} from 'firebase/database';

import { getFirebaseConfig } from './firebase-config'

//alert("hello hello");

//inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp= initializeApp(firebaseAppConfig);

//registrar candidato
function registrarCandidatos(candidato){
    //obtener base de datos
    const db= getDatabase();
    const dbRef = ref(db, 'candidatos/'+ candidato.ID);
    set(dbRef, candidato);
    //escribir un nuevo usuario
}

/*function getUsuarios(){
    const db= getDatabase();
    const dbRef = ref(db, 'users');
    onValue(dbRef, (snapshot)=>{
        const data= snapshot.val();
        console.log(data);
        actualizarLista(data);
    });
}*/

function registrarVotos(votos){
    //obtener base de datos
    const db= getDatabase();
    const dbRef = ref(db, 'users');
    set(dbRef, votos);
    
}

/*function actualizarLista(info){
let texto= "";
Object.keys(info).forEach((k,index)=>{
    console.log(k, index);
    texto+=k+"</br>";
    //texto+=info[k].nombre+"</br>";
    //texto+=info[k].pass+"</br>";
});
userList.innerHTML=texto;
}*/

function getCandidatos(){
    const db= getDatabase();
    const dbRef = ref(db, 'candidatos');
    onValue(dbRef, (snapshot)=>{
        const data= snapshot.val();
        console.log(data);
        actualizarLista(data);
    });

}

function getVotos()
{
    const db = getDatabase();
    const dbRef = ref(db, "votos");

    onValue(dbRef, (snapshot) => 
    {
        const data = snapshot.val();
        console.log(data);
        actualizarVotos(data);        
    });
}

function actualizarVotos(info) 
{
    let text = "";

    Object.keys(info).forEach((k, index) =>
    {
        text += info[k].VOTOS
        S + ", " + info[k].CANDIDATO + "\n";
    });
    
    alert(text);
}

function actualizarLista(info)
{
    let text = "";

    Object.keys(info).forEach((k, index)=>
    {
        text += info[k].CANDIDATO + ", id: " + info[k].ID + "\n";
    });

    alert(text);
}

//formulario de registro
const id = document.getElementById("IDtext");
const nombreCandidato = document.getElementById("candidatoText");
const registroButton = document.getElementById("registroButton");

//formulario de votacion
const idCandidato = document.getElementById("candidatoId");
const votarButton = document.getElementById("votarButton");

//botones de ver información
const candidatoListButton= document.getElementById("candidatosList");
const votoListButton = document.getElementById("votarList");



//console.log(username);

const guardar = (e, event) =>
{
 
    let votos = 0;

    let candidato =
    {
        ID: id.value,
        CANDIDATO: nombreCandidato.value
    };

    let voto =
    {
        VOTOS: votos,
        CANDIDATO: nombreCandidato.value
    }

    registrarCandidatos(candidato);
    registrarVotos(voto);
}

const Votar = (voto) =>
{   
        Object.keys(voto).forEach((k, index)=>
        {
            voto.VOTES++;

            alert("Realizó su voto");
        });
}

registroButton.addEventListener("click", guardar);
votarButton.addEventListener("click", Votar);

candidatoListButton.addEventListener("click", getCandidatos);
votoListButton.addEventListener("click", getVotos);

/*const registroEvento=()=>{
    const user ={
        nombre: username.value,
        pass: password.value
    }
   // const jsonObject= JSON.stringify(user);
    //console.log(jsonObject);
    registrarUsuario(user);
}

registreBtn.addEventListener("click", registroEvento);
getUsuarios();*/