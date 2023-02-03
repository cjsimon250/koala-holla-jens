$(document).ready(function () {
  setupClickListeners();
  getKoalas();
});

function setupClickListeners() {
  $("#addButton").on("click", postKoala);

  $(".delete-btn").on("click", onDeleteKoala);
}

let koalas = [];

function isReadyForTransfer() {
  let id = $(this).parents("tr").data("id");

  $.ajax({
    url: `/koalas/${id}`,
    method: "PUT",
    data: { ready_to_transfer: true },
  })
    .then((response) => {
      render();
    })
    .catch((err) => {
      console.error("PUT failed", err);
    });
}

function getKoalas() {
  $.ajax({
    method: "GET",
    url: "/koalas",
  }).then((response) => {
    koalas = response;
    render();
  });
}

function postKoala() {
  let koalaToSend = {
    name: $("#nameIn").val(),
    gender: $("#genderIn").val(),
    age: $("#ageIn").val(),
    ready_to_transfer: $("#readyForTransferIn").val(),
    notes: $("#notesIn").val(),
  };

  $.ajax({
    method: "POST",
    url: "/koalas",
    data: koalaToSend,
  }).then((response) => {
    $("#nameIn").val("");
    $("#genderIn").val("");
    $("#ageIn").val("");
    $("#readyForTransferIn").val("");
    $("#notesIn").val("");
    getKoalas();
  });
}

//function to delete a book
function onDeleteKoala() {
  console.log("in onDeleteKoala");

  let id = $(this).parents("tr").data("id");

  $.ajax({
    method: "DELETE",
    url: `/koalas/${id}`, //generating url on click
  })
    .then(() => {
      getKoalas();
    })
    .catch((err) => {
      console.log("Error in onDeleteKoala", err);
    });
}

function render() {
  $("#viewKoalas").empty();
  for (let koala of koalas) {
    $("#viewKoalas").append(`
      <tr data-id='${koala.id}'>
        <td>${koala.name}</td>
        <td>${koala.gender}</td>
        <td>${koala.age}</td>
        <td>${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
      </tr>
    `);
  }
}
