$('.header-default .social-header-buttons').remove();

//Removes social icons from header and replaces it with Award image
$('.header-default .social-header-buttons').remove();
$('<img src="https://pictures.dealer.com/b/beavertonhyundai/0482/9fb6185385689293e75afa14d09b6feex.jpg" alt="Award Image">').appendTo('.header-default .vcard');


//This version is used on the site
$('<div class="header-award"><img src="https://pictures.dealer.com/b/beavertonhyundai/0482/9fb6185385689293e75afa14d09b6feex.jpg" alt="Award Image"><p>Dealer Raters 2017 Hyundai<br>Dealer of the Year</p></div>').appendTo('.header-default .vcard');
