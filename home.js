$(function(){
  //質問一覧開閉ボタン
  $(".panel-head").click(function(){
    $(this).next().slideToggle(200); //panel-headの次の要素(panel-body)が0.2秒でスライドダウン
    $(this).toggleClass("ac");  //acクラスが要素になければ追加し、あれば削除する
    $(this).next("panel-head").slideToggle(); //panel-headの次の要素がclass属性値「panel-head」を持っていると取得され、スライドダウン
  });

  //pagetopボタン
  var pagetop = $('#pagetop');
  pagetop.hide();
  //50px以上スクロールしたらpagetopボタンを表示する
  $(window).scroll(function(){
    if($(this).scrollTop()>50){
      pagetop.fadeIn();
    }else{
      pagetop.fadeOut();
    }
  });
  //pagetopボタンをクリックしたら、スクロールして1秒かけて上に戻る
  pagetop.click(function(){
    $('body,html').animate({
      scrollTop: 0}, 1000);
      return false;
  });
});