$(function () {
    $(window).scroll(function () {
        $('#fourwrap>section').each(function () {
            if ($(this).offset().top <= $(window).scrollTop() + 10) {
                $('.submenu h1').removeClass('up')
                let idx = $(this).index()
                $('.submenu h1').eq(idx).addClass('up')
            }
        })
    })

    $('.submenu > h1').click(function () {
        let idx = $(this).index()
        console.log(idx)
        let section = $('#fourwrap>section').eq(idx)
        console.log(section)
        let sectionDistance = section.offset().top

        $('html, body').animate({
            scrollTop: sectionDistance
        })
    })

    $('.third>h1, .header h1').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, function () {
            location.reload();
        });
    });

    let arr = ['images/sample1.jpg', 'images/sample2.jpg']
    $('.sixth li').click(function () {
        let idx = $(this).index()
        $('.popup img').attr('src', arr[idx])
        $('.popup').addClass('on')
    })

    // $('.popup').click(function () {
    //     $('.popup').removeClass('on')
    // })

    $(function(){
        $('.tools a').on("click",function(e){
            e.preventDefault();
        });
     });
})