//内容の表示非表示
	$(function(){
  $(".openBtn_i").click(function(){
    $($(this).next(".textArea_content")).animate(
      {height: "toggle", opacity: "toggle"},
      "nomal"
    );
  });
});
