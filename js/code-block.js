/**
 * 代码块语言识别，代码块复制，代码块折叠
 */
$(function() {
  var initCodeBlock = function() {

    /**
     * 代码块复制
     */
    var codeCopyHtml = '';
    codeCopyHtml += '<span class="code-copy" data-clipboard-snippet="">';
    // codeCopyHtml += '<i class="fa fa-clipboard"></i><span>复制</span>';
    codeCopyHtml += '<i class="fa fa-clipboard"></i>';
    codeCopyHtml += '</span>';

    /**
     * 代码块折叠
     */
    var codeShrinkHtml = '';
    codeShrinkHtml += '<span class="code-shrink code-expand" data-clipboard-snippet="">';
    codeShrinkHtml += '<i class="fa fa-angle-down"></i>';
    codeShrinkHtml += '</span>';

    /**
     * 代码块语言识别
     */
    $("#articleContent pre code").each(function(index, domEle) {
      var $codeArea = $(domEle);
      var codeLang = 'bash';
      var codeLangHtml = '';
      var codeClass = $codeArea.attr('class') || '';
      if (codeClass.indexOf("language-javascript") !== -1) {
        codeLang = 'javascript';
      } else if (codeClass.indexOf("language-html") !== -1) {
        codeLang = 'html';
      } else if (codeClass.indexOf("language-css") !== -1) {
        codeLang = 'css';
      } else if (codeClass.indexOf("language-python") !== -1) {
        codeLang = 'python';
      } else if (codeClass.indexOf("language-json") !== -1) {
        codeLang = 'json';
      } else if (codeClass.indexOf("language-yaml") !== -1) {
        codeLang = 'yaml';
      }
      codeLangHtml = '<span class="code-lang">' + codeLang + '</span>';

      /**
       * 拼接HTML
       */
      $codeArea.before('<div class="code-area-title">' + codeLangHtml + codeCopyHtml + codeShrinkHtml + '</div>');
    });


    /**
     * 代码块复制事件
     */
    var clipboard = new ClipboardJS('pre .code-area-title .code-copy', {
      target: function(trigger) {
        return trigger.parentNode.nextElementSibling;
      }
    });

    clipboard.on('success', function(e) {
      layer.msg('代码复制成功');
      e.clearSelection();
    });

    clipboard.on('error', function(e) {
      layer.msg('复制失败，请在下方留言反馈，感谢！');
    });

    /**
     * 代码块折叠事件
     */
    $('pre .code-area-title .code-shrink').on('click', function() {
      var $clickNode = $(this);
      if ($clickNode.find('i').hasClass('code-closed')) {
        $clickNode.parent().siblings('code').show();
        $clickNode.find('i').removeClass('code-closed');
      } else {
        $clickNode.parent().siblings('code').hide();
        $clickNode.find('i').addClass('code-closed');
      }
    });

  };
  initCodeBlock();
});
