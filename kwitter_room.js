var firebaseConfig = {
      apiKey: "AIzaSyASzH9XLgzMxoRB2WKQDV_5Ys8Ol26Qx-U",
      authDomain: "kwitter-ebf9c.firebaseapp.com",
      databaseURL: "https://kwitter-ebf9c-default-rtdb.firebaseio.com",
      projectId: "kwitter-ebf9c",
      storageBucket: "kwitter-ebf9c.appspot.com",
      messagingSenderId: "106386078988",
      appId: "1:106386078988:web:9f5fad6fdf265643181d29",
      measurementId: "G-JRHS1GFH3F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}