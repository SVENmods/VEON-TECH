var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  sliderPerView: 1,
  spaceBetween: 0,
  loop: true,
  mousewheel: true,
  allowTouchMove: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

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



document.getElementById("chat_bt").onclick= function(){
  $("#chat").show('slow');
  $("#overlap").show('slow');
}

document.getElementById("chat_close").onclick= function(){
  $("#chat").hide('slow');
  $("#overlap").hide('slow');
}
