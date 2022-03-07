/* ================================================================================================
    Peringatan !!
===================================================================================================
    Mengubah / Menghapus file javascript (js) ini dapat mengakibatkan :
    1. Kerusakan / error pada template
    2. Menghilangkan fungsi update / perbaikan otomatis pada template
    3. Tidak akan mendapatkan support/bantuan dari kreator template
    Terima kasih sudah menggunakan Template Dari Twinny Blogger. :)
    Salam,
    Twinny Blogger - Blog White Store (BWS)
    Terakhir Diperbarui : 26/02/2022 @ 18:13
================================================================================================ */
var urlBlog = 'https://twinnyblogger.blogspot.com';
	var license = $('#license-code').text();
  var informasibatas = '<style>body{background:#000}#peringatan span{font-size:50px}#peringatan{z-index:99999;position:fixed;top:0;right:0;left:0;height:100%;text-align:center;background:rgba(0, 0, 0, 0.95);border:5px solid #444;color:#fff;padding:20px;font-family:monospace;border-radius:10px}#peringatan h4{font-size:20px}</style><div id="peringatan"><h4>Activate Templates</h4><p>Untuk mendapatkan lisensi Anda bisa menghubungi Admin di 089677337414</p><span id="batas-waktu-template">20</span></div>';
  var input = 9999;

$(document).ready(function () {
  var dataLicense = license.split('@');
  var codeLicense = dataLicense[0];
  var arrayLicense = dataLicense[1];
  console.log(codeLicense);
  console.log(arrayLicense);
  if (arrayLicense == undefined) {
    $(document.body).html(informasibatas);
    setInterval(function () {
        input <= 1 ? (window.location.href = urlBlog) : (document.getElementById("batas-waktu-template").innerHTML = --input);
    }, 1e3);
  }
  str = [arrayLicense];
$.ajax({
    url: "https://script.google.com/macros/s/AKfycbz9deVaYt9z7hpZDJJe0bAgdSXmOcyJYlmTa4TWRZW7xTdIMrzPYmhlBQDYkRiNge7C/exec",
    type: "GET",
    data: "users",
    crossDomain: true,
    dataType: "",
    success: function (data) {
      
      // mengambil data JSON dari user google sheet
      var json = data.user;
      
      // mengambil data dari Array ke-n
      var sheetLicense = json[str];
      console.log(sheetLicense)
      if (sheetLicense == undefined) {
        $(document.body).html(informasibatas);
        setInterval(function () {
          input <= 1 ? (window.location.href = urlBlog) : (document.getElementById("batas-waktu-template").innerHTML = --input);
        }, 1e3);
      }
      // mengambil data dari sheet, ada ID dan Code
      var ID = sheetLicense.id;
      var code = sheetLicense.code;
// Mengambil data ID Blog dengan Ajax
      $.ajax({
        url: "/feeds/posts/summary/?alt=json",
        type: "get",
        dataType: "jsonp",
        success: function (data) {
          // Mengambil ID Blog dari post summary blogger
          var dataID = data.feed.id.$t;
          console.log(dataID)
          
          // Hasil tag:blogger.com,1999:blog-4666907241397774044, yang kita butuhkan hanya ID jadi butuh kita eksplode
          var IDblog = dataID.split('-');
          
          // Hasil eksplode - akan ada dua array yaitu tag:blogger.com,1999:blog dan 4666907241397774044 ["tag:blogger.com,1999:blog", "4666907241397774044"]
          
         var blogID = IDblog[1];
          try {
            var input = 20,
                dataInBlog = blogID + codeLicense,
                dataInSheet = ID + code;
            if (dataInBlog == dataInSheet) {
              return;
            }
            $(document.body).html(informasibatas);
            setInterval(function () {
              input <= 1 ? (window.location.href = urlBlog) : (document.getElementById("batas-waktu-template").innerHTML = --input);
            }, 1e3);
          } catch (input) {
            window.location.href = urlBlog;
          }
        },
      });
    },});});(function (_0x289447, _0x55c367) {
    var _0x29098d = _0x5607,
        _0x29b54e = _0x289447();
    while (!![]) {
        try {
            var _0x34a5d7 = parseInt(_0x29098d(0x172)) / 0x1 + parseInt(_0x29098d(0x1c6)) / 0x2 + parseInt(_0x29098d(0x143)) / 0x3 * (-parseInt(_0x29098d(0x171)) / 0x4) + -parseInt(_0x29098d(0x125)) / 0x5 * (parseInt(_0x29098d(0x111)) / 0x6) + -parseInt(_0x29098d(0x168)) / 0x7 + parseInt(_0x29098d(0x1a1)) / 0x8 * (parseInt(_0x29098d(0x17e)) / 0x9) + parseInt(_0x29098d(0x155)) / 0xa * (parseInt(_0x29098d(0x1ad)) / 0xb);
            if (_0x34a5d7 === _0x55c367) break;
            else _0x29b54e['push'](_0x29b54e['shift']());
        } catch (_0x4b41ac) {
            _0x29b54e['push'](_0x29b54e['shift']());
        }
    }
}(_0x5512, 0x58dfc), window['onload'] = function () {
    etc(), shortcode(), post_convert(), post_sort(), pop(), popwin(), lazyload(), timeago(), lightbox(), slideshow(), darkmode(), custom_js();
});

