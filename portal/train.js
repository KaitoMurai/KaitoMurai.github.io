$(function(){
  $.ajax({
    url: 'https://transit.yahoo.co.jp/traininfo/detail/613/0/',    // 表示させたいコンテンツがあるページURL
    cache: false,
    datatype: 'html',
    success: function(html) {
      var h = $(html).find('#subText');    // 表示させたいコンテンツの要素を指定
      $('#wrap').append(h);    // append関数で指定先の要素へ出力
    }
  });
});
