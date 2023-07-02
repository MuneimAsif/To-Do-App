  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  import { getDatabase,ref,set,push,onValue,remove} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBMwPlWebR_X9G0R46slM1ZO2kKaMBJAD0",
    authDomain: "calculator-8be58.firebaseapp.com",
    databaseURL: "https://calculator-8be58-default-rtdb.firebaseio.com",
    projectId: "calculator-8be58",
    storageBucket: "calculator-8be58.appspot.com",
    messagingSenderId: "829600561653",
    appId: "1:829600561653:web:1a9c1ab895ea757f0188bc",
    measurementId: "G-J89QMWPC3Q"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app)
//  ============ TO DO APPLICATION ====================

var inp = document.getElementById('inp')
var ul = document.getElementById('ul')
            window.addTask = function () {
            var idref = push(ref(database,"Todos/")).key
            var obj = {
                input: inp.value,
                id : idref
            }
            var todoref = ref(database,`Todos/${idref}/`)
            set(todoref,obj)    
            inp.value = "";    
        }
function nowValue (){

    var todoref = ref(database,"Todos")
    onValue(todoref,function(pushDataGet){
        var arry = Object.values(pushDataGet.val())
        showData(arry);        
    })
}
nowValue()
function showData(arry){
    ul.innerHTML= ""
    for(var i = 0 ; i < arry.length;i++){
        ul.innerHTML += `
        <li class = "li">${arry[i].input}
        <button onclick="clearVal('${arry[i].id}')" class = "del">Delete</button>
        <button onclick="editVal('${arry[i].input}','${arry[i].id}')" class = "edit">Edit</button>
        </li>`       
    }
}
window.clearVal = function(del) {
    remove(ref(database,`Todos/${del}`))
    nowValue()
    
    
}
window.delAll = function (){
    remove(ref(database,"Todos"))
    ul.innerHTML = ""
}
window.editVal = function (input ,del) {   
    inp.value = input  
    remove(ref(database,`Todos/${del}`))
    nowValue()
}