function etc() {
    var _0x193c26 = _0x5607;
    $(window)['on'](_0x193c26(0x141), function () {
        var _0x4a7f09 = _0x193c26;
        $('body')[_0x4a7f09(0xf9)](_0x4a7f09(0xb2)), setTimeout(function () {
            var _0x60c6d8 = _0x4a7f09;
            $('body')[_0x60c6d8(0x1e2)](_0x60c6d8(0xb2));
        }, 0x7d0);
    }), $(window)['on'](_0x193c26(0xdd), function () {
        var _0x1e8d06 = _0x193c26;
        $(window)[_0x1e8d06(0x187)]() > 0x0 ? $(_0x1e8d06(0xbb))[_0x1e8d06(0xf9)]('shadow') : $(_0x1e8d06(0xbb))[_0x1e8d06(0x1e2)]('shadow');
    }), $(_0x193c26(0xef))['each'](function () {
        var _0x4ea708 = _0x193c26;
        $(this)[_0x4ea708(0x127)](_0x4ea708(0x1cd), _0x4ea708(0x1a3)), $(this)[_0x4ea708(0x12b)](_0x4ea708(0xfc));
        var _0x1ded08 = $(this)[_0x4ea708(0x1a2)]('li');
        _0x1ded08[_0x4ea708(0xf9)](_0x4ea708(0x1d7)), _0x1ded08['wrapInner'](_0x4ea708(0x17d)), _0x1ded08[_0x4ea708(0x12b)]('<ul class=\"sub\"></ul>');
    }), $('.LinkList li a:contains(\"_\")')[_0x193c26(0x1c4)](function () {
        var _0x4fd7f1 = _0x193c26,
            _0x2d6cbc = $(this)['parent']('li')[_0x4fd7f1(0xae)](_0x4fd7f1(0x19d))[_0x4fd7f1(0x1c5)]('ul');
        $(this)[_0x4fd7f1(0x1a2)]('li')[_0x4fd7f1(0x124)](_0x2d6cbc);
        var _0x8a0586 = $(this)[_0x4fd7f1(0x9a)]()[_0x4fd7f1(0xee)]('_', '')['replaceAll']('_ ', '');
        $(this)['text'](_0x8a0586);
    }), $(_0x193c26(0x186))['each'](function () {
        var _0x132ae5 = _0x193c26,
            _0x4e671b = $(_0x132ae5(0xe5), this)['html']();
        _0x4e671b = _0x4e671b[_0x132ae5(0xee)](_0x132ae5(0xec), _0x132ae5(0xf7)), _0x4e671b = _0x4e671b['replaceAll']('[/question]', _0x132ae5(0x146)), _0x4e671b = _0x4e671b[_0x132ae5(0xee)](_0x132ae5(0xa5), '<div class=\"answer\"><p>'), _0x4e671b = _0x4e671b['replaceAll'](_0x132ae5(0xda), _0x132ae5(0x146)), $('.faq-grid', this)['html'](_0x4e671b), $('form', this)['on']('submit', function (_0xe8e2ad) {
            var _0xd172bd = _0x132ae5;
            _0xe8e2ad[_0xd172bd(0xb0)]();
            if (!confirm(_0xd172bd(0x1b1))) return ![];
            else {
                var _0xf07fb3 = $_config[_0xd172bd(0x17a)][_0xd172bd(0x1be)][_0xd172bd(0xee)]('+', '')[_0xd172bd(0xee)](' ', '')[_0xd172bd(0xee)]('-', ''),
                    _0x3edc20 = $('[name=text]', this)[_0xd172bd(0x1d6)]();
                window['open'](_0xd172bd(0x14b) + _0xf07fb3 + _0xd172bd(0xe0) + encodeURIComponent(_0x3edc20) + _0xd172bd(0x1e4) + $_config[_0xd172bd(0x147)][_0xd172bd(0x11f)]);
            }
        });
    }), $(_0x193c26(0x1b2))['on'](_0x193c26(0x1b3), 'li.dropdown', function () {
        var _0x2a9772 = _0x193c26;
        $(this)[_0x2a9772(0x1c5)](_0x2a9772(0x104))[_0x2a9772(0x16e)](), $(this)[_0x2a9772(0x12e)](_0x2a9772(0x17f));
    });
    $(_0x193c26(0x194))[_0x193c26(0x1b7)] && $('[data-feed]')['each'](function () {
        var _0x4ae453 = _0x193c26,
            _0x1ba99f = $(this),
            _0x35298b = $(this)[_0x4ae453(0x127)]('data-feed');
        _0x1ba99f['addClass']('loading'), _0x1ba99f[_0x4ae453(0x179)](_0x35298b + ' .is_loop', function () {
            var _0x58ab72 = _0x4ae453,
                _0x6f0705 = $(this)[_0x58ab72(0x1ab)]();
            _0x1ba99f[_0x58ab72(0x1ab)](_0x6f0705);
            var _0x48d6ee = _0x1ba99f[_0x58ab72(0x127)](_0x58ab72(0x1d4));
            _0x48d6ee && (_0x1ba99f['find']('article#' + _0x48d6ee)[_0x58ab72(0x1b7)] ? _0x1ba99f['find'](_0x58ab72(0xce) + _0x48d6ee)['remove']() : _0x1ba99f['find']('article:last-of-type')[_0x58ab72(0xc7)]()), post_convert(), lazyload(), timeago(), _0x1ba99f[_0x58ab72(0x1e2)](_0x58ab72(0xb2));
        });
    });
    $(_0x193c26(0x9b))['on']('click', function (_0x32a6c1) {
        var _0x2777d2 = _0x193c26,
            _0x78d590 = $(this);
        _0x78d590[_0x2777d2(0x1b0)]('input')[_0x2777d2(0x9c)](), document[_0x2777d2(0x12d)]('copy'), _0x78d590[_0x2777d2(0x9a)](_0x2777d2(0x121)), setTimeout(function () {
            var _0x28eec4 = _0x2777d2;
            _0x78d590[_0x28eec4(0x9a)](_0x28eec4(0x15c));
        }, 0x7d0);
    });
    if (window[_0x193c26(0x1de)][_0x193c26(0x195)]) {
        if ($(window[_0x193c26(0x1de)][_0x193c26(0x195)])[_0x193c26(0x1b7)]) {
            var _0xdc8f63 = $(_0x193c26(0xbb))[_0x193c26(0xff)](),
                _0x40a90a = $(_0x193c26(0x15e))['outerHeight']();
            $(_0x193c26(0xb1))[_0x193c26(0x13d)]()[_0x193c26(0x169)]({
                'scrollTop': $(window['location'][_0x193c26(0x195)])[_0x193c26(0xde)]()['top'] - _0xdc8f63 - _0x40a90a - 0x14
            }, 0x1f4), $(window[_0x193c26(0x1de)][_0x193c26(0x195)])['addClass'](_0x193c26(0x1c7)), setTimeout(function () {
                var _0x273fd0 = _0x193c26;
                $(window[_0x273fd0(0x1de)][_0x273fd0(0x195)])[_0x273fd0(0x1e2)](_0x273fd0(0x1c7));
            }, 0x7d0);
        }
    }
    $(document)['on'](_0x193c26(0x1b3), _0x193c26(0xa2), function (_0x24828a) {
        var _0x237a25 = _0x193c26,
            _0x3cb4f3 = '#' + $(this)['attr'](_0x237a25(0x1cd))[_0x237a25(0x1db)]('#')[0x1];
        if ($(_0x3cb4f3)[_0x237a25(0x1b7)] && $(this)[_0x237a25(0x127)]('href')[_0x237a25(0x1db)]('#')[0x0] === '') {
            _0x24828a[_0x237a25(0xb0)]();
            var _0x58a7e8 = $('#header')[_0x237a25(0xff)](),
                _0x1df250 = $(_0x237a25(0x15e))['outerHeight']();
            _0x1df250 ? $('html, body')[_0x237a25(0x13d)]()[_0x237a25(0x169)]({
                'scrollTop': $(_0x3cb4f3)[_0x237a25(0xde)]()[_0x237a25(0x10a)] - _0x58a7e8 - _0x1df250 - 0x14
            }, 0x1f4) : $(_0x237a25(0xb1))[_0x237a25(0x13d)]()[_0x237a25(0x169)]({
                'scrollTop': $(_0x3cb4f3)['offset']()[_0x237a25(0x10a)] - _0x58a7e8 - 0x14
            }, 0x1f4), $(_0x3cb4f3)['addClass'](_0x237a25(0x1c7)), setTimeout(function () {
                var _0x2b335e = _0x237a25;
                $(_0x3cb4f3)[_0x2b335e(0x1e2)](_0x2b335e(0x1c7));
            }, 0x7d0);
        }
    }), $(document)['on'](_0x193c26(0x1b3), _0x193c26(0x17b), function (_0x2269c6) {
        var _0x16a479 = _0x193c26;
        _0x2269c6[_0x16a479(0xb0)]();
        let _0x520a89 = $(this)[_0x16a479(0x127)](_0x16a479(0x1cd)),
            _0x3e0917 = $(_0x16a479(0xc3)),
            _0x21e5e4 = $(_0x16a479(0xc3))[_0x16a479(0x9a)]();
        _0x520a89 && $[_0x16a479(0x10c)]({
            'url': _0x520a89,
            'beforeSend': function () {
                var _0x46b169 = _0x16a479;
                _0x3e0917[_0x46b169(0xf9)](_0x46b169(0xb2));
            },
            'complete': function () {
                var _0x147f5e = _0x16a479;
                _0x3e0917[_0x147f5e(0x1e2)]('loading');
            },
            'success': function (_0x98966f) {
                var _0x2a6bfd = _0x16a479;
                let _0x1ae570 = $(_0x98966f)[_0x2a6bfd(0x1c5)](_0x2a6bfd(0x1e1))[_0x2a6bfd(0x1ab)](),
                    _0xe6cb27 = $(_0x98966f)[_0x2a6bfd(0x1c5)](_0x2a6bfd(0x17b))[_0x2a6bfd(0x127)]('href');
                $(_0x2a6bfd(0x1e1))[_0x2a6bfd(0x12b)](_0x1ae570), _0x3e0917[_0x2a6bfd(0x177)](), post_convert(), post_sort(), lazyload(), timeago(), _0xe6cb27 ? _0x3e0917['attr'](_0x2a6bfd(0x1cd), _0xe6cb27) : _0x3e0917['fadeOut']();
            }
        });
    });
    if ($_config[_0x193c26(0x147)]['view'] == _0x193c26(0x1d8)) {
        var _0x29cb8e = $(_0x193c26(0xe9))[_0x193c26(0x9a)](),
            _0x14a071 = $(_0x193c26(0xe9))[_0x193c26(0x127)](_0x193c26(0x1cd));
        $(_0x193c26(0xe9))['load'](_0x14a071 + _0x193c26(0x103), function () {
            var _0x2cfd4a = _0x193c26,
                _0x27d04e = $(_0x2cfd4a(0xe9))[_0x2cfd4a(0x9a)]();
            $(_0x2cfd4a(0xe9))['html'](_0x2cfd4a(0x1bf) + _0x29cb8e + _0x2cfd4a(0xc4) + _0x27d04e + '</h3></div></div>'), $(_0x2cfd4a(0x183))[_0x2cfd4a(0x179)](_0x14a071 + _0x2cfd4a(0xd5), function () {
                var _0x150787 = _0x2cfd4a,
                    _0x974ea = $(this)['html'](),
                    _0x150e2b = _0x974ea['split'](_0x150787(0x117))[0x1],
                    _0x300c33 = _0x150e2b[_0x150787(0x1db)]('\"')[0x0];
                if (_0x300c33[_0x150787(0xc5)](_0x150787(0x1a8)) >= 0x0) $resize = _0x300c33[_0x150787(0x1db)]('=')[0x0] + '=w100-h100-c';
                else {
                    var _0x297307 = _0x300c33[_0x150787(0x1db)]('/')[0x7];
                    $resize = _0x300c33['replace']('1.bp.', _0x150787(0x189))[_0x150787(0x181)](_0x297307, _0x150787(0xc9));
                }
                $('a.blog-pager-older-link > figure')[_0x150787(0x1ab)](_0x150787(0x122) + $resize + _0x150787(0x16c))[_0x150787(0x1e2)](_0x150787(0xb2));
            });
        });
        var _0x19ffbe = $('a.blog-pager-newer-link')[_0x193c26(0x9a)](),
            _0x10cdda = $('a.blog-pager-newer-link')[_0x193c26(0x127)]('href');
        $(_0x193c26(0x113))[_0x193c26(0x179)](_0x10cdda + _0x193c26(0x103), function () {
            var _0x1546ff = _0x193c26,
                _0x597c10 = $(_0x1546ff(0x113))['text']();
            $(_0x1546ff(0x113))[_0x1546ff(0x1ab)]('<figure class=\"loading\"></figure><div class=\"flex right\"><div class=\"wrap\"><small><b>' + _0x19ffbe + _0x1546ff(0xc4) + _0x597c10 + '</h3></div></div>'), $('a.blog-pager-newer-link > figure')[_0x1546ff(0x179)](_0x10cdda + ' article .post-body img:first-of-type', function () {
                var _0x1bf7a4 = _0x1546ff,
                    _0x305815 = $(this)[_0x1bf7a4(0x1ab)](),
                    _0x355e8b = _0x305815[_0x1bf7a4(0x1db)]('src=\"')[0x1],
                    _0x36929a = _0x355e8b[_0x1bf7a4(0x1db)]('\"')[0x0];
                if (_0x36929a['indexOf'](_0x1bf7a4(0x1a8)) >= 0x0) $resize = _0x36929a[_0x1bf7a4(0x1db)]('=')[0x0] + _0x1bf7a4(0x1c9);
                else {
                    var _0x1e47e4 = _0x36929a['split']('/')[0x7];
                    $resize = _0x36929a['replace'](_0x1bf7a4(0x148), '2.bp.')[_0x1bf7a4(0x181)](_0x1e47e4, _0x1bf7a4(0xc9));
                }
                $('a.blog-pager-newer-link > figure')[_0x1bf7a4(0x1ab)]('<img src=\"' + $resize + '\"/>')[_0x1bf7a4(0x1e2)](_0x1bf7a4(0xb2));
            });
        });
    }
}

