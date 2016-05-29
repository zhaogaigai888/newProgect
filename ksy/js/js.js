(function ($) {
    $.getJSON("json.json", function (data) {
        var title = "",
            one = "",
            str1 = "",
            two = "",
            str2 = "",
            three = "",
            str3 = "";
        title += ' <a href="#">' + data.back + '</a><h1>' + data.page_title + '</h1><a href="#"><img src="img/' + data.more_img + '" alt=""></a>';
        $(".header").html(title);




        //-----------------------------------------------------------------------

        function eachs(dates, ele1, str1, ele2, str2) {
            $.each(dates, function (k, v) {
                str1 += '<p>' + v.title + '</p><b>' + v.he + '</b><img src="img/' + v.img_url + '" alt="">';
                ele1.html(str1);
                str2 += '<p>' + v.detail.heading + '</p><b>礼品：' + v.detail.gift + '</b><b>规格：' + v.detail.num + '</b><b>价值：' + v.detail.price + '</b><b>数量：' + v.detail.number + '</b>';
                ele2.html(str2)
            })
        }
        eachs(data.one, $(".first .topin"), one, $(".first .content"), str1);

        eachs(data.two, $(".two .topin"), two, $(".two .content"), str2);
        eachs(data.three, $(".there .topin"), three, $(".there .content"), str3);

    })
    var wid = $(window).width(),
        index = 0,
        len = $(".mainin>div").length;

    $(".main ").on("swipeLeft", ".mainin", function () {

        index++;
        if (index >= len - 1) {
            index = len - 1;
        }
        change();
    }).on("swipeRight", ".mainin", function () {
        index--;
        if (index <= 0) {
            index = 0;
        }
        change();
    })

    function change() {
        $(".mainin").css({
            "-webkit-transform": "translateX(" + (-wid * index) + "px)",
            "-webkit-transition": "transform 0.2s ease-in-out"
        })
    }
})(Zepto)