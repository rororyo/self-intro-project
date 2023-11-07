
$(document).ready(function() {
  $("#navbar, #article").fadeIn(1000);
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
  $('tr').addClass('clickable-row');
  $("#navbar").fadeOut(0).fadeIn(1000);
  $("#jumbotron").slideUp(0).slideDown(1000);
  $("#searchbar").fadeOut(0).fadeIn(1000);
  $("#table").fadeOut(0).fadeIn(2000);
  $(".clickable-row").click(function() {
  window.location = $(this).data("href");
  });
  
});

  
