document.addEventListener("DOMContentLoaded", function () {
  var items = document.getElementsByClassName("item");
  var goPreBtn = document.getElementById("goPre");
  var goNextBtn = document.getElementById("goNext");
  var points = document.getElementsByClassName("point");

  var index = 0; //index on behalf of pic

  var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
      items[i].className = "item";
    }
    for (var i = 0; i < points.length; i++) {
      points[i].className = "point";
    }
  };

  var goIndex = function () {
    clearActive();
    items[index].className = "item active";
    points[index].className = "point active";
  };

  var goNext = function () {
    if (index < 4) {
      index++;
    } else {
      index = 0;
    }

    goIndex();
  };
  var goPre = function () {
    if (index == 0) {
      index = 4;
    } else {
      index--;
    }
    goIndex();
  };
  goNextBtn &&
    goNextBtn.addEventListener("click", function () {
      goNext();
    });
  goPreBtn &&
    goPreBtn.addEventListener("click", function () {
      goPre();
    });

  for (var i = 0; i < points.length; i++) {
    points[i].addEventListener("click", function () {
      var pointIndex = this.getAttribute("data-index");
      console.log(pointIndex);
      index = pointIndex;
      goIndex();
    });
  }
});


/* document.addEventListener('DOMContentLoaded',function(){
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,12);

	map.enableScrollWheelZoom(true);
	map.addControl(new BMap.NavigationControl());    
	map.addControl(new BMap.ScaleControl());    
	map.addControl(new BMap.OverviewMapControl());    
	map.addControl(new BMap.MapTypeControl());    
	map.setCurrentCity("成都");
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
        }
        else {
            alert('failed'+this.getStatus());
        }
		var p1 = new BMap.Point(r.point.lng,r.point.lat);
		var p2 = new BMap.Point(104.090463,30.658124);
		
		var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
		driving.search(p1, p2);
    },{enableHighAccuracy: true})
	}) */

document.addEventListener("DOMContentLoaded", function () {
  $(function() {
    if($('.swiper-container').length){
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            centeredSlides: true,
            paginationClickable: true,
            slideToClickedSlide: true,
            spaceBetween: 60,
            noSwipingClass: 'stop-swiping',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        var currentSlide = 1; //当前页面
        var oldSlide = 1; //上一次的页面
        var slide = document.getElementsByClassName('swiper-slide');
        slide[1].style.opacity = '0.5';
        slide[1].style.filter = 'brightness(0.5)';
        $('.swiper-slide').click(function() {
            // console.log(currentSlide + '?' + oldSlide);
            currentSlide = $(this).attr('name');
            if (currentSlide > oldSlide) {
                swiper.slideNext();
            }
            if (currentSlide < oldSlide) {
                swiper.slidePrev();
            }
            for (var i = 0; i < slide.length; i++) {
                slide[i].style.opacity = '1';
                slide[i].style.filter = 'brightness(1)';
            };
            if (currentSlide == 1) {
                slide[parseInt(currentSlide)].style.opacity = '0.5';
                slide[parseInt(currentSlide)].style.filter = 'brightness(0.5)';
            } else if (currentSlide == slide.length) {
                slide[parseInt(currentSlide) - 2].style.opacity = '0.5';
                slide[parseInt(currentSlide) - 2].style.filter = 'brightness(0.5)';
            } else if (currentSlide > 1 && currentSlide < slide.length) {
                slide[parseInt(currentSlide) - 2].style.opacity = '0.5';
                slide[parseInt(currentSlide) - 2].style.filter = 'brightness(0.5)';
                slide[parseInt(currentSlide)].style.opacity = '0.5';
                slide[parseInt(currentSlide)].style.filter = 'brightness(0.5)';
            }
            oldSlide = currentSlide;
        });
        $('.swiper-button-next').click(function() {
            for (var i = 0; i < slide.length; i++) {
                slide[i].style.opacity = '1';
                slide[i].style.filter = 'brightness(1)';
            };
            currentSlide++;
            if (currentSlide == 1) {
                slide[parseInt(currentSlide)].style.opacity = '0.5';
                slide[parseInt(currentSlide)].style.filter = 'brightness(0.5)';
            } else if (currentSlide == slide.length) {
                slide[parseInt(currentSlide) - 2].style.opacity = '0.5';
                slide[parseInt(currentSlide) - 2].style.filter = 'brightness(0.5)';
            } else if (currentSlide > 1 && currentSlide < slide.length) {
                slide[parseInt(currentSlide) - 2].style.opacity = '0.5';
                slide[parseInt(currentSlide) - 2].style.filter = 'brightness(0.5)';
                slide[parseInt(currentSlide)].style.opacity = '0.5';
                slide[parseInt(currentSlide)].style.filter = 'brightness(0.5)';
            }
            oldSlide = currentSlide;
        })
        $('.swiper-button-prev').click(function() {
            for (var i = 0; i < slide.length; i++) {
                slide[i].style.opacity = '1';
                slide[i].style.filter = 'brightness(1)';
            };
            currentSlide--;
            if (currentSlide == 1) {
                slide[parseInt(currentSlide)].style.opacity = '0.5';
                slide[parseInt(currentSlide)].style.filter = 'brightness(0.5)';
            } else if (currentSlide == slide.length) {
                slide[parseInt(currentSlide) - 2].style.opacity = '0.5';
                slide[parseInt(currentSlide) - 2].style.filter = 'brightness(0.5)';
            } else if (currentSlide > 1 && currentSlide < slide.length) {
                slide[parseInt(currentSlide) - 2].style.opacity = '0.5';
                slide[parseInt(currentSlide) - 2].style.filter = 'brightness(0.5)';
                slide[parseInt(currentSlide)].style.opacity = '0.5';
                slide[parseInt(currentSlide)].style.filter = 'brightness(0.5)';
            }
            oldSlide = currentSlide;
    
        })
    }
	})
});