function _0x5512() {
    var _0x40c893 = ['#sort select', 'first', '[answer]', 'body', '                    <div class=\"cta\">                        <a class=\"link\" href=\"https://api.whatsapp.com/send?phone=', '<div class=\"video\"><iframe allowfullscreen=\"true\" data-shortcode=\"youtube\" data-src=\"', '.field', '[datetime]:not(.timeago)', 'td:first-of-type', 'terendah', 'sort', 'prev', 'order_text', 'preventDefault', 'html, body', 'loading', '#lightbox .lb-wrap figure .lb-img', '<a data-lightbox=\"lightbox\" href=\"', 'getTime', 'a[href=\"#darkmode\"]', 'detik', 'setItem', 'next', '[target=pop-video]', '#header', '#comments .datetime a:not(.timeago)', 'insertAfter', '<small>', 'data-pop-width', '</h4>', 'Floor', 'trigger', '#blog-pager .loadmore-btn', '</b></small><h3>', 'indexOf', 'iframe', 'remove', '</td><td>', 'w100-h100-c', 'gallery', 'ago', 'tahun', 'data-offset-top', 'article#', 'https://www.youtube.com/embed/', '?rel=0', 'Encrypted', 'currency', '[itemprop=\"releaseDate\"]', 'data-bg', ' article .post-body img:first-of-type', '.harga [data-harga]', '#lightbox .lb-np.lb-prev', '[id*=\"pop-\"]:not(\".pop-loaded\")', 'Escape', '[/answer]', '#lightbox .lb-np.lb-next', ', left=', 'scroll', 'offset', 'Bedroom', '&text=', '</s>                        <b data-harga=\"', 'timeago', '[data-lightbox=', '\" alt=\"image\"/>', '.faq-grid', 'data-lightbox-title', '.pop-close', '</b>                        ', 'a.blog-pager-older-link', '                    <div class=\"grid-info hide\">                        <div class=\"item\">                            <i class=\"icon\">   <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><polygon points=\"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2\"/><line x1=\"12\" x2=\"12\" y1=\"22\" y2=\"15.5\"/><polyline points=\"22 8.5 12 15.5 2 8.5\"/><polyline points=\"2 15.5 12 8.5 22 15.5\"/><line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"8.5\"/></svg>                             </i>                            <b>', '.Blog article', '[question]', 'toLowerCase', 'replaceAll', '.LinkList li a[href*=\"#\"]', 'terlama', '<h4>', 'getItem', '[data-src]:not([lazy=\"true\"])', '#lightbox .lb-wrap figure', 'jam', 'removeAttr', '<div class=\"question\"><p>', 'mousedown', 'addClass', 'search', 'wrap', '<i class=\"icon right\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z\"/></svg></i>', 'is_post', 'src', 'outerHeight', '<figcaption></figcaption>', 'data-popwin-height', 'background-image', ' article h1', 'ul:first', 'charAt', '.field .qty_floor td:last-of-type', '.post-body', 'true', '[itemprop=\"price\"]', 'top', 'tertinggi', 'ajax', '</table>', 'months', '\"></iframe></div>', '.field.facility tr', '714tDqcgu', 'data-src', 'a.blog-pager-newer-link', '</small>                        </div>                        <div class=\"item\">                            <i class=\"icon\">                                                         <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z\"></path></svg>                           </i>                            <b>', 'data-lightbox', 'title', 'src=\"', '.field .gallery img', '.slideshow', '<tr><td>', 'pop-content pop-loaded', '<div class=\"harga\"><span class=\"wrap\">', '[admin]', 'tagName', 'canonical', ', height=', 'Disalin!', '<img src=\"', 'key', 'appendTo', '4610sMonUM', 'selected', 'attr', 'css', 'a[href=\"#darkmode\"] i', '.pop', 'append', '</p>', 'execCommand', 'toggleClass', 'contextmenu', 'data-lightbox-desc', '</small>', 'hours', 'data-pop-height', 'keydown', 'data-id', 'language', 'pop-open', 'Bathroom', 'data-harga', '[title]', 'width', 'order_button_text', 'stop', 'fadeIn', '\" target=\"_blank\" rel=\"nofollow external\">Lihat Tautan</a>', '.nav-right', 'beforeunload', '#lightbox .lb-np.lb-prev, #lightbox .lb-np.lb-next', '597QzZVHh', 'format', 'figure.cover', '</p></div>', 'url', '1.bp.', '<img data-src=\"', 'exec', 'https://api.whatsapp.com/send?phone=', '<p>', '#lightbox .lb-wrap', '    </h3>  </div>  <div class=\"pop-close\">    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z\"/></svg>  </div>   </header> ', ' / ', '[target=\"_popwin\"]', '</code></pre>', 'datetime', 'w150-h150-c', 'data-url', '17800pOZSJs', 'seconds', '.field .qty_bedroom td:last-of-type', '\"><i class=\"pop-back\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z\"/></svg></i></a>', 'data-popwin-width', 'country_id', '</small>                        </div>                        <div class=\"item\">                            <i class=\"icon\">                                <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(4.000000, 2.000000)\"><path d=\"M11.5258621,0 L4.62931034,0 C1.78448276,0 0,1.9858782 0,5.17210944 L0,18.3230362 C0,19.2491977 0.733326703,20 1.63793103,20 C1.91180194,20 2.18135035,19.9300723 2.42241379,19.7969991 L8.03448276,16.6813769 L14.5689655,19.8146514 C14.7461483,19.8908228 14.9456376,19.8917645 15.1234989,19.8172691 C15.3013603,19.7427737 15.4430062,19.598951 15.5172414,19.4174757 C15.6267768,19.0830842 15.4940188,18.7157283 15.1982759,18.5348632 L8.70689655,15.4280671 C8.28279792,15.1893907 7.76892621,15.1893907 7.34482759,15.4280671 L1.72413793,18.5348632 C1.65968122,18.5709713 1.58169809,18.5709713 1.51724138,18.5348632 C1.45595472,18.494491 1.41993354,18.4240845 1.42241379,18.3495146 L1.42241379,5.17210944 C1.43103448,2.81553398 2.5862069,1.47396293 4.65517241,1.47396293 L11.5517241,1.47396293 C14.2068966,1.47396293 14.5948276,3.68049426 14.5948276,5.00441306 L14.5948276,5.60458959 L7.12931034,5.60458959 C6.93950091,5.61148655 6.76015756,5.69536443 6.63079621,5.83774183 C6.50143487,5.98011924 6.43267077,6.16931284 6.43965517,6.36363636 C6.44874481,6.74967865 6.75225353,7.06042014 7.12931034,7.06972639 L14.5689655,7.06972639 L14.5689655,14.7925861 C14.5689655,15.1971724 14.8893135,15.5251545 15.2844828,15.5251545 C15.6763098,15.5251836 15.9952792,15.2025475 16,14.8014122 L16,14.8014122 L16,5.00441306 C16,1.9152692 14.2931034,0 11.5258621,0 Z\"></path></g></svg>                           </i>                            <b>', 'Salin', 'lh3.googleusercontent.com', '.is_single article .attr-sticky', 'keyCode', '.field.facility', '<div class=\"pop\"></div>', '<a href=\"', '        <div id=\"lightbox\">            <div class=\"lb-wrap\">                <figure>                    <div class=\"lb-img\">                        <div class=\"lb-count\"></div>                    </div>                    <nav class=\"lb-nav\">                        <div class=\"lb-np lb-prev\"></div>                        <div class=\"lb-close\"></div>                        <div class=\"lb-np lb-next\"></div>                    </nav>                </figure>            </div>        </div>    ', '\" style=\"display:none;\"/>', '.pop-title h3', '3.bp.blogspot.com', '#lightbox .lb-close', '4785585CiXfli', 'animate', 'lightbox_open', 'td:last-of-type', '\"/>', '\" target=\"_popwin\">                            <i class=\"icon left\">                                <svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z\"></path></svg>                            </i>                             ', 'toggle', '%0A', '#lightbox .lb-wrap figure .lb-img img', '10204yieZGT', '146633nCwUcQ', 'local', '[data-lightbox]', '.pop-content', '1.bp.blogspot.com', 'show', 'hasClass', 'load', 'cta', '.loadmore-btn', 'prop', '<span class=\"dropdown-title\"></span>', '892683xrZXJJ', 'active', 'hostname', 'replace', '\" title=\"', 'a.blog-pager-older-link > figure', 'https://www.youtube.com/watch?v=', 'target', '#pop-faq', 'scrollTop', '</b>                            <small>', '2.bp.', 'data-lightbox-index', '  <button class=\"nav-left\">    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z\"/></svg>  </button>  <button class=\"nav-right\">    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z\"/></svg>  </button>   ', '[itemprop=\"author\"] b', '.slideshow-item, .widget', 'data-pop-title', '</td></tr>', 'last', '.field .attr_price td:last-of-type', 'content', 'reverse', '[data-feed]', 'hash', '#sort', '#lightbox .lb-np', ' )\"/></a>', '.pop.open', '   <header class=\"pop-header\">  <div class=\"pop-title\">    <h3>   ', '[data-shortcode]', '[?&]', '.dropdown', 'img', 'round', '#lightbox', '8zGCjEp', 'parent', 'javascript:void(0)', 'figure.cover a', 'menit', 'name', '<div class=\"pop-wrap\"></div>', 'blogger.googleusercontent.com', 'open', '<a data-shortcode=\"url\" href=\"', 'html', '.field .discount_price td:last-of-type', '7612mBXdWp', 'NumberFormat', 'substr', 'siblings', 'Kirim via WhatsApp?', '.LinkList', 'click', '#lightbox .lb-np.lb-prev:visible', '.field .normal_price td:last-of-type', 'change', 'length', 'which', 'slice', '<table class=\"facility\">', 'Support', '[data-lightbox=\"', '                    ', 'whatsapp', '<figure class=\"loading\"></figure><div class=\"flex left\"><div class=\"wrap\"><small><b>', 'terbaru', 'Framework', '[data-bg]', '#lightbox .lb-np.lb-next:visible', 'each', 'find', '374940SAPokD', 'focus', 'height', '=w100-h100-c', '[href=\"', '                        </a>                        <a class=\"share\" target=\"pop-share\">                            <i class=\"icon\">                                <svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z\"/></svg>                            </i>                        </a>                    </div>                ', '.nav-left', 'href', '\\$&', 'toString', '?autoplay=1&showinfo=0', 'join', 'darkmode', '[id=pop-video] iframe', 'data-hide-id', '.title', 'val', 'dropdown', 'single', '#lightbox .lb-wrap figure figcaption', 'stopPropagation', 'split', 'lazy', ' ( © ', 'location', '2.bp.blogspot.com', 'page', '.Blog .is_loop', 'removeClass', '.slideshow-item:visible, .widget:visible', '%0A%0Avia. ', 'url(', 'days', '<img style=\"display:block;width:100%;border-radius:10px;\" data-shortcode=\"img\" src=\"', 'closest', '#lightbox .lb-count', 'data-delay', '\"></a>', '.pop-wrap', 'text', '#pop-share .copy button', 'select', 'pop-video', 'yang lalu', 'hide', '.field .qty_bathroom td:last-of-type', '<pre data-shortcode=\"code\"><code>', 'a[href*=\"#\"]'];
    _0x5512 = function () {
        return _0x40c893;
    };
    return _0x5512();
}

function slideshow() {
    var _0x40d7c2 = _0x5607;
    $(_0x40d7c2(0x119))[_0x40d7c2(0x1c4)](function () {
        var _0x5be25d = _0x40d7c2,
            _0x1abd40 = $(this),
            _0x1a2967 = 0xfa0,
            _0x2c71f7 = parseInt(_0x1abd40['attr'](_0x5be25d(0x97))),
            _0x4de8d8 = 0x3e8,
            _0x23af46 = parseInt(_0x1abd40[_0x5be25d(0x127)]('data-fade')),
            _0x237ea7;
        _0x2c71f7[_0x5be25d(0x1b7)] && (_0x1a2967 = _0x2c71f7), _0x23af46[_0x5be25d(0x1b7)] && (_0x4de8d8 = _0x23af46), $(_0x5be25d(0x18d), _0x1abd40)[_0x5be25d(0x1b7)] > 0x1 && (_0x237ea7 = setInterval(function () {
            var _0x1556cb = _0x5be25d;
            $(_0x1556cb(0x1e3), _0x1abd40)[_0x1556cb(0x1c4)](function () {
                var _0x194930 = _0x1556cb,
                    _0x4708ba = $(this);
                _0x4708ba['hide'](), _0x4708ba['next'](_0x194930(0x18d))[_0x194930(0x1b7)] ? _0x4708ba[_0x194930(0xb9)]('.slideshow-item, .widget')[_0x194930(0x13e)](_0x4de8d8) : _0x4708ba[_0x194930(0x95)]('.slideshow')[_0x194930(0x1c5)](_0x194930(0x18d))['first']()[_0x194930(0x13e)](_0x4de8d8);
            });
        }, _0x1a2967), $(this)[_0x5be25d(0x12b)](_0x5be25d(0x18b))), $(_0x5be25d(0x1cc), _0x1abd40)['on'](_0x5be25d(0x1b3), function () {
            var _0x4fba22 = _0x5be25d;
            clearInterval(_0x237ea7), $(_0x4fba22(0x1e3), _0x1abd40)[_0x4fba22(0x1c4)](function () {
                var _0x568596 = _0x4fba22,
                    _0x1f4ea3 = $(this);
                _0x1f4ea3[_0x568596(0x9f)](), _0x1f4ea3[_0x568596(0xae)](_0x568596(0x18d))[_0x568596(0x1b7)] ? _0x1f4ea3[_0x568596(0xae)]('.slideshow-item, .widget')['fadeIn'](_0x4de8d8) : _0x1f4ea3['closest'](_0x568596(0x119))[_0x568596(0x1c5)](_0x568596(0x18d))[_0x568596(0x190)]()['fadeIn'](_0x4de8d8);
            });
        }), $(_0x5be25d(0x140), _0x1abd40)['on'](_0x5be25d(0x1b3), function () {
            var _0x234c34 = _0x5be25d;
            clearInterval(_0x237ea7), $(_0x234c34(0x1e3), _0x1abd40)[_0x234c34(0x1c4)](function () {
                var _0x12cbc5 = _0x234c34,
                    _0x4cd016 = $(this);
                _0x4cd016[_0x12cbc5(0x9f)](), _0x4cd016['next'](_0x12cbc5(0x18d))[_0x12cbc5(0x1b7)] ? _0x4cd016[_0x12cbc5(0xb9)]('.slideshow-item, .widget')[_0x12cbc5(0x13e)](_0x4de8d8) : _0x4cd016['closest'](_0x12cbc5(0x119))[_0x12cbc5(0x1c5)](_0x12cbc5(0x18d))[_0x12cbc5(0xa4)]()[_0x12cbc5(0x13e)](_0x4de8d8);
            });
        });
    });
}

function get_url_parameter(_0x3d3f8e, _0x480e54) {
    var _0x2efc7d = _0x5607;
    _0x3d3f8e = _0x3d3f8e[_0x2efc7d(0x181)](/[\[\]]/g, _0x2efc7d(0x1ce));
    var _0x5195a5 = new RegExp(_0x2efc7d(0x19c) + _0x3d3f8e + '(=([^&#]*)|&|#|$)'),
        _0x10ff22 = _0x5195a5[_0x2efc7d(0x14a)](_0x480e54);
    if (!_0x10ff22) return null;
    if (!_0x10ff22[0x2]) return '';
    return decodeURIComponent(_0x10ff22[0x2]['replace'](/\+/g, ' '));
}

