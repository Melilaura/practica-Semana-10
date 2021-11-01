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

//agregar registro a la base
function getCandidatos(){
    const db= getDatabase();
    const dbRef = ref(db, 'candidatos');

    onValue(dbRef, (snapshot)=>{
        const data= snapshot.val();
        console.log(data);
        actualizarLista(data);
    });

}

//actualizar candidatos
function actualizarLista(info)
{
    let listaCandidatos = "";

    Object.keys(info).forEach((k, index)=>
    {
        listaCandidatos += "CANDIDATO "+info[k].CANDIDATO + " con ID " + info[k].ID + "\n";
    });

    alert(listaCandidatos);
}

//registrar voto
function registrarVotos(votos){
    //obtener base de datos
    const db= getDatabase();
    const dbRef = ref(db, 'votos/'+ votos.ID);
    set(dbRef, votos);
    
}

//agregar registro a la base
function getVotos()
{
    const db = getDatabase();
    const dbRef = ref(db, "votos");

   onValue(dbRef, (snapshot) => 
    {
        const data = snapshot.val();
        console.log(data);
       actualizarVotos (data);     
    });
}

//actualizar votos
function actualizarVotos(data) {

    let votos = "";

    Object.keys(data).forEach((k, index) => {

        votos += data[k].ID + " tiene  " + data[k].VOTOS + " votos  " + "\n";
        
    });
    
    alert(votos);
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

const registrarCandidato = (e, event) =>
{
    let candidato =
    {
        ID: id.value,
        CANDIDATO: nombreCandidato.value
    };

    registrarCandidatos(candidato);
 
}

/*const registrarVoto = (e, event) => {

    const votos = {

        ID: idCandidato.value,
        CANDIDATO: nombreCandidato.value

    }

    registrarVotos(votos);
}*/

const votarCandidato = (votos) =>
{   
    const voto = {

        ID: idCandidato.value,
        CANDIDATO: nombreCandidato.value,
        VOTOS: 0

    }

    registrarVotos(voto);

        Object.keys(votos).forEach((k, index)=>
        {
            votos.VOTOS++;

            alert("Se realizó su voto");
        });
}

registroButton.addEventListener("click", registrarCandidato);
//votarButton.addEventListener("click", registrarVoto);
votarButton.addEventListener("click", votarCandidato);


candidatoListButton.addEventListener("click", getCandidatos);
votoListButton.addEventListener("click", getVotos);
