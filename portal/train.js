$(function() {
    $.ajax({
        type: 'GET',
        url: 'https://transit.yahoo.co.jp/traininfo/detail/613/0/',
        dataType: 'html',
        success: function(data) {
            console.log($(data).find('#mdServiceStatus').text());
        }
    });
});