function darkmode() {
    var _0x586a4c = _0x5607;
    localStorage[_0x586a4c(0xf2)]('darkmode') == 0x1 && $(_0x586a4c(0x129))['toggle'](), $(_0x586a4c(0xb6))['on']('click', function (_0x26ba74) {
        var _0x49082e = _0x586a4c;
        _0x26ba74[_0x49082e(0xb0)](), $(_0x49082e(0x1ab))['toggleClass']('dark'), $('i', this)[_0x49082e(0x16e)](), localStorage[_0x49082e(0xf2)](_0x49082e(0x1d2)) == 0x1 ? localStorage[_0x49082e(0xb8)]('darkmode', 0x0) : localStorage['setItem'](_0x49082e(0x1d2), 0x1), darkmode_head();
    });
}

function post_sort() {
    var _0x24807e = _0x5607;
    $('#sort select')['on'](_0x24807e(0x1b6), function () {
        var _0x1a5398 = _0x24807e;
        $(_0x1a5398(0x196))[_0x1a5398(0xf9)](_0x1a5398(0xb2));
        if ($(this)[_0x1a5398(0x1d6)]() == _0x1a5398(0x1c0)) {
            var _0x23d25b = $(_0x1a5398(0xeb));
            _0x23d25b[_0x1a5398(0xad)](function (_0x39a524, _0x130557) {
                var _0x162bf1 = _0x1a5398;
                return new Date($(_0x162bf1(0xd3), _0x130557)['attr'](_0x162bf1(0x192)))[_0x162bf1(0xb5)]() - new Date($(_0x162bf1(0xd3), _0x39a524)[_0x162bf1(0x127)]('content'))[_0x162bf1(0xb5)]();
            }), setTimeout(function () {
                var _0x4e1547 = _0x1a5398;
                $('.Blog .is_loop')[_0x4e1547(0x12b)](_0x23d25b), $('#sort')[_0x4e1547(0x1e2)](_0x4e1547(0xb2)), lazyload();
            }, 0x1f4);
        }
        if ($(this)['val']() == _0x1a5398(0xf0)) {
            var _0x23d25b = $('.Blog article');
            _0x23d25b['sort'](function (_0x38e4cc, _0x39487d) {
                var _0x2df42d = _0x1a5398;
                return new Date($('[itemprop=\"releaseDate\"]', _0x38e4cc)['attr'](_0x2df42d(0x192)))[_0x2df42d(0xb5)]() - new Date($('[itemprop=\"releaseDate\"]', _0x39487d)[_0x2df42d(0x127)](_0x2df42d(0x192)))[_0x2df42d(0xb5)]();
            }), setTimeout(function () {
                var _0x2353bd = _0x1a5398;
                $(_0x2353bd(0x1e1))[_0x2353bd(0x12b)](_0x23d25b), $(_0x2353bd(0x196))[_0x2353bd(0x1e2)](_0x2353bd(0xb2)), lazyload();
            }, 0x1f4);
        }
        if ($(this)[_0x1a5398(0x1d6)]() == _0x1a5398(0xac)) {
            var _0x23d25b = $(_0x1a5398(0xeb));
            _0x23d25b[_0x1a5398(0xad)](function (_0x60e7c1, _0x39bee9) {
                var _0x1ff207 = _0x1a5398;
                return $(_0x1ff207(0xd6), _0x60e7c1)['attr']('data-harga') - $(_0x1ff207(0xd6), _0x39bee9)[_0x1ff207(0x127)](_0x1ff207(0x139));
            }), setTimeout(function () {
                var _0x9f30b5 = _0x1a5398;
                $(_0x9f30b5(0x1e1))['append'](_0x23d25b), $(_0x9f30b5(0x196))['removeClass'](_0x9f30b5(0xb2)), lazyload();
            }, 0x1f4);
        }
        if ($(this)[_0x1a5398(0x1d6)]() == _0x1a5398(0x10b)) {
            var _0x23d25b = $(_0x1a5398(0xeb));
            _0x23d25b['sort'](function (_0x49745e, _0x1a1eb4) {
                var _0x4b4fd2 = _0x1a5398;
                return $(_0x4b4fd2(0xd6), _0x1a1eb4)[_0x4b4fd2(0x127)]('data-harga') - $(_0x4b4fd2(0xd6), _0x49745e)[_0x4b4fd2(0x127)]('data-harga');
            }), setTimeout(function () {
                var _0x1f9d34 = _0x1a5398;
                $(_0x1f9d34(0x1e1))[_0x1f9d34(0x12b)](_0x23d25b), $('#sort')['removeClass']('loading'), lazyload();
            }, 0x1f4);
        }
    }), $(_0x24807e(0xa3))[_0x24807e(0x1d6)]() != _0x24807e(0x1c0) && $(_0x24807e(0xa3))[_0x24807e(0xc2)]('change');
}

function post_convert() {
    $('article:not(.field_loaded)')['each'](function () {
        var _0x757855 = _0x5607,
            _0x924980 = $(this);
        if ($(_0x757855(0xa9), _0x924980)[_0x757855(0x1b7)]) {
            _0x924980[_0x757855(0xf9)]('field_loaded');
            _0x924980[_0x757855(0x178)](_0x757855(0xfd)) && $('.field .gallery', this)[_0x757855(0x1b7)] && ($(_0x757855(0x118), this)[_0x757855(0x1c4)](function (_0x5e3e61) {
                var _0x4ba4fb = _0x757855;
                if (_0x5e3e61 > 0x0) {
                    var _0x10ca27 = $(this)['attr'](_0x4ba4fb(0xfe)),
                        _0x1dc4d4 = _0x10ca27,
                        _0x1364a0 = _0x10ca27;
                    if (_0x10ca27[_0x4ba4fb(0xc5)](_0x4ba4fb(0x1a8)) >= 0x0) _0x1dc4d4 = _0x10ca27[_0x4ba4fb(0x1db)]('=')[0x0] + '=w1000', _0x1364a0 = _0x10ca27[_0x4ba4fb(0x1db)]('=')[0x0] + '=w150-h150-c';
                    else {
                        var _0x2d42ce = _0x10ca27[_0x4ba4fb(0x1db)]('/')[0x7];
                        _0x1dc4d4 = _0x10ca27[_0x4ba4fb(0x181)]('1.bp.', '2.bp.')[_0x4ba4fb(0x181)](_0x2d42ce, 'w1000'), _0x1364a0 = _0x10ca27[_0x4ba4fb(0x181)](_0x4ba4fb(0x148), _0x4ba4fb(0x189))['replace'](_0x2d42ce, _0x4ba4fb(0x153));
                    }
                    $(_0x4ba4fb(0x145), _0x924980)[_0x4ba4fb(0x12b)](_0x4ba4fb(0x162) + _0x1dc4d4 + _0x4ba4fb(0x182) + $_config[_0x4ba4fb(0x1e0)]['name'] + _0x4ba4fb(0x1dd) + $_config['page']['title'] + ' )\"><img data-src=\"' + _0x1364a0 + '\" alt=\"' + $_config[_0x4ba4fb(0x1e0)]['name'] + ' ( © ' + $_config[_0x4ba4fb(0x1e0)][_0x4ba4fb(0x116)] + _0x4ba4fb(0x198));
                }
            }), $('figure.cover a', _0x924980)[_0x757855(0x127)](_0x757855(0x115), _0x757855(0xca)), $(_0x757855(0x1a4), _0x924980)[_0x757855(0x127)](_0x757855(0xe6), $_config[_0x757855(0x1e0)][_0x757855(0x1a6)] + '<br/><small style=\"opacity:.5;\">© ' + $_config['page']['title'] + '</small>'));
            var _0x47e366 = '';
            $(_0x757855(0x1b5), _0x924980)[_0x757855(0x1b7)] && (_0x47e366 = $('.field .normal_price td:last-of-type', _0x924980)[_0x757855(0x9a)]()[_0x757855(0xee)](' ', '')[_0x757855(0xee)]('.', '')[_0x757855(0xee)](',', '')[_0x757855(0xee)](/(?:\r\n|\r|\n)/g, ''));
            var _0xe60483 = '';
            $(_0x757855(0x1ac), _0x924980)[_0x757855(0x1b7)] && (_0xe60483 = $('.field .discount_price td:last-of-type', _0x924980)[_0x757855(0x9a)]()[_0x757855(0xee)](' ', '')[_0x757855(0xee)]('.', '')[_0x757855(0xee)](',', '')[_0x757855(0xee)](/(?:\r\n|\r|\n)/g, ''));
            var _0x151b52 = '';
            $(_0x757855(0x191), _0x924980)['length'] && (_0x151b52 = $(_0x757855(0x191), _0x924980)[_0x757855(0x9a)]()[_0x757855(0xee)]('  ', '')['replaceAll'](/(?:\r\n|\r|\n)/g, ''));
            var _0x314bf9 = '';
            if (_0x47e366) {
                _0x314bf9 += _0x757855(0x11c);
                if (_0xe60483) {
                    var _0x5b6aad = '';
                    _0xe60483['includes']('%') ? (_0x5b6aad = _0xe60483['replaceAll']('%', ''), _0xe60483 = Number(_0x47e366 - _0x47e366 * _0x5b6aad / 0x64)) : _0x5b6aad = Math[_0x757855(0x19f)](0x64 - _0xe60483 / _0x47e366 * 0x64), _0x314bf9 += '                        <small class=\"persen\">-' + _0x5b6aad + '%</small>                        <s>' + format_price(_0x47e366, $_config[_0x757855(0x173)][_0x757855(0x15a)], $_config[_0x757855(0x173)][_0x757855(0xd2)]) + _0x757855(0xe1) + _0xe60483 + '\">' + format_price(_0xe60483, $_config[_0x757855(0x173)][_0x757855(0x15a)], $_config['local'][_0x757855(0xd2)]) + '</b>                        ' + (_0x151b52 ? _0x757855(0xbe) + _0x151b52 + _0x757855(0x131) : '') + _0x757855(0x1bd), $('[itemprop=\"price\"]', this)['attr'](_0x757855(0x192), _0xe60483);
                } else _0x314bf9 += '                        <b data-harga=\"' + _0x47e366 + '\">' + format_price(_0x47e366, $_config['local'][_0x757855(0x15a)], $_config['local']['currency']) + _0x757855(0xe8) + (_0x151b52 ? _0x757855(0xbe) + _0x151b52 + _0x757855(0x131) : '') + _0x757855(0x1bd), $(_0x757855(0x109), this)[_0x757855(0x127)](_0x757855(0x192), _0x47e366);
                _0x314bf9 += '</span></div>';
            }
            _0x924980[_0x757855(0x178)](_0x757855(0xfd)) && ($admin = encodeURIComponent($(_0x757855(0x18c), this)['text']())['replaceAll'](_0x757855(0x16f), ''), _0x5ac25d = encodeURIComponent($('h1.title', this)[_0x757855(0x9a)]())['replaceAll'](_0x757855(0x16f), ''), _0x314bf9 += _0x757855(0xa7) + $_config['cta'][_0x757855(0x1be)][_0x757855(0xee)]('+', '')['replaceAll'](' ', '')[_0x757855(0xee)]('-', '') + '&text=' + $_config[_0x757855(0x17a)][_0x757855(0xaf)][_0x757855(0xee)](_0x757855(0x11d), $admin)[_0x757855(0xee)](_0x757855(0x13a), _0x5ac25d) + _0x757855(0x1e4) + $_config[_0x757855(0x147)]['canonical'] + _0x757855(0x16d) + $_config[_0x757855(0x17a)][_0x757855(0x13c)] + _0x757855(0x1cb));
            var _0x1591b6 = '';
            $(_0x757855(0x157), _0x924980)['length'] && (_0x1591b6 = $(_0x757855(0x157), _0x924980)[_0x757855(0x9a)]()['replaceAll']('  ', '')['replaceAll'](/(?:\r\n|\r|\n)/g, ''));
            var _0x5be9e4 = '';
            $(_0x757855(0xa0), _0x924980)[_0x757855(0x1b7)] && (_0x5be9e4 = $(_0x757855(0xa0), _0x924980)['text']()[_0x757855(0xee)]('  ', '')[_0x757855(0xee)](/(?:\r\n|\r|\n)/g, ''));
            var _0x299254 = '';
            $(_0x757855(0x106), _0x924980)['length'] && (_0x299254 = $('.field .qty_floor td:last-of-type', _0x924980)[_0x757855(0x9a)]()[_0x757855(0xee)]('  ', '')[_0x757855(0xee)](/(?:\r\n|\r|\n)/g, ''));
            _0x1591b6 && _0x5be9e4 && _0x299254 && (_0x314bf9 += _0x757855(0xea) + _0x1591b6 + '</b>                            <small>' + ($_config['language'] == 'in' ? _0x757855(0x1c1) : _0x757855(0xdf)) + _0x757855(0x114) + _0x5be9e4 + _0x757855(0x188) + ($_config[_0x757855(0x136)] == 'in' ? _0x757855(0xd1) : _0x757855(0x138)) + _0x757855(0x15b) + _0x299254 + '</b>                            <small>' + ($_config[_0x757855(0x136)] == 'in' ? _0x757855(0x1bb) : _0x757855(0xc1)) + '</small>                        </div>                    </div>                ');
            var _0x5ac25d = $(_0x757855(0x1d5), this);
            $(_0x314bf9)[_0x757855(0xbd)](_0x5ac25d);
            if ($(_0x757855(0x160), _0x924980)[_0x757855(0x1b7)]) {
                var _0x453eb8 = _0x757855(0x1ba);
                $(_0x757855(0x110), _0x924980)[_0x757855(0x1c4)](function () {
                    var _0x1a206d = _0x757855,
                        _0xfbe38f = $(this),
                        _0x1cad29 = $(_0x1a206d(0xab), _0xfbe38f)[_0x1a206d(0x9a)]()[_0x1a206d(0xee)]('  ', '')[_0x1a206d(0xee)](/(?:\r\n|\r|\n)/g, ''),
                        _0x43c98d = $(_0x1a206d(0x16b), _0xfbe38f)[_0x1a206d(0x9a)]()[_0x1a206d(0xee)]('  ', '')['replaceAll'](/(?:\r\n|\r|\n)/g, '');
                    _0x43c98d != '' && (_0x453eb8 += _0x1a206d(0x11a) + _0x1cad29 + _0x1a206d(0xc8) + _0x43c98d + _0x1a206d(0x18f));
                }), _0x453eb8 += _0x757855(0x10d), $('.post-body', _0x924980)[_0x757855(0x12b)](_0x453eb8);
            }
            $('#pop-booking form#whatsapp button')['on']('click', function () {
                var _0x12478e = _0x757855;
                $('#pop-booking form#whatsapp button')[_0x12478e(0x1e2)](_0x12478e(0x126)), $(this)['addClass'](_0x12478e(0x126));
            });
        }
    });
}

