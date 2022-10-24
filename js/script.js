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
