$(document).ready(function() {
   $('body').addClass('sq1-vdp-js');
  $('.testDrive a').removeClass('ddc-btn-xlarge ddc-btn-large');
  $($('.testDrive').detach()).insertAfter('.inventory-detail-incentives-listing').addClass('ddc-box-1');
  $($('.contact-info').detach()).insertAfter('.testDrive').addClass('ddc-box-1');
  $($('.tradein').detach()).insertAfter('.contact-info').addClass('ddc-box-1');
  $($('.testDrive a.dialog').detach()).insertBefore('.testDrive a.customWindowStickerButton');
  $('<h3 class="h3 ddc-heading-3" style="text-align:center;font-weight:bold;font-size:18px;margin-top: 25px;margin-bottom: 15px;">Vehicle Details</h3>').insertBefore('.inventory-detail-quick-specs ul.quick-specs');
});