function popwin() {
    var _0x30f188 = _0x5607;
    $(document)['on'](_0x30f188(0x1b3), _0x30f188(0x150), function (_0x330dd4) {
        var _0x219f3d = _0x30f188;
        _0x330dd4[_0x219f3d(0x1da)](), _0x330dd4[_0x219f3d(0xb0)]();
        var _0xe22820 = $(this)[_0x219f3d(0x127)](_0x219f3d(0x1cd)),
            _0x21a152 = $(this)[_0x219f3d(0x127)](_0x219f3d(0x159)),
            _0x4ee0de = $(this)[_0x219f3d(0x127)](_0x219f3d(0x101)),
            _0x215cb9 = 0x3c0;
        _0x21a152 && (_0x215cb9 = _0x21a152);
        var _0x5e40d8 = 0x21c;
        _0x4ee0de && (_0x5e40d8 = _0x4ee0de);
        var _0x1190c4 = Number(screen[_0x219f3d(0x13b)] / 0x2 - _0x215cb9 / 0x2),
            _0x1397b1 = Number(screen[_0x219f3d(0x1c8)] / 0x2 - _0x5e40d8 / 0x2),
            _0x997776 = window[_0x219f3d(0x1a9)](_0xe22820, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + _0x215cb9 + _0x219f3d(0x120) + _0x5e40d8 + ', top=' + _0x1397b1 + _0x219f3d(0xdc) + _0x1190c4);
        _0x997776[_0x219f3d(0x1c7)]();
    });
}

function shortcode() {
    var _0x368014 = _0x5607;
    $(_0x368014(0x107))[_0x368014(0x1c4)](function () {
        var _0xcd4003 = _0x368014;
        $(this)[_0xcd4003(0x1ab)]($(this)[_0xcd4003(0x1ab)]()[_0xcd4003(0x181)](/\[youtube\]/g, _0xcd4003(0xa8))[_0xcd4003(0x181)](/\[\/youtube\]/g, _0xcd4003(0x10f))[_0xcd4003(0x181)](/\[code\]/g, _0xcd4003(0xa1))[_0xcd4003(0x181)](/\[\/code\]/g, _0xcd4003(0x151))[_0xcd4003(0x181)](/\[img\]/g, _0xcd4003(0x94))['replace'](/\[\/img\]/g, _0xcd4003(0xe4))[_0xcd4003(0x181)](/\[url\]/g, _0xcd4003(0x1aa))[_0xcd4003(0x181)](/\[\/url\]/g, _0xcd4003(0x13f)));
    }), $(_0x368014(0x19b))[_0x368014(0x1c4)](function () {
        var _0x2eaeff = _0x368014,
            _0x1b406e = $(this)[_0x2eaeff(0x127)]('data-shortcode');
        if (_0x1b406e == _0x2eaeff(0x19e)) {
            var _0x276691 = $(this)[_0x2eaeff(0x127)](_0x2eaeff(0xfe));
            $(this)[_0x2eaeff(0xfb)](_0x2eaeff(0xb4) + _0x276691 + _0x2eaeff(0x98));
        }
        if (_0x1b406e == 'youtube') {
            var _0x54a782 = $(this)[_0x2eaeff(0x127)]('data-src'),
                _0x347064 = _0x54a782[_0x2eaeff(0x1db)]('/')[0x3];
            _0x54a782[_0x2eaeff(0xc5)](_0x2eaeff(0x184)) >= 0x0 && (_0x347064 = get_url_parameter('v', _0x54a782)), $(this)[_0x2eaeff(0x127)]('data-src', _0x2eaeff(0xcf) + _0x347064 + _0x2eaeff(0xd0));
        }
    });
}

function _0x5607(_0x1f7825, _0x4e72fd) {
    var _0x5512b2 = _0x5512();
    return _0x5607 = function (_0x5607a0, _0x16f663) {
        _0x5607a0 = _0x5607a0 - 0x93;
        var _0x407ac4 = _0x5512b2[_0x5607a0];
        return _0x407ac4;
    }, _0x5607(_0x1f7825, _0x4e72fd);
}

function timeago() {
    var _0x2d6e80 = _0x5607;
    $(_0x2d6e80(0xaa))['each'](function () {
        var _0x55104f = _0x2d6e80,
            _0x40e79c = $(this),
            _0x2b0e16 = _0x40e79c[_0x55104f(0x127)](_0x55104f(0x152));
        _0x40e79c[_0x55104f(0xf9)](_0x55104f(0xe2)), !_0x40e79c[_0x55104f(0x127)]('title') && _0x40e79c[_0x55104f(0x127)](_0x55104f(0x116), _0x2b0e16), _0x40e79c['text'](_0x25ab62(_0x2b0e16));
    });

    function _0x25ab62(_0x1f1dbc) {
        var _0x36712c = _0x2d6e80,
            _0x4a93d0 = _0x36712c(0xcb),
            _0x4a49eb = _0x36712c(0x156),
            _0x341424 = 'minutes',
            _0x29fc49 = _0x36712c(0x132),
            _0x6b3778 = _0x36712c(0x93),
            _0x59b247 = _0x36712c(0x10e),
            _0x523f1b = 'years';
        $_config[_0x36712c(0x173)]['country_id'] == 'id-ID' && (_0x4a93d0 = _0x36712c(0x9e), _0x4a49eb = _0x36712c(0xb7), _0x341424 = _0x36712c(0x1a5), _0x29fc49 = _0x36712c(0xf5), _0x6b3778 = 'hari', _0x59b247 = 'bulan', _0x523f1b = _0x36712c(0xcc));
        var _0x175695 = new Date(_0x1f1dbc),
            _0x5b71a2 = 0x36ee80,
            _0x3aa3b2 = 0x18 * _0x5b71a2,
            _0x4e52b7 = 0x1e * _0x3aa3b2,
            _0x302329 = 0x16d * _0x3aa3b2,
            _0x93025d = _0x4a93d0,
            _0x15fed2 = new Date() - _0x175695;
        return _0x15fed2 < 0xea60 ? Math[_0x36712c(0x19f)](_0x15fed2 / 0x3e8) + ' ' + _0x4a49eb + ' ' + _0x93025d : _0x15fed2 < _0x5b71a2 ? Math[_0x36712c(0x19f)](_0x15fed2 / 0xea60) + ' ' + _0x341424 + ' ' + _0x93025d : _0x15fed2 < _0x3aa3b2 ? Math[_0x36712c(0x19f)](_0x15fed2 / _0x5b71a2) + ' ' + _0x29fc49 + ' ' + _0x93025d : _0x15fed2 < _0x4e52b7 ? Math[_0x36712c(0x19f)](_0x15fed2 / _0x3aa3b2) + ' ' + _0x6b3778 + ' ' + _0x93025d : _0x15fed2 < _0x302329 ? Math[_0x36712c(0x19f)](_0x15fed2 / _0x4e52b7) + ' ' + _0x59b247 + ' ' + _0x93025d : Math[_0x36712c(0x19f)](_0x15fed2 / _0x302329) + ' ' + _0x523f1b + ' ' + _0x93025d;
    }
    $(_0x2d6e80(0xbc))[_0x2d6e80(0x1c4)](function () {
        var _0x2324c8 = _0x2d6e80,
            _0x1c6ca1 = $(this),
            _0x25e411 = _0x1c6ca1[_0x2324c8(0x9a)]();
        _0x1c6ca1[_0x2324c8(0x127)](_0x2324c8(0x152), _0x25e411);
        var _0x21139d = _0x1c6ca1[_0x2324c8(0x127)]('datetime');
        _0x1c6ca1[_0x2324c8(0xf9)](_0x2324c8(0xe2)), _0x1c6ca1[_0x2324c8(0x127)]('title', _0x21139d), _0x1c6ca1[_0x2324c8(0x9a)](_0x25ab62(_0x21139d));
    });
}

function format_price(_0x2a25f9, _0xaa81e8, _0xf51c3b) {
    var _0x4f8642 = _0x5607;
    return new Intl[(_0x4f8642(0x1ae))](_0xaa81e8, {
        'style': 'currency',
        'currency': _0xf51c3b,
        'maximumSignificantDigits': 0x3
    })[_0x4f8642(0x144)](_0x2a25f9);
}