document.addEventListener("DOMContentLoaded", function () {
  function scroll(to, time) {
    $("#imgs")
      .find("ul")
      .stop()
      .animate({ left: to + "px" }, time);
  }
  /* $(function() {
	    const imgList = ['../picture/baidi.png','../picture/baidi1.jpg', '../picture/samsung.png', '../picture/baidi2.jpg', '../picture/13p.png', '../picture/baidi6.jpg', '../picture/baidi4.jpg', '../picture/baidi5.jpg',]
	    const speed = 1200
	    let div = document.getElementById("imgs")
	    let ul = document.createElement("ul")
	    ul.style.left = div.offsetWidth + "px"
	    ul.style.width = 260 * imgList.length + "px"
	    div.appendChild(ul)
	    let toLeft = div.offsetWidth - 260 * imgList.length
	    for(i in imgList) {
	        imgPath = imgList[i]
	        let li = document.createElement("li")
	        let img = document.createElement("img")
	        img.src = imgPath
	        li.appendChild(img)
	        ul.appendChild(li)
	    }
	    let time = speed * imgList.length
	    let time1 = parseInt( (20 - toLeft) / 260 * speed)
	    scroll(toLeft, time)
	    setTimeout("scroll(20, " + time1 + ")", time)
	    setTimeout("scroll(" + toLeft + ", " + time1 + ")", time + time1)
	    setTimeout("setInterval('scroll(" + 20 + ", " + time1 + ");', "+ time1 * 2 +")", time)
	    setTimeout("setInterval('scroll(" + toLeft + ", " + time1 + ");', "+ time1 * 2 +")", time + time1)
	}); */
});

