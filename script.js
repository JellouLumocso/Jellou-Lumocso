$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");
  });
});

window.addEventListener("scroll", function () {
  // Call AOS.refresh() to force AOS to reinitialize and reanimate elements
  AOS.refresh();
});

function redirectToLandscape() {
  window.location.href = "Landscape.html";
}

function redirectToPortraits() {
  window.location.href = "Portraits.html";
}

function redirectToEvents() {
  window.location.href = "Events.html";
}