function separator(_0x2630cf, _0x20d322 = '') {
    var _0x428807 = _0x5607,
        _0x28d27c = '',
        _0x200d84 = _0x2630cf[_0x428807(0x1cf)]()[_0x428807(0x1db)]('')[_0x428807(0x193)]()['join']('');
    for (var _0x82a51c = 0x0; _0x82a51c < _0x200d84[_0x428807(0x1b7)]; _0x82a51c++)
        if (_0x82a51c % 0x3 == 0x0) _0x28d27c += _0x200d84[_0x428807(0x1af)](_0x82a51c, 0x3) + '.';
    return _0x20d322 ? _0x20d322 + ' ' + _0x28d27c[_0x428807(0x1db)]('', _0x28d27c[_0x428807(0x1b7)] - 0x1)['reverse']()[_0x428807(0x1d1)]('') : _0x28d27c[_0x428807(0x1db)]('', _0x28d27c[_0x428807(0x1b7)] - 0x1)['reverse']()[_0x428807(0x1d1)]('');
}

function pop() {
    var _0x25e52d = _0x5607;
    $(_0x25e52d(0xba))[_0x25e52d(0x1b7)] && ($pop_video_html = ' <div id=\"pop-video\" data-pop-title=\"Video\" data-pop-width=\"960\">   <div class=\"video\">  <iframe allowfullscreen=\"true\"></iframe>   </div> </div> ', $($pop_video_html)[_0x25e52d(0x124)]('body')), $(_0x25e52d(0xd8))['each'](function () {
        var _0x543f7d = _0x25e52d,
            _0xab5725 = $(this),
            _0x583a90 = _0xab5725[_0x543f7d(0x127)]('id'),
            _0x8b8729 = _0xab5725[_0x543f7d(0x127)](_0x543f7d(0x18e)),
            _0x859b13 = _0xab5725[_0x543f7d(0x127)](_0x543f7d(0xbf)),
            _0x81a3ec = _0xab5725['attr']('data-pop-height');
        _0xab5725['wrap'](_0x543f7d(0x161)), _0xab5725[_0x543f7d(0xfb)](_0x543f7d(0x1a7)), _0xab5725['addClass'](_0x543f7d(0x11b));
        var _0x4a6d5a = _0x543f7d(0x19a) + _0x8b8729 + _0x543f7d(0x14e);
        _0xab5725['closest'](_0x543f7d(0x99))['prepend'](_0x4a6d5a), _0x859b13 && _0xab5725['closest'](_0x543f7d(0x99))['css'](_0x543f7d(0x13b), _0x859b13);
    }), $(_0x25e52d(0xe7))['on']('click', function () {
        var _0x599ded = _0x25e52d;
        $(this)['closest'](_0x599ded(0x12a))[_0x599ded(0x1e2)](_0x599ded(0x1a9)), $(_0x599ded(0xa6))[_0x599ded(0x1e2)](_0x599ded(0x137)), $(_0x599ded(0x1d3))[_0x599ded(0x1b7)] && $(_0x599ded(0x1d3))[_0x599ded(0x127)](_0x599ded(0xfe), '');
    }), $(document)['on'](_0x25e52d(0x1b3), '[target*=\"pop-\"]', function (_0x457ad3) {
        var _0x1a943c = _0x25e52d;
        _0x457ad3['preventDefault']();
        var _0x1e83dc = $(this),
            _0x4f0194 = _0x1e83dc[_0x1a943c(0x127)](_0x1a943c(0x185)),
            _0x14438e = _0x1e83dc[_0x1a943c(0x127)](_0x1a943c(0x18e)) ? _0x1e83dc[_0x1a943c(0x127)](_0x1a943c(0x18e)) : $('#' + _0x4f0194)['attr'](_0x1a943c(0x18e)),
            _0x203afb = _0x1e83dc[_0x1a943c(0x127)](_0x1a943c(0xbf)),
            _0x28e9e1 = _0x1e83dc[_0x1a943c(0x127)](_0x1a943c(0x133));
        _0x1e83dc['closest'](_0x1a943c(0x12a))[_0x1a943c(0x1e2)](_0x1a943c(0x1a9)), $(_0x1a943c(0xa6))[_0x1a943c(0x1e2)](_0x1a943c(0x137));
        $('#' + _0x4f0194)['length'] && ($('body')['addClass']('pop-open'), $('#' + _0x4f0194)['closest'](_0x1a943c(0x12a))[_0x1a943c(0xf9)](_0x1a943c(0x1a9)), _0x1e83dc[_0x1a943c(0x95)]('.pop-content')[_0x1a943c(0x1b7)] && ($back_id = _0x1e83dc['closest'](_0x1a943c(0x175))['attr']('id'), _0x14438e = '<a target=\"' + $back_id + _0x1a943c(0x158) + _0x14438e), _0x14438e && $('#' + _0x4f0194)[_0x1a943c(0x95)]('.pop')['find'](_0x1a943c(0x165))[_0x1a943c(0x1ab)](_0x14438e), $('[data-src]')[_0x1a943c(0x1c4)](function () {
            var _0x285bfb = _0x1a943c,
                _0xfbbbb5 = $(this)[_0x285bfb(0x127)]('data-src');
            $(this)['attr'](_0x285bfb(0xfe), _0xfbbbb5)[_0x285bfb(0xf6)](_0x285bfb(0x112));
        }));
        if (_0x4f0194 == _0x1a943c(0x9d)) {
            $href = $(this)[_0x1a943c(0x127)](_0x1a943c(0x1cd));
            var _0x12fa1b = $href['split']('/')[0x3];
            $href[_0x1a943c(0xc5)](_0x1a943c(0x184)) >= 0x0 && (_0x12fa1b = get_url_parameter('v', $href)), $(_0x1a943c(0x1d3))[_0x1a943c(0x127)](_0x1a943c(0xfe), _0x1a943c(0xcf) + _0x12fa1b + _0x1a943c(0x1d0));
        }
    }), $(document)['on'](_0x25e52d(0x1b3), _0x25e52d(0x199), function () {
        var _0x2830a3 = _0x25e52d;
        $(this)['find'](_0x2830a3(0xe7))[_0x2830a3(0xc2)](_0x2830a3(0x1b3));
    }), $(document)['on']('click', _0x25e52d(0x99), function (_0x79fc6) {
        var _0x3d1cb7 = _0x25e52d;
        _0x79fc6[_0x3d1cb7(0x1da)]();
    });
}

function lazyload() {
    var _0x12c37a = _0x5607;
    $(_0x12c37a(0x1c2))[_0x12c37a(0x1c4)](function () {
        var _0x2e392a = _0x12c37a,
            _0x12c222 = $(this),
            _0xb71c71 = _0x12c222[_0x2e392a(0x127)]('data-bg');
        _0x12c222[_0x2e392a(0x128)](_0x2e392a(0x102), _0x2e392a(0x1e5) + _0xb71c71 + ')')[_0x2e392a(0xf6)](_0x2e392a(0xd4));
    }), $(_0x12c37a(0xf3))[_0x12c37a(0x1c4)](function () {
        var _0x3dd75d = _0x12c37a,
            _0x3b8ea0 = $(this),
            _0x5df627 = $(window)[_0x3dd75d(0x1c8)](),
            _0x181661 = $(window)[_0x3dd75d(0x187)](),
            _0x4cf77d = _0x181661 + _0x5df627,
            _0x1aa19f = _0x3b8ea0[_0x3dd75d(0xde)]()[_0x3dd75d(0x10a)];
        _0x3b8ea0[_0x3dd75d(0x127)](_0x3dd75d(0xcd), _0x1aa19f);
        var _0x53c6d1 = _0x3b8ea0['attr'](_0x3dd75d(0x112));
        _0x53c6d1 = _0x53c6d1[_0x3dd75d(0x181)](_0x3dd75d(0x176), _0x3dd75d(0x15d)), _0x53c6d1 = _0x53c6d1[_0x3dd75d(0x181)](_0x3dd75d(0x1df), _0x3dd75d(0x15d)), _0x53c6d1 = _0x53c6d1['replace'](_0x3dd75d(0x166), _0x3dd75d(0x15d)), _0x53c6d1 = _0x53c6d1[_0x3dd75d(0x181)]('4.bp.blogspot.com', _0x3dd75d(0x15d));
        var _0x2956e9 = _0x3b8ea0[_0x3dd75d(0x17c)](_0x3dd75d(0x11e))[_0x3dd75d(0xed)]();
        if (_0x1aa19f <= _0x4cf77d) {
            if (_0x2956e9 == _0x3dd75d(0x19e)) _0x3b8ea0['attr'](_0x3dd75d(0xfe), _0x53c6d1)[_0x3dd75d(0xf6)]('data-src'), _0x3b8ea0[_0x3dd75d(0x127)](_0x3dd75d(0x1dc), _0x3dd75d(0x108));
            else _0x2956e9 == _0x3dd75d(0xc6) && (_0x3b8ea0['attr'](_0x3dd75d(0xfe), _0x53c6d1)['removeAttr']('data-src'), _0x3b8ea0[_0x3dd75d(0x127)]('lazy', _0x3dd75d(0x108)));
        }
    }), $(window)['on'](_0x12c37a(0xdd), function () {
        var _0x374b0a = _0x12c37a,
            _0x408984 = $(window)[_0x374b0a(0x1c8)](),
            _0x589a9c = $(window)['scrollTop'](),
            _0x111f65 = _0x589a9c + _0x408984;
        $(_0x374b0a(0xf3))[_0x374b0a(0x1c4)](function () {
            var _0x21e957 = _0x374b0a,
                _0x23cf46 = $(this),
                _0x5dfdd8 = $(window)[_0x21e957(0x1c8)](),
                _0x1fe12d = _0x23cf46['offset']()[_0x21e957(0x10a)],
                _0x27f389 = _0x23cf46[_0x21e957(0x127)](_0x21e957(0x112));
            _0x27f389 = _0x27f389['replace'](_0x21e957(0x176), _0x21e957(0x15d)), _0x27f389 = _0x27f389['replace'](_0x21e957(0x1df), _0x21e957(0x15d)), _0x27f389 = _0x27f389[_0x21e957(0x181)](_0x21e957(0x166), _0x21e957(0x15d)), _0x27f389 = _0x27f389['replace']('4.bp.blogspot.com', _0x21e957(0x15d));
            var _0xb1d2e1 = _0x23cf46[_0x21e957(0x17c)]('tagName')[_0x21e957(0xed)]();
            if (_0x1fe12d <= _0x111f65) {
                if (_0xb1d2e1 == 'img') _0x23cf46[_0x21e957(0x127)](_0x21e957(0xfe), _0x27f389)[_0x21e957(0xf6)](_0x21e957(0x112)), _0x23cf46[_0x21e957(0x127)](_0x21e957(0x1dc), _0x21e957(0x108));
                else _0xb1d2e1 == _0x21e957(0xc6) && (_0x23cf46[_0x21e957(0x127)]('src', _0x27f389)[_0x21e957(0xf6)](_0x21e957(0x112)), _0x23cf46[_0x21e957(0x127)](_0x21e957(0x1dc), _0x21e957(0x108)));
            }
        });
    });
}

