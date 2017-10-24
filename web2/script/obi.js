//内容の表示非表示
	$(function(){
  $(".openBtn").click(function(){
    $($(this).next(".textArea")).animate(
      {height: "toggle", opacity: "toggle"},
      "nomal"
    );
  });
});
