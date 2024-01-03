// const productColumn = document.querySelector('.product-column');

// productColumn.addEventListener('mouseenter', () => {
//     productColumn.classList.add('hovered');
// });

// productColumn.addEventListener('mouseleave', () => {
//     productColumn.classList.remove('hovered');
// });




//  document.addEventListener('DOMContentLoaded', function() {
//     // Your JavaScript code here
    
// });
$(document).ready(function() {
    // Set the target date for the countdown
    var targetDate = new Date('2028/10/10 00:00:00');

    // Initialize the countdown
    $('.deals-countdown').countdown(targetDate, function(event) {
        $(this).html(event.strftime('%D days %H:%M:%S'));
    });
});