function lightbox() {
    var _0xd75fce = _0x5607,
        _0x47430d = _0xd75fce(0x163);
    $(_0x47430d)[_0xd75fce(0x124)]('body'), $(_0xd75fce(0x174))[_0xd75fce(0x1c4)](function () {
        var _0x163966 = _0xd75fce,
            _0x5f1730 = $(this)[_0x163966(0x127)](_0x163966(0x115)),
            _0x5e47cb = $('[data-lightbox=' + _0x5f1730 + ']')[_0x163966(0x1b7)];
        _0x5e47cb > 0x1 && $(_0x163966(0xe3) + _0x5f1730 + ']')[_0x163966(0x1c4)](function (_0x12507f) {
            var _0x22f5bf = _0x163966;
            $(this)[_0x22f5bf(0x127)](_0x22f5bf(0x18a), _0x12507f + 0x1 + _0x22f5bf(0x14f) + _0x5e47cb);
        }), $(this)['on'](_0x163966(0xf8), function () {
            return ![];
        }), $(this)['on']('contextmenu', function () {
            var _0x2125c4 = _0x163966;
            return alert('© ' + location[_0x2125c4(0x180)]), ![];
        });
    }), $(document)['on']('click', _0xd75fce(0x174), function (_0x1b4fb6) {
        var _0x10c731 = _0xd75fce;
        _0x1b4fb6[_0x10c731(0xb0)]();
        var _0x200b45 = $(this),
            _0x43a0c1 = _0x200b45[_0x10c731(0x127)]('data-lightbox'),
            _0x2e585a = _0x200b45[_0x10c731(0x127)](_0x10c731(0x18a)),
            _0x40809a = _0x200b45[_0x10c731(0x127)](_0x10c731(0xe6)),
            _0x544d2f = _0x200b45['attr'](_0x10c731(0x130)),
            _0x34b3ab = _0x200b45['attr'](_0x10c731(0x1cd));
        $(_0x10c731(0x1a0))[_0x10c731(0x187)](0x0), $(_0x10c731(0x167))[_0x10c731(0x9f)](), $(_0x10c731(0x170))['remove'](), $(_0x10c731(0x96))[_0x10c731(0x9f)](), $(_0x10c731(0x1d9))[_0x10c731(0xc7)](), $('#lightbox .lb-np')[_0x10c731(0x9f)](), _0x34b3ab && ($(_0x10c731(0x14d))[_0x10c731(0xf9)]('lb-loading'), $(_0x10c731(0xb3))['prepend'](_0x10c731(0x149) + _0x34b3ab + _0x10c731(0x16c)), $(_0x10c731(0x170))['attr']('src', _0x34b3ab)['on'](_0x10c731(0x179), function () {
            var _0x69ded8 = _0x10c731;
            $(this)[_0x69ded8(0xf6)]('data-src'), $(this)['on'](_0x69ded8(0xf8), function () {
                return ![];
            }), $(this)['on'](_0x69ded8(0x12f), function () {
                var _0x20435a = _0x69ded8;
                return alert('© ' + location[_0x20435a(0x180)]), ![];
            }), $(_0x69ded8(0x14d))[_0x69ded8(0x1e2)]('lb-loading');
            (_0x40809a || _0x544d2f) && $(_0x69ded8(0xf4))[_0x69ded8(0x12b)](_0x69ded8(0x100));
            _0x40809a && $(_0x69ded8(0x1d9))[_0x69ded8(0x12b)](_0x69ded8(0xf1) + _0x40809a + _0x69ded8(0xc0));
            _0x544d2f && $(_0x69ded8(0x1d9))[_0x69ded8(0x12b)](_0x69ded8(0x14c) + _0x544d2f + _0x69ded8(0x12c));
            _0x2e585a && $('#lightbox .lb-count')[_0x69ded8(0x1ab)](_0x2e585a)[_0x69ded8(0x177)]();
            $(_0x69ded8(0x197))[_0x69ded8(0x177)]();
            if (_0x200b45[_0x69ded8(0xae)](_0x69ded8(0x1bc) + _0x43a0c1 + '\"]')['length']) {
                var _0x38def6 = _0x200b45[_0x69ded8(0xae)]('[data-lightbox=\"' + _0x43a0c1 + '\"]')[_0x69ded8(0x127)]('href');
                $('#lightbox .lb-np.lb-prev')[_0x69ded8(0x127)]('data-id', _0x43a0c1)[_0x69ded8(0x127)](_0x69ded8(0x154), _0x38def6)[_0x69ded8(0x177)](), $(_0x69ded8(0xa6))[_0x69ded8(0x12b)]('<img src=\"' + _0x38def6 + _0x69ded8(0x164));
            } else $(_0x69ded8(0xd7))[_0x69ded8(0x9f)]();
            if (_0x200b45['next'](_0x69ded8(0x1bc) + _0x43a0c1 + '\"]')['length']) {
                var _0x38def6 = _0x200b45[_0x69ded8(0xb9)](_0x69ded8(0x1bc) + _0x43a0c1 + '\"]')[_0x69ded8(0x127)](_0x69ded8(0x1cd));
                $(_0x69ded8(0xdb))['attr'](_0x69ded8(0x135), _0x43a0c1)[_0x69ded8(0x127)]('data-url', _0x38def6)[_0x69ded8(0x177)](), $('body')['append'](_0x69ded8(0x122) + _0x38def6 + '\" style=\"display:none;\"/>');
            } else $(_0x69ded8(0xdb))['hide']();
            $(_0x69ded8(0x167))[_0x69ded8(0x177)]();
        })), $(_0x10c731(0x1a0))[_0x10c731(0xf9)](_0x10c731(0x1a9)), $(_0x10c731(0xa6))[_0x10c731(0xf9)](_0x10c731(0x16a));
    }), $(_0xd75fce(0x142))['on']('click', function (_0x445fa9) {
        var _0xf56583 = _0xd75fce;
        _0x445fa9[_0xf56583(0x1da)]();
        var _0x504cd3 = $(this)[_0xf56583(0x127)](_0xf56583(0x154)),
            _0x53ad02 = $(this)[_0xf56583(0x127)](_0xf56583(0x135));
        $(_0xf56583(0x1ca) + _0x504cd3 + '\"][data-lightbox=\"' + _0x53ad02 + '\"]')['trigger'](_0xf56583(0x1b3));
    }), $('#lightbox')[_0xd75fce(0x1b3)](function () {
        var _0x5b6cb7 = _0xd75fce;
        $('#lightbox')['removeClass']('open'), $('body')['removeClass'](_0x5b6cb7(0x16a));
    }), $(_0xd75fce(0x14d))['on']('click', function (_0x3bbfa7) {
        _0x3bbfa7['stopPropagation']();
    }), $(_0xd75fce(0x167))['on'](_0xd75fce(0x1b3), function (_0x46c28b) {
        var _0x478fee = _0xd75fce;
        _0x46c28b[_0x478fee(0x1da)](), $(_0x478fee(0x1a0))[_0x478fee(0x1e2)](_0x478fee(0x1a9)), $(_0x478fee(0xa6))[_0x478fee(0x1e2)](_0x478fee(0x16a));
    }), $(document)['on'](_0xd75fce(0x134), function (_0x3aa610) {
        var _0x18755c = _0xd75fce,
            _0x33ac5a = _0x3aa610[_0x18755c(0x15f)] || _0x3aa610[_0x18755c(0x1b8)],
            _0x37cf12 = 0x25,
            _0x471c6b = 0x26,
            _0x76adcb = 0x27,
            _0x44324f = 0x28,
            _0x54f85f = 0xd;
        _0x3aa610[_0x18755c(0x123)] === _0x18755c(0xd9) && ($('#lightbox')[_0x18755c(0x1e2)](_0x18755c(0x1a9)), $('body')[_0x18755c(0x1e2)]('lightbox_open'));
        _0x33ac5a === _0x37cf12 && $(_0x18755c(0x1b4))[_0x18755c(0xc2)]('click');
        _0x33ac5a === _0x76adcb && $(_0x18755c(0x1c3))[_0x18755c(0xc2)](_0x18755c(0x1b3));
        _0x33ac5a === _0x471c6b && $('#lightbox')[_0x18755c(0x187)](0x0);
        if (_0x33ac5a === _0x44324f) {
            var _0x521e61 = $(_0x18755c(0x1a0))[_0x18755c(0x1c8)]();
            $(_0x18755c(0x1a0))['scrollTop'](_0x521e61);
        }
    });
}

function titleCase(_0x50d407) {
    var _0x143564 = _0x5607;
    _0x50d407 = _0x50d407['split'](' ');
    for (var _0x5637a7 = 0x0; _0x5637a7 < _0x50d407['length']; _0x5637a7++) {
        _0x50d407[_0x5637a7] = _0x50d407[_0x5637a7][_0x143564(0x105)](0x0)['toUpperCase']() + _0x50d407[_0x5637a7][_0x143564(0x1b9)](0x1);
    }
    return _0x50d407 = _0x50d407['join'](' '), _0x50d407;
}

function $_GET(_0x2be7b5) {
    var _0x50e01b = _0x5607,
        _0x47cde8 = window[_0x50e01b(0x1de)][_0x50e01b(0xfa)]['substring'](0x1),
        _0x31a82d = _0x47cde8['split']('&'),
        _0x12fc83, _0x12e0df;
    for (_0x12e0df = 0x0; _0x12e0df < _0x31a82d[_0x50e01b(0x1b7)]; _0x12e0df++) {
        _0x12fc83 = _0x31a82d[_0x12e0df]['split']('=');
        if (_0x12fc83[0x0] === _0x2be7b5) return _0x12fc83[0x1] === undefined ? !![] : decodeURIComponent(_0x12fc83[0x1]);
    }
}

function custom_js() {


$("#singleSelectValueDDjQuery").on("change",function(){
        //Getting Value
        var selValue = $("#singleSelectValueDDjQuery").val();
        //Setting Value
        $("#textFieldValueJQ").val(selValue);
    });  

$('.item-demo').appendTo('.bloggerbytetheme_link_demo');
// firt product ------------------------------------------------------//
$(function(){$(".separator:first").remove(),$(".post-body > img:first").remove()});

$(document).ready(function(){
$('a[name="details"]').before($('#Theme-details').html());
$('#Theme-details').html('');
});

$('#noAdmin').val('0881-0225-14900');
$('.whatsapp-btn').click(function () {
$('#whatsapp').toggleClass('toggle');});
		// Onclick Whatsapp Sent!
		$('#whatsapp .submit').click(WhatsApp);
		$("#whatsapp input, #whatsapp textarea").keypress(function () {
			if (event.which == 13) WhatsApp();
		});
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		function WhatsApp() {
			var ph = '';
			if ($('#whatsapp .nama').val() == '') { // Cek Nama
				ph = $('#whatsapp .nama').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .nama').focus();
				return false;
			} else if ($('#whatsapp .email').val() == '') { // Cek email
				ph = $('#whatsapp .email').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .website').focus();
                return false;
            } else if ($('#whatsapp .nomor').val() == '') { // Cek nomor
                ph = $('#whatsapp .nomor').attr('placeholder');
                alert('Silahkan tulis ' + ph);
                $('#whatsapp .nomor').focus();
				return false;
            } else if ($('#whatsapp .kota').val() == '') { // Cek kota
                ph = $('#whatsapp .kota').attr('placeholder');
                alert('Silahkan tulis ' + ph);
                $('#whatsapp .email').focus();
				return false;
            } else if ($('#whatsapp .licensi').val() == '') { // Cek licensi
				ph = $('#whatsapp .licensi').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .licensi').focus();
				return false;
			} else if ($('#whatsapp .pembayaran').val() == '') { // Cek bayar
				ph = $('#whatsapp .pembayaran').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .pembayaran').focus();
				return false;
			} else if ($('#whatsapp .informasi').val() == '') { // Cek dari
				ph = $('#whatsapp .informasi').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .informasi').focus();
				return false;
			} else {
				// Check Device (Mobile/Desktop)
				var url_wa = 'https://web.whatsapp.com/send';
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					url_wa = 'whatsapp://send/';
				}
				// Get Value
				var tujuan = $('#whatsapp .tujuan').val(),
					via_url = location.href,
                    licensi =$('#whatsapp .licensi').val(), 
					harga  =$('#main .is_single article.is_post .harga b').text()
					nama = $('#whatsapp .nama').val(),
					email = $('#whatsapp .email').val(),
					nomor = $('#whatsapp .nomor').val(),
					kota = $('#whatsapp .kota').val(),
                    pembayaran = $('#whatsapp .pembayaran').val(),
					informasi = $('#whatsapp .informasi').val();
				$(this).attr('href', url_wa + '?phone=62 ' + tujuan + '&text=' +
               ' %2ALicensi%2A: ' + licensi + '%0A' +
               ' %2AHarga%2A: ' + harga + '%0A' +
               '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A' +
               ' %0A%2ANama%2A: ' + nama + 
               ' %0A%2AEmail%2A: ' + email + 
               ' %0A%2ANomor WhatsApp%2A: ' + nomor + 
               ' %0A%2AKota%2A: ' + kota + '%0A' +
               '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A%0A' +
               ' %0A%2AMetode Pembayaran%2A: ' + pembayaran + '%0A' +
               ' %0A%2ASaya dapat informasi dari%2A: ' + informasi + '%0A' + 
               ' %0A%2ADari%2A ' + via_url);
				var w = 960,
					h = 540,
					left = Number((screen.width / 2) - (w / 2)),
					tops = Number((screen.height / 2) - (h / 2)),
					popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
                popupWindow.focus();
				return false;
			}
		}
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);jQuery(document).ready(function(){var i=jQuery(window).width();function e(){jQuery("#sidebar-sticky").stick_in_parent({parent:".bloggerbytetheme_item",offset_top:0})}i<768?jQuery("#sidebar-sticky").trigger("sticky_kit:detach"):e(),jQuery(window).resize(function(){(i=jQuery(window).width())<768?jQuery("#sidebar-sticky").trigger("sticky_kit:detach"):e()})});var lazyadsense=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyadsense||0!=document.body.scrollTop&&!1===lazyadsense)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyadsense=!0)},!0);

