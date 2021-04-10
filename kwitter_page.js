//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCLMXwkfO_-acf5_vpwN6xBquxL4l-JXWw",
      authDomain: "kwitter-b7347.firebaseapp.com",
      databaseURL: "https://kwitter-b7347-default-rtdb.firebaseio.com",
      projectId: "kwitter-b7347",
      storageBucket: "kwitter-b7347.appspot.com",
      messagingSenderId: "110153460994",
      appId: "1:110153460994:web:0b20b86bd059e425bb261b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
         name: user_name,
       message: msg,
       like: 0
      });
      document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id)
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
});
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
