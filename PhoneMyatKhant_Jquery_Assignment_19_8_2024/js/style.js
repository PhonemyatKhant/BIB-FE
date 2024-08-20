$(document).ready(function () {
    // Click
    $('#click-btn').click(function () {
        alert('Button Clicked!');
    });

    // Double-click
    $('#dbclick-btn').dblclick(function () {
        alert('Button Double-Clicked!');
    });

    // Mouse enter 
    $('#mouse-enter-blk').mouseenter(function () {
        $(this).addClass('mouse-enter-blk');
    });

    // Mouse leave 
    $('#mouse-leave-blk').mouseleave(function () {
        $(this).addClass('mouse-leave-blk');
    });

    // Hover
    $('#hover-blk').hover(
        function () {
            $(this).css('background-color', 'grey');
        },
        function () {
            $(this).css('background-color', 'yellowgreen');
        }
    );

    // Focus
    $('#input').focus(function () {
        $(this).css('border', '2px solid green');
    });

    // Blur
    $('#input').blur(function () {
        $(this).css('border', '2px solid red');
    });

    // On
    $('#on-blk').on({
        click: function () {
            alert('Clicked!');
        },
        mouseenter: function () {
            $(this).css('background-color', 'lightgreen');
        },
        mouseleave: function () {
            $(this).css('background-color', '');
        }
    });

    // Hide 
    $('#hide-btn').click(function () {
        $('#effect-blk').hide(1000);
    });

    // Show 
    $('#show-btn').click(function () {
        $('#effect-blk').show(1000);
    });

    // Toggle
    $('#toggle-btn').click(function () {
        $('#effect-blk').toggle('slow');
    });

    // Fade in 
    $('#fadein-btn').click(function () {
        $('#fade-blk').fadeIn(1000);
    });

    // Fade out 
    $('#fadeout-btn').click(function () {
        $('#fade-blk').fadeOut(1000);
    });

    // Toggle Fade
    $('#fadetoggle-btn').click(function () {
        $('#fade-blk').fadeToggle(1000);
    });

    // Fade To
    $('#fadeto-btn').click(function () {
        $('#fade-blk').fadeTo(1000, 0.5);
    });

    // Slide Up 
    $('#slideup-btn').click(function () {
        $('#slide-blk').slideUp(1000);
    });

    // Slide Down
    $('#slidedown-btn').click(function () {
        $('#slide-blk').slideDown(1000);
    });

    // Toggle Slide
    $('#slidetoggle-btn').click(function () {
        $('#slide-blk').slideToggle(1000);
    });
    //GET
    $('#html-input').blur(function () {
        let message = $('#html-input').val()
        alert(message);
    });
    $('#set-btn').click(function () {
        $('#set-blk').text('Changed Text!')
    });
    //Append
    $('#append-btn').click(function () {

        $('#original').append(' appended')
    });
    //Prepend
    $('#prepend-btn').click(function () {

        $('#original').prepend('prepended ')
    });
    //BEFORE
    $('#before-btn').click(function () {

        $('#original').before('<li>Before Item</li>')
    });
    //AFTER
    $('#after-btn').click(function () {

        $('#original').after('<li>After Item</li>')
    });
    //Empty
    $('#empty-btn').click(function () {

        $('.content-blk').empty()
    });
    //Add class
    $('#add-class-btn').click(function () {

        $('#background-blk').addClass('bgcolor-yellowgreen')
    });
    //Remove class
    $('#remove-class-btn').click(function () {

        $('#background-blk').removeClass('bgcolor-yellowgreen')
    });
    //Toggle class
    $('#toggle-class-btn').click(function () {

        $('#background-blk').toggleClass('bgcolor-yellowgreen')
    });
    //ADD CSS
    $('#css-btn').click(function () {

        $('#background-blk').css({ "margin-left": "400px" })
    })
});
