$(document).ready(function () {
  $("#next-page-button").click(function () {
    // Calculate the next organism's offset from the top of the page
    var nextOrganism = $(".organism").eq(1); // Change index (1) to the appropriate one
    var nextOrganismOffset = nextOrganism.offset().top;

    // Scroll to the next organism with a smooth animation
    $("html, body").animate(
      {
        scrollTop: nextOrganismOffset,
      },
      1000
    ); // You can adjust the animation duration (1000 milliseconds) as needed
  });
});