wpac_init = window.wpac_init || [];
wpac_init.push({widget: 'GoogleReview', id: 27033, place_id: 'ChIJ6QCtsr3J5S0RBCBLuUPpa78', view_mode: 'list'});
var WPac=WPac||{getCookie:function(a){return(a=(document.cookie.match("(^|; )"+a+"=([^;]*)")||0)[2])&&decodeURIComponent(a)},getSearchPath:function(a){var b=document.createElement("a");b.href=a;a=b.pathname+b.search;return 0!=a.indexOf("/")?"/"+a:a},getChan:function(a){if(a.chan)return a.chan;if(a.url){var b=document.createElement("a");b.href=a.url;a=a.chanFull?b.pathname+b.search:b.pathname;return 0!=a.indexOf("/")?"/"+a:a}b=window.location;return a.chanFull?b.pathname+b.search:b.pathname},getUrl:function(a){var b=
window.location.href;return decodeURIComponent(a.url||b.substring(0,0<b.indexOf("#")?b.indexOf("#"):b.length))},getLang:function(){var a=navigator;return(a.language||a.systemLanguage||a.userLanguage||"en").substr(0,2).toLowerCase()},params:function(a,b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(encodeURIComponent(d)+"="+encodeURIComponent(b[d]));return a+"?"+c.join("&")},rand:function(a,b){return Math.floor(Math.random()*(b-a+1))+a},hashCode:function(a){var b=0;if(0==
a.length)return b;for(var c=0;c<a.length;c++)var d=a.charCodeAt(c),b=(b<<5)-b+d,b=b&b;return b},init:function(a){if(a)if(a.length)for(var b=0;b<a.length;b++)this.load(a[b]);else this.load(a)},load:function(a){if(!a.loaded)if(a.loaded=!0,a.host=WPac.protocol+"//"+WPac.cluster[this.rand(0,WPac.cluster.length-1)],WPac.Widget[a.widget].url){var b=this;WPac.Lib.loadJson(a,WPac.Widget[a.widget],function(c){a.lang=a.lang||c.lang||WPac.getLang();a.data=c;b.boot(a)})}else a.lang_org=a.lang,a.lang=a.lang||
WPac.getLang(),this.boot(a)},boot:function(a){if(WPac[a.widget])WPac[a.widget].main(a);else{var b=WPac.origin_embed+"/widget",c=WPac.Widget[a.widget],d=c.i18n;WPac.Lib.loadJss(b+"/js/",d&&d[a.lang]||c.js,function(){WPac[a.widget].main(a)});c.css&&WPac.Lib.loadCsss(b+"/css/",c.css)}},Lib:{loadJson:function(a,b,c){var d="wpac_"+Math.abs(WPac.hashCode(JSON.stringify(a)));window[d]=function(a){return c(a)};a=b.url(a);a+=(-1<a.indexOf("?")?"&":"?")+"callback="+d;return this.loadJs(a)},loadJss:function(a,
b,c,d){var e=this;if(b.length>(d=d||0))WPac.Lib.loadJs(a+b[d]+".js"+WPac.ver,function(){return e.loadJss(a,b,c,d+1)});else if(c)return c()},loadJs:function(a,b){var c=document.createElement("script");c.type="text/javascript";c.src=a;c.async=!0;b&&("undefined"!=typeof c.onload?c.onload=b:c.onreadystatechange="undefined"!=typeof c.onreadystatechange?function(){"complete"!=this.readyState&&"loaded"!=this.readyState||b()}:c.onload=function(){var a=c.readyState;a&&!/loaded|complete/.test(a)||b()});this.appendToRoot(c)},
loadCsss:function(a,b){for(var c=0;c<b.length;c++)WPac.Lib.loadCss(a+b[c]+".css"+WPac.ver)},loadCss:function(a){var b=document.createElement("link");b.rel="stylesheet";b.type="text/css";b.href=a;this.appendToRoot(b)},appendToRoot:function(a){(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)}}};WPac=WPac||{};WPac.protocol="https:";WPac.protocolws="wss:";WPac.host=WPac.host||"https://widgetpack.com";WPac.admin_host=WPac.admin_host||"https://widgetpack.com/admin";WPac.app_host=WPac.app_host||"app.widgetpack.com";WPac.embed_host=WPac.embed_host||"cdn.widgetpack.com";WPac.rt_host=WPac.rt_host||"rt3.cackle.me";WPac.origin=WPac.protocol+"//"+WPac.app_host;WPac.origin_embed=WPac.protocol+"//"+WPac.embed_host;WPac.originws=WPac.protocolws+"//"+WPac.app_host;WPac.cluster=[WPac.app_host];
WPac.ver="?v=1488759785645";
WPac.Widget=WPac.Widget||{Admin:{js:["admin"]},Sign:{js:["sign"]},Setup:{js:["setup"]},Setup2:{js:["setup2"]},SiteNew:{js:["site-new"]},SiteChosen:{js:["site-chosen"]},SiteInstall:{js:["admin/site-install"]},SiteSetting:{js:["site-setting"]},SiteAdmin:{js:["site-admin"]},SiteStopword:{js:["site-stopword"]},SiteBan:{js:["site-ban"]},Rating:{js:["rating"],css:["rating"]},RatingSetting:{js:["admin/rating-setting"],css:["social"]},RatingInstall:{js:["admin/rating-install"]},RatingModeration:{js:["admin/rating-mod"],css:["rating-mod"]},
Comment:{url:function(a){var b={id:a.id,chan:WPac.getChan(a),sort:WPac.getCookie("wp-comment-sort")||a.sort||"desc"},c=window.location.hash.match(/wpc-([0-9]+)/);c&&1<c.length&&(b.commentId=c[1]);return WPac.params(a.host+"/widget/comment/bootstrap",b)},js:["comment"],i18n:{br:["comment_br"],de:["comment_de"],es:["comment_es"],fr:["comment_fr"],id:["comment_id"],it:["comment_it"],nl:["comment_nl"],pl:["comment_pl"],pt:["comment_pt"],ru:["comment_ru"],tr:["comment_tr"],uk:["comment_uk"]},css:["comment"]},
CommentCount:{js:["comment-count"]},CommentRecent:{url:function(a){return WPac.Widget.recent_url("comment",a)},js:["comment-recent"],css:["recent"]},CommentSetting:{js:["admin/comment-setting"],css:["social"]},CommentInstall:{js:["admin/comment-install"]},CommentModeration:{js:["admin/comment-mod"],css:["comment-mod"]},CommentMiniwidgets:{js:["admin/comment-miniwidgets"]},ReviewSetting:{js:["admin/review-setting"],css:["social"]},ReviewInstall:{js:["admin/review-install"]},ReviewModeration:{js:["admin/review-mod"],
css:["review-mod"]},ReviewMiniwidgets:{js:["admin/review-miniwidgets"]},Review:{url:function(a){return WPac.params(a.host+"/widget/review/bootstrap",{id:a.id,chan:WPac.getChan(a),sort:WPac.getCookie("wp-rw-sort")||a.sort||"id",order:WPac.getCookie("wp-rw-order")||a.order||"desc"})},js:["review"],i18n:{fr:["review_fr"],sr:["review_sr"],br:["review_br"],nl:["review_nl"],de:["review_de"],es:["review_es"],pl:["review_pl"],ru:["review_ru"],uk:["review_uk"]},css:["review"]},ReviewCount:{js:["review-count"]},
ReviewRecent:{url:function(a){return WPac.Widget.recent_url("review",a)},js:["review-recent"],css:["recent"]},GreviewInstall:{js:["admin/greview-install"],css:["greview-install"]},GreviewModeration:{js:["admin/greview-moderation"],css:["greview-install"]},GreviewSetting:{js:["admin/greview-setting"]},GoogleReview:{url:function(a){return WPac.params(a.host+"/widget/google-review/boot",{site_id:a.id,place_id:a.place_id})},js:["google-review"],css:["google-review"]},FacebookReview:{url:function(a){return WPac.params(a.host+
"/widget/fbrev/boot",{site_id:a.id,page_id:a.page_id})},js:["facebook-review"],css:["facebook-review"]},FbrevInstall:{js:["admin/fbrev-install"],css:["fbrev-install"]},ChatInstall:{js:["admin/chat-install"]},ChatDashboard:{js:["admin/chat-dashboard"],css:["chat-dashboard"]},Chat:{js:["chat"],css:["chat"]},SubscriptionPlan:{js:["admin/subscription-plan"]},SubscriptionPayment:{js:["admin/subscription-payment"]},Pricing:{js:["pricing"],css:["pricing"]},recent_url:function(a,b){var c={id:b.id};b.limit&&
(c.size=b.limit);b.chan?c.chan=b.chan:b.url&&(c.chan=WPac.getSearchPath(b.url));return WPac.params(b.host+"/widget/"+a+"/recent",c)}};window.wpac_init&&WPac.init(wpac_init);

// FB Fixel
 $('#pop-booking').click(function() {
    fbq('track', 'Purchase', {currency: "IDR", value: 30.00});
  });
$(".bloggerbytetheme_body-content").each(function() {
        var t = $(this),
            e = t.find('strike:contains("price/")');
            redtube = t.find('strike:contains("download/")'),
            xnxxINDO = t.find('strike:contains("trend/")'),
            handakPoki = t.find('strike:contains("sales/")'),
            bokepINDO = t.find('strike:contains("sale/")');
        if (e.length > 0) {
            var a = e.text(),
                s = a.split("/"),
                i = s[1];
            e.remove()
        }
if (handakPoki.length > 0) {
            nafsuIblis = handakPoki.text(), bajinganQW = nafsuIblis.split("/");
            var openBOmurah = bajinganQW[1];
            handakPoki.remove()
        }
if (redtube.length > 0) {
            s = redtube.text(), i = s.split("/");
            var entot = i[1];
            redtube.remove()
        }
if (xnxxINDO.length > 0) {
            softex = xnxxINDO.text(), i = softex.split("/");
            var crot = i[1];
            xnxxINDO.remove()
        }
if (bokepINDO.length > 0) {
            jualBokep = bokepINDO.text(), indexXNXX = jualBokep.split("/");
            var sukaColi = indexXNXX[1];
            bokepINDO.remove()
        }
    })
$(document).ready(function(){ 
    $('.tab-a').click(function(){  
      $(".tab").removeClass('tab-active');
      $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
      $(".tab-a").removeClass('active-a');
      $(this).parent().find(".tab-a").addClass('active-a');
     });
});

}
