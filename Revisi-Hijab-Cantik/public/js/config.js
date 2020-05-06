var config = {
    apiKey: "AIzaSyCyTpszvqZBX5Ze94M82C3l3-1kKfgfXeE",
    authDomain: "x-webgram.firebaseapp.com",
    databaseURL: "https://x-webgram.firebaseio.com",
    projectId: "x-webgram",
    storageBucket: "x-webgram.appspot.com",
    messagingSenderId: "812455141893",
    appId: "1:812455141893:web:3d276cbf1e70be48d4b26c",
    measurementId: "G-RY0RQ85CFY"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

var db = "1LtTF8jFsaq-Wetg_6pyTR0l0hxc9dn4XFGPvIOQw1JM";

var mysheet = "https://docs.google.com/spreadsheets/d/"+ db + "/edit#gid=0";
var product = Handlebars.compile($('#grid-template').html());
$('#uk-database').sheetrock({
    url : mysheet,
    query : "select A,B,C,D,E,F,G,H,I",
    rowTemplate: product
});

var dbRoot = firebase.database();
var dbRef = dbRoot.ref("/users");

$("#saveDeskripsi").click( get =>{

var deskripsi = $("#deskripsiID").val();
dbRef.child("/deskripsi").set({ "text" : deskripsi });

});

$(document).ready(function(){
dbRef.child("/deskripsi").on("value", snap=>{
	// console.log(snap.val());
	var text = snap.val();
	// console.log(text.text);
	var descValue = text.text;

	 $(".descID").html(descValue);
	});
});