document.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    $("iframe").hide();
    $("#if1").show();
    $(".qiehuan1").click(function () {
      $("iframe").hide(1000, "linear");
      $("#if1").show(1000, "linear");
    });
    $(".qiehuan2").click(function () {
      $("iframe").hide(1000, "linear");
      $("#if2").show(1000, "linear");
    });
    $(".qiehuan3").click(function () {
      $("iframe").hide(1000, "linear");
      $("#if3").show(1000, "linear");
    });
    $(".qiehuan4").click(function () {
      $("iframe").hide(1000, "linear");
      $("#if4").show(1000, "linear");
    });
    $(document).ready(function () {
      $("#flip1").click(function () {
        $("#panel1").slideToggle("slow");
      });
    });
    $(document).ready(function () {
      $("#flip2").click(function () {
        $("#panel2").slideToggle("slow");
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.onload = function () {
    var up = document.querySelector(".up");
    var insidea = document.querySelector("#insidea");
    var accept = document.querySelector("#accept");
    window.onscroll = function () {
      var scrollHeight =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollHeight >= 350) {
        up && (up.style.display = "block");
      } else {
        up && (up.style.display = "none");
      }
    };
    up &&
      (up.onclick = function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    insidea &&
      (insidea.onclick = function () {
        accept.style.bottom = "-8.5rem";
      });
    var photos3 = document.querySelector("#photos-3");
    var photos3a = document.querySelectorAll("#photos-3>a");
    var photos3img = document.querySelectorAll("#photos-3>img");
    for (var i in photos3a) {
      photos3a[i].onmouseover = function () {
        photos3.style.backgroundColor = "lightgray";
        this.style.animationName = "larger";
        this.style.transition = "1.5s";
        this.style.width = "420px";
        this.style.height = "353.68px";
      };
      photos3a[i].onmouseout = function () {
        photos3.style.backgroundColor = "lightgray";
        this.style.animationName = "smaller";
        this.style.transition = "1.5s";
        this.style.width = "380px";
        this.style.height = "320px";
      };
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  var index = 0;
  var li = $(".banner ul li");
  var img = $(".music .m_img img");
  var text = $(".music .m_text");
  var prev = $(".music .m_btn .m_prev");
  var play = $(".music .m_btn .m_play");
  var next = $(".music .m_btn .m_next");
  var mp3 = $(".music .m_mp3");
  var flag = false;
  var close = true;

  li.click(function () {
    index = $(this).index();
    show();
  });

  function show() {
    change_bg(index + 1);

    change_img_text(index + 1);

    change_btn_title();

    img_rotate();

    play_mp3();
  }

  function change_bg(idx) {
    $(".banner").css({
      background: "url(../picture/" + idx + "_bg.jpg)",
    });
  }

  function change_img_text(idx) {
    img.attr("src", "../picture/" + idx + "1.jpg");
    text.html(li.eq(index).attr("title"));
  }

  function change_btn_title() {
    play.removeClass("m_play");
    play.addClass("m_pause");
    play.attr("title", "pause");
  }

  function img_rotate() {
    li.children().removeClass("img_rotate");
    li.eq(index).children().addClass("img_rotate");
  }

  function play_mp3() {
    mp3.attr("src", li.eq(index).attr("datasrc"));
    mp3.get(0).play();
    flag = true;
  }

  play.click(function () {
    if (flag) {
      mp3.get(0).pause();
      li.eq(index).children().removeClass("img_rotate");
      play.removeClass("m_pause").addClass("m_play").attr("title", "play");
      flag = false;
    } else {
      mp3.get(0).play();
      li.eq(index).children().addClass("img_rotate");
      play.removeClass("m_play").addClass("m_pause").attr("title", "pause");
      flag = true;
      change_bg(index + 1);
    }
  });

  prev.click(function () {
    index--;
    if (0 > index) {
      index = li.length - 1;
    }
    show();
  });

  next.click(function () {
    index++;
    if (li.length - 1 < index) {
      index = 0;
    }
    show();
  });

  $(".m_close").click(function () {
    if (close) {
      $(this).addClass("m_open");
      $(".music").animate({ left: "-99%" }, 800);
      close = false;
    } else {
      $(this).removeClass("m_open");
      $(".music").animate({ left: "0px" }, 800);
      close = true;
    }
  });

  var v = document.querySelector(".prev");
  var n = document.querySelector(".next");
  var textt = document.querySelector(".mvs_text");
  var indexx = 0;
  var iflist = document.querySelectorAll("iframe");

  v &&
    (v.onclick = function () {
      iflist[indexx].style.display = "none";
      if (indexx == 0) {
        indexx = 4;
      } else {
        indexx--;
      }
      iflist[indexx].style.display = "block";
      var tmp1 = iflist[indexx].title;
      textt.innerHTML = tmp1;
    });
  n &&
    (n.onclick = function () {
      iflist[indexx].style.display = "none";
      if (indexx == 4) {
        indexx = 0;
      } else {
        indexx++;
      }
      iflist[indexx].style.display = "block";
      var tmp2 = iflist[indexx].title;
      textt.innerHTML = tmp2;
    });

  var up = document.querySelector(".up");
  var insidea = document.querySelector("#insidea");
  var accept = document.querySelector("#accept");
  var decline = document.querySelector("#decline");
  window.onscroll = function () {
    var scrollHeight =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollHeight >= 600) {
      up && (up.style.display = "block");
    } else {
      up && (up.style.display = "none");
    }
  };
  up &&
    (up.onclick = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  insidea &&
    (insidea.onclick = function () {
      accept.style.bottom = "-6.5rem";
    });
  decline &&
    (decline.onclick = function () {
      accept.style.bottom = "-6.5rem";
    });
  up &&
    ((up.onmouseover = function () {
      this.style.animationName = "up_larger";
      this.style.animationDuration = "0.5s";
      this.style.width = "8rem";
      this.style.height = "8rem";
    }),
    (up.onmouseout = function () {
      this.style.animationName = "up_smaller";
      this.style.animationDuration = "0.5s";
      this.style.width = "6rem";
      this.style.height = "6rem";
    }));
});
