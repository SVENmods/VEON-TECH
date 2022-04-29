var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  sliderPerView: 1,
  speed: 450,
  spaceBetween: 0,
  loop: true,
  longSwipes: true,
  preventClicksPropagation: true,
  autoplayDisableOnInteraction: true,
  followFinger:false,
  mousewheel: {
    sensitivity: 0.001,
  },
  allowTouchMove: false,
  touchStartPreventDefault: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*var oldSrc = '../resource/icons/telephone.png';
var newSrc = '../resource/icons/telephone_black.png';

swiper.on('slideChange', function() {
  if (this.activeIndex === 1 || this.activeIndex === 2 || this.activeIndex === 3 || this.activeIndex === 4) {
    $( ".home_page" ).addClass( "white_style", 10000);
    $('.tele_img[src="' + oldSrc + '"]').attr('src', newSrc);
  }
  else{
    $( ".home_page" ).removeClass( "white_style" );
    $('.tele_img[src="' + newSrc + '"]').attr('src', oldSrc);
  };
});*/

document.addEventListener('DOMContentLoaded', function() {
  const slider = new ChiefSlider('.slider', {
    loop: true,
    autoplay: true,
    interval: 3000,
  });
});

document.getElementById("services_content_WEB_span").onmouseover = function() {
  document.getElementById("services_content_WEB_text").style.display = "block";
  document.getElementById("services_content_SOFT_text").style.display = "none";
  document.getElementById("services_content_SOFT").style.display = "none";
};

document.getElementById("services_content_SOFT_span").onmouseover = function() {
  document.getElementById("services_content_SOFT_text").style.display = "block";
  document.getElementById("services_content_SOFT").style.display = "block";
  document.getElementById("services_content_WEB_text").style.display = "none";
};

console.log(window.screen.availWidth);
console.log(window.screen.availHeight);

$('#registration_dis, #online_shop_dis, #business_card_dis, #app_dis, #crm_dis, #seo_landing_dis, #page_tech_1, #page_tech_2').addClass('open');

$('#registration_bt').click(function() {
  if ($('#registration_dis').hasClass("open")) {
    $("#registration_dis").show('slow');
    $('#registration_dis').removeClass('open');
  } else {
    $('#registration_dis').addClass('open');
    $('#registration_dis').hide("slow")
  }
});

$('#online_shop_bt').click(function() {
  if ($('#online_shop_dis').hasClass("open")) {
    $("#online_shop_dis").show('slow');
    $('#online_shop_dis').removeClass('open');
  } else {
    $('#online_shop_dis').addClass('open');
    $('#online_shop_dis').hide("slow")
  }
});

$('#business_card_bt').click(function() {
  if ($('#business_card_dis').hasClass("open")) {
    $("#business_card_dis").show('slow');
    $('#business_card_dis').removeClass('open');
  } else {
    $('#business_card_dis').addClass('open');
    $('#business_card_dis').hide("slow")
  }
});

$('#app_bt').click(function() {
  if ($('#app_dis').hasClass("open")) {
    $("#app_dis").show('slow');
    $('#app_dis').removeClass('open');
  } else {
    $('#app_dis').addClass('open');
    $('#app_dis').hide("slow")
  }
});

$('#crm_bt').click(function() {
  if ($('#crm_dis').hasClass("open")) {
    $("#crm_dis").show('slow');
    $('#crm_dis').removeClass('open');
  } else {
    $('#crm_dis').addClass('open');
    $('#crm_dis').hide("slow")
  }
});

$('#seo_landing_bt').click(function() {
  if ($('#seo_landing_dis').hasClass("open")) {
    $("#seo_landing_dis").show('slow');
    $('#seo_landing_dis').removeClass('open');
  } else {
    $('#seo_landing_dis').addClass('open');
    $('#seo_landing_dis').hide("slow")
  }
});

/*$('#span_tech_2').click(function() {
  if ($('#page_tech_2').hasClass("open") && $('#page_tech_1').hasClass("open")) {
    $('#page_tech_1').addClass('open');
    $('#span_tech_1').css("background-color","#1E7340");
    $('#page_tech_1').hide("slow")
    $("#page_tech_2").show('slow');
    $('#span_tech_2').css("background-color", "rgba(0, 0, 0, 0.5)");
    $('#page_tech_2').removeClass('open');
  } else {
    $('#page_tech_2').addClass('open');
    $('#span_tech_2').css("background-color","#1E7340");
    $('#page_tech_2').hide("slow")
  }
});

$('#span_tech_1').click(function() {
  if ($('#page_tech_1').hasClass("open")) {
    $("#page_tech_1").show('slow');
    $('#span_tech_1').css("background-color", "rgba(0, 0, 0, 0.5)");
    $('#page_tech_1').removeClass('open');
  } else {
    $('#page_tech_1').addClass('open');
    $('#span_tech_1').css("background-color","#1E7340");
    $('#page_tech_1').hide("slow")
  }
});*/

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("page_tech");
  for (i = 0; i < tabcontent.length; i++) {
    $(tabcontent[i]).hide('slow');
    /*  tabcontent[i].style.display = "none";*/
  }
  tablinks = document.getElementsByClassName("span_tech");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  $(document.getElementById(tabName)).show('slow');
  /*document.getElementById(tabName).style.display = "block";*/
  evt.currentTarget.className += " active";
}


/*document.getElementById("bt_arr_2").onclick= function(){
  document.getElementById("circl_litle2").style.visibility="visible";
}*/

document.getElementById("chat_bt").onclick = function() {
  $("#chat").show('slow');
  $("#overlap").show('slow');
  $("#chat_bt").hide('slow');
}

document.getElementById("chat_close").onclick = function() {
  $("#chat").hide('slow');
  $("#overlap").hide('slow');
  $("#chat_bt").show('slow');
}
