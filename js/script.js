$(document).ready(function () {
  $(".zoom").hover(
    function () {
      $(this).addClass("transition");
    },
    function () {
      $(this).removeClass("transition");
    }
  );
});

function openPDF() {
  document.getElementById("pdf-container").style.display = "block";
  document.getElementById("open-button").style.display = "none";
  document.getElementById("close-button").style.display = "inline-block";
}

function closePDF() {
  document.getElementById("pdf-container").style.display = "none";
  document.getElementById("open-button").style.display = "inline-block";
  document.getElementById("close-button").style.display = "none";
}

function calculateAge(fechaNacimiento) {
  let today = new Date();
  let birthday = new Date(fechaNacimiento);
  let age = today.getFullYear() - birthday.getFullYear();
  let mes = today.getMonth() - birthday.getMonth();
  if (mes < 0 || (mes === 0 && today.getDate() < birthday.getDate())) {
      age--;
  }
  return age;
}

// Obtener la edad y actualizar el elemento HTML
window.onload = function() {
  let birthday = new Date('1998-07-06'); // Tu fecha de nacimiento
  let age = calculateAge(birthday);
  document.getElementById('age').textContent = age;
};


