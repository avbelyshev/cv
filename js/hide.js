$(function(){

  $('.experience-list').hide();

  $('.experience-title').click(function(){
    $(this).next().slideToggle({duration: 100});
  });
});
