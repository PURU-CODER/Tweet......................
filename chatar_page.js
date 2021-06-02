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
     
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         like = message_data['like'];
         message = message_data['message'];
         name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
         like_button = "<button style='background-image: linear-gradient( 65.9deg,  rgba(85,228,224,1) 5.5%, rgba(75,68,224,0.74) 54.2%, rgba(64,198,238,1) 55.2%, rgba(177,36,224,1) 98.4% );' id="+firebase_message_id+" value="+like+" onclick='updateLikes(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-heart'>  Like : "+like+"</span></button><hr>";

         row = name_with_tag +message_with_tag+like_button+span_with_tag;
         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function updateLikes(message_id)
{
      console.log("clicked on like button - " + message_id); button_id = message_id; likes = document.getElementById(button_id).value; updated_likes = Number(likes) + 1; console.log(updated_likes); firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}

function main(){
      window.location = "chatar_room.html";
}