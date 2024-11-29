$(document).ready(function () {
    $('.add-btn').click(function () {
        let subject = $('#task-field').val();
        if (subject === '') {
            $('.err-msg').show();
        } else {
            $('ul').append('<li>' + subject + '<div class="done">&#10003;</div>' + '<i class="fa fa-trash-o dlt"></i>' + '</li>');
            $('#task-field').val('');
            $('.err-msg').hide();
        }
    });

    $('ul').on('click', '.done', function () {
        $(this).parent().toggleClass('fadeColor');
        updateTaskdeatiles()
    });

    $('ul').on('click', '.dlt', function () {
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
            updateTaskdeatiles()
        });
    });

    $('#all').click(function () {
        $('li').removeClass('hidden');
    });

    $('#completed').click(function () {
        $('li').each(function () {
            if ($(this).hasClass('fadeColor')) {
                $(this).removeClass('hidden');
            } else {
                $(this).addClass('hidden');
            }
        });
    });

    $('#incompleted').click(function () {
        $('li').each(function () {
            if ($(this).hasClass('fadeColor')) {
                $(this).addClass('hidden');
            } else {
                $(this).removeClass('hidden');
            }
        });
    });

    function updateTaskdeatiles() {
        const totalTasks = $('ul li').length;
        const completedTasks = $('ul li.fadeColor').length;
        const incompletedTasks = totalTasks - completedTasks
        console.log(incompletedTasks);
        $('.totalTasks').text(totalTasks);
        $('.completedTasks').text(completedTasks);
        $('.incompletedTasks').text(incompletedTasks);
    }
    $('.add-btn').click(function(){
        updateTaskdeatiles();
    })
});