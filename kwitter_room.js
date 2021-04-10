
//ADD YOUR FIREBASE LINKS HERE
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
    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name+" !";
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addroom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() {
firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML="";
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
Room_names = childKey;

console.log("Room Names -" + Room_names);
row = "<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)'>#"+ room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
});});}
getData() ;

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

