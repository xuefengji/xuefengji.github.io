$(function () {
  /**
   * 添加文章卡片hover效果.
   */
  var articleCardHover = function () {
    var animateClass = 'animated pulse';
    $('article .article').hover(function () {
      $(this).addClass(animateClass);
    }, function () {
      // $(this).removeClass(animateClass);
      // fix: 下一篇位移到最右边
      $(this).addClass(animateClass);
    });
  };
  articleCardHover();

  /*菜单切换*/
  $('.sidenav').sidenav();

  /* 修复文章卡片 div 的宽度. */
  var fixPostCardWidth = function (srcId, targetId) {
    var srcDiv = $('#' + srcId);
    if (srcDiv.length === 0) {
      return;
    }

    var w = srcDiv.width();
    if (w >= 450) {
      w = w + 21;
    } else if (w >= 350 && w < 450) {
      w = w + 18;
    } else if (w >= 300 && w < 350) {
      w = w + 16;
    } else {
      w = w + 14;
    }
    $('#' + targetId).width(w);
  };

  /**
   * 修复footer部分的位置，使得在内容比较少时，footer也会在底部.
   */
  var fixFooterPosition = function () {
    $('.content').css('min-height', window.innerHeight - 165);
  };

  /**
   * 修复样式.
   */
  var fixStyles = function () {
    fixPostCardWidth('navContainer', 'articles');
    fixPostCardWidth('artDetail', 'prenext-posts');
    fixFooterPosition();
  };
  fixStyles();

  /*调整屏幕宽度时重新设置文章列的宽度，修复小间距问题*/
  $(window).resize(function () {
    fixStyles();
  });

  /*初始化瀑布流布局*/
  $('#articles').masonry({
    itemSelector: '.article'
  });

  // AOS.init({
  //   easing: 'ease-in-out-sine',
  //   duration: 700,
  //   delay: 100
  // });

  /*文章内容详情的一些初始化特性*/
  var articleInit = function () {
    $('#articleContent a').attr('target', '_blank');

    /* 博客正文的img不需要加shadow
    $('#articleContent img').each(function () {
        var imgPath = $(this).attr('src');
        $(this).wrap('<div class="img-item" data-src="' + imgPath + '" data-sub-html=".caption"></div>');
        // 图片添加阴影
        $(this).addClass("img-shadow img-margin");
        // 图片添加字幕
        var alt = $(this).attr('alt');
        var title = $(this).attr('title');
        var captionText = "";
        // 如果alt为空，title来替
        if (alt === undefined || alt === "") {
            if (title !== undefined && title !== "") {
                captionText = title;
            }
        } else {
            captionText = alt;
        }
        // 字幕不空，添加之
        if (captionText !== "") {
            var captionDiv = document.createElement('div');
            captionDiv.className = 'caption';
            var captionEle = document.createElement('b');
            captionEle.className = 'center-caption';
            captionEle.innerText = captionText;
            captionDiv.appendChild(captionEle);
            this.insertAdjacentElement('afterend', captionDiv)
        }
    });
    */
    // 博客正文的img居中（by wenyuan）
    $('#articleContent img').each(function () {
      $(this).wrap('<div style="text-align: center"></div>');
      $(this).css({
        'margin-top': '10px',
        'margin-bottom': '10px',
        'margin-left': 'auto',
        'margin-right': 'auto'
      });
      var $nextTag = $(this).parent().next()[0];
      if ($nextTag && $nextTag.tagName === 'BR') {
        $nextTag.remove()
      }
    });


    // $('#articleContent, #myGallery').lightGallery({
    //     selector: '.img-item',
    //     // 启用字幕
    //     subHtmlSelectorRelative: true
    // });

    // progress bar init
    // const progressElement = window.document.querySelector('.progress-bar');
    // if (progressElement) {
    //     new ScrollProgress((x, y) => {
    //         progressElement.style.width = y * 100 + '%';
    //     });
    // }
  };
  articleInit();

  $('.modal').modal();

  /*回到顶部*/
  $('#backTop').click(function () {
    $('body,html').animate({scrollTop: 0}, 400);
    return false;
  });

  /*监听滚动条位置*/
  var $nav = $('#headNav');
  var $backTop = $('.top-scroll');
  $(window).scroll(function () {
    /* 回到顶部按钮根据滚动条的位置的显示和隐藏.*/
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $nav.addClass('nav-transparent');
      $backTop.slideUp(300);
    } else {
      $nav.removeClass('nav-transparent');
      $backTop.slideDown(300);
    }
  });

  /* 支持二级菜单 */
  $(".nav-menu>li").hover(function () {
    $(this).children('ul').stop(true, true).show();
    $(this).addClass('nav-show').siblings('li').removeClass('nav-show');
  }, function () {
    $(this).children('ul').stop(true, true).hide();
    $('.nav-item.nav-show').removeClass('nav-show');
  });

  $('.m-nav-item>a').on('click', function () {
    if ($(this).next('ul').css('display') == "none") {
      $('.m-nav-item').children('ul').slideUp(300);
      $(this).next('ul').slideDown(300);
      $(this).parent('li').addClass('m-nav-show').siblings('li').removeClass('m-nav-show');
    } else {
      $(this).next('ul').slideUp(300);
      $('.m-nav-item.m-nav-show').removeClass('m-nav-show');
    }
  });
});
