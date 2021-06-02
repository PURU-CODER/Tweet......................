var firebaseConfig = {
  apiKey: "AIzaSyBZ02OSX86NWEbL6x5rHjPEDlvP5ZghUzQ",
  authDomain: "chatar-patar-14000.firebaseapp.com",
  databaseURL: "https://chatar-patar-14000-default-rtdb.firebaseio.com",
  projectId: "chatar-patar-14000",
  storageBucket: "chatar-patar-14000.appspot.com",
  messagingSenderId: "189014004564",
  appId: "1:189014004564:web:69882f13bcd54ef8b96ec1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME " + user_name + "!";

function addRoom(){
  user_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(user_name).update({
      purpose : "Hi am " + user_name
  });
  localStorage.setItem("room_name", room_name);
      window.location = "chatar_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 console.log("ROOM NAME : " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML += row;
 });});}
getData();

function redirectToRoomName(name) 
{
  console.log(name);
  localStorage.setItem("name", name);
  window.location = "chatar_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
