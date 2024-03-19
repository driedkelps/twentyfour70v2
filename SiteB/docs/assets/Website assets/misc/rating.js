jQuery(document).ready(function($) {
$('.rating_fa-regular fa-heart.r').hover(function() {
            // get hovered value
            var rating = $(this).data('rating');
            var value = $(this).data('value');
            $(this).parent().attr('class', '').addClass('rating_fa').addClass('rating_'+rating);
            highlight_star(value);
        })})