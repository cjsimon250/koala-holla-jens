console.log("js");

$(document).ready(function () {
  console.log("JQ");
  setupClickListeners();

  getKoalas();
}); // end doc ready

let koalas = [];

function setupClickListeners() {
  $("#addButton").on("click", postKoala);
}

function getKoalas() {
  console.log("in getKoalas");
  // ajax call to server to get koalas

  $.ajax({
    method: "GET",
    url: "/koalas",
  }).then((response) => {
    koalas = response;

    render();
  });
} // end getKoalas

function postKoala() {
  //console.log("in addKoala", newKoala);
  // ajax call to server to get koalas
  let koalaToSend = {
    name: $("#nameIn").val(),
    gender: $("#genderIn").val(),
    age: $("#ageIn").val(),
    readyForTransfer: $("#readyForTransferIn").val(),
    notes: $("#notesIn").val(),
  };

  console.log(koalaToSend);

  $.ajax({
    method: "POST",
    url: "/koalas",
    data: koalaToSend,
  }).then((response) => {
    $("#nameIn").val("");
    $("#genderIn").val(""),
      $("#ageIn").val(""),
      $("#readyForTransferIn").val(""),
      $("#notesIn").val("");

    getKoalas();
  });
}
