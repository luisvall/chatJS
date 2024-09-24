//Importando la base de datos de contactos y mensajes
import {contacts, messages} from './users.js';


//Cargando contactos en el DOM desde una BBDD

const menu = document.getElementById('menu');
const back = document.getElementById('back');
const navBar = document.getElementById('navBar');

const chatHistory = document.getElementById('ChatHistory');
const chatWindow = document.getElementById('chatWindow');
const chatProfile = document.getElementById('chatProfile');
const btnAttach = document.getElementById('btnAttach');
const dropDown = document.getElementById('Dropdown');
const dropDownImg = document.getElementById('Dropdown-img');
const dropDownVid = document.getElementById('Dropdown-vid');
const dropDownDoc = document.getElementById('Dropdown-doc');
const btnShowContacts = document.getElementById('showContacts')

const ncontact = contacts.length;
let idActual = 0;


/*Código para ocultar y mostrar el menú al hacer clic en el menu hamburguesa*/
function showMenu (){
    menu.addEventListener('click', ()=>{
        navBar.classList.toggle('menu--isActive')
        
    })
}

function showContacts () {
    btnShowContacts.addEventListener('click', ()=>{
        chatHistory.classList.toggle('ChatHistory--isActive')
        btnShowContacts.innerText === 'Contactos' ? btnShowContacts.innerText = 'Ocultar' : btnShowContacts.innerText = 'Contactos'
    })
}

function backArrow (){
    back.addEventListener('click', ()=>{
        window.history.back();
    })
}




/*Codigo html para injectar en el dom con JS para cargar la lista de contactos o conversaciones recientes*/
function contactList () {
    let historyItems = []
    for (let i=0; i<ncontact; i++){
        historyItems[i] = `<article class="ChatHistory-item ${contacts[i].isSeen ? '': 'notSeen'}" id="${contacts[i].id}">
                <div class="ChatHistory-item-imgProfile">
                    <img src="${contacts[i].img}" alt="Imagen de perfil" class="GeneralProfile">
                </div>
                <div class="ChatHistory-item-content">
                    <p class="ChatHistory-item-content-name">${contacts[i].name}</p>
                    <div class="ChatHistory-item-content-message">
                        <span class="ChatHistory-item-content-message-icon--isNotSeen"><i class="fas fa-check"></i></span>
                        <span class="ChatHistory-item-content-message-txt--isNotSeen">${contacts[i].lastMessage}</span>
                    </div>
                </div>
                <div class="ChatHistory-item-time"><span id="spanDate">${contacts[i].lastMessageTime}</span></div>
            </article>`;
    }

    return(historyItems.join(''))
};




/*La idea del siguiente código es que si el mensaje es recibido pinte un chat y si no pinte el chat con estilos de mensaje enviado dependiendo del estado del mensaje en la bbdd*/
function mensajesDelChat(n){

    let txt = "escribiendo...";
    let time = "now";
    let received = false;
    const datos = messages.filter( item => (item.contactId === n) );
    let html = [];

    for (let i = 0; i < datos.length; i++){
        received = datos[i].received;
        time = datos[i].time
        txt = datos[i].txt
            if(received){
                html[i] =
                    `<div class="Message">
                            <div class="Message-recived">
                                <p class="Message-text">${txt}</p>
                                <span class="Message-status">${time}</span>
                            </div>
                        </div>`} else {
                html[i] =
                        `<div class="Message">
                            <div class="Message-send">
                                <p class="Message-text">${txt}</p>
                                <span class="Message-status">${time}<i class="fas fa-check-double"></i></span>
                            </div>
                         </div>`}

        }
    return html.join('')
    }


    

    function perfilDelChat (n){
        /*Acá debo traer la bbdd de cotactos y buscar en el array los objetos que tengan un idId igual al idActual*/
        const perfil = contacts.filter( item => (item.id == n) );
        const profileContent=`                
                    <img src="${perfil[0].img}" alt="Foto de perfil en el chat" class="ChatBody-profile-img GeneralProfile">
                    <p class="ChatBody-profile-chatName">${perfil[0].name}</p>
                    <button id="showContacts">Contactos</button>`;
        return profileContent
    }







/*Configuración para que se guarde el ID del ultimo elemento seleccionado con un click en la variable idActual*/

function setID() {

    /*El primer elemento debe estar selecionado por defecto al abrir el chat*/ 
    document.getElementById('0').classList.add('active');


    /*Luego se debe encontrar el ultimo contacto en el que se hizo clic cada vez que se selecione algun elemento de la lista*/
    chatHistory.childNodes.forEach((element)=>{
        element.addEventListener('click', (e)=>{

    /*Se deben eliminar todas las clases activas de los contactos*/
        for (let i=0; i<ncontact ;i++){
            chatHistory.childNodes[i].classList.remove('active');
        };

    /*Para dejar la clase "active" solo al ultimo elemento seleccionado*/
        element.classList.add('active');

    /*Finalmente se gusarda el ID del ultimo elemento selecionado en la variable "idActual"
    También al hacer clic en un contacto se ejecuta la función para imprimir el chat desde el objeto*/

        idActual = parseInt(element.id);
        chatWindow.innerHTML = mensajesDelChat(idActual)
        chatProfile.innerHTML = perfilDelChat(idActual)
        element.classList.remove('notSeen')
        })
    })
}



   /*JS para el funcionamiento del dropdown de archivos adjuntos*/

   function showDropdown (){
    btnAttach.addEventListener('click',()=>{
        dropDown.classList.toggle('Dropdown--isActive')
    })
}






function ejecutarFunciones () {
    
    showMenu()
    backArrow()
    showContacts()
    showDropdown();
    /*Acá se injecta el html de la lista de contactos desde js hacia el chat,todos los datos que provienen de la BBDD en users.js*/

    chatHistory.innerHTML = contactList();

    /*Acá se configura y guarda el chat activo*/
    setID()

    /*Acá se obtienen e imprimen los mensajes en el chat dependiendo del id activo en el momento*/
    chatWindow.innerHTML = mensajesDelChat(0)
    }
ejecutarFunciones()





