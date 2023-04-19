


  // JavaScript (utilisant jQuery)
$(document).ready(function() {
    // Écouteur d'événement sur l'image
    $('img#imgCaroussel').on('click', function() {
      // Vérifie si l'image est agrandie
      if ($(this).hasClass('agrandi')) {
        // Si oui, ramène l'image à sa taille normale
        $(this).animate({height: '300px', width: '500px', marginLeft: '35%'}, 300);
        $(this).removeClass('agrandi');
      } else {
        // Sinon, agrandit l'image
        $(this).animate({height: '600px', width: '1000px',  marginLeft: '20%'}, 300);
        $(this).addClass('agrandi');
      }
    });
  
    // Écouteur d'événement sur le document pour fermer l'image en cliquant à côté de l'image
    $(document).on('click', function(event) {
      if (!$(event.target).closest('img#imgCaroussel').length && $('img#imgCaroussel').hasClass('agrandi')) {
        $('img#imgCaroussel').animate({height: '300px', width: '500px' , marginLeft: '35%'}, 300);
        $('img#imgCaroussel').removeClass('agrandi');
      }
    });
  });
  

  function openModal(name) {
    if(name=='BTC'){
      var modal = document.getElementById("modalBTC");
      modal.style.display = "block";
    }
    else if(name =='SQL'){
      var modal = document.getElementById("modalSQL");
      modal.style.display = "block";
    }
}

function closeModal(name) {
    var modal = document.getElementById(name);
     modal.style.display = "none";
 }
