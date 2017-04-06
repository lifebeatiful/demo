;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-baidu" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M278.5498 475.8344c81.0734-17.4172 70.0385-114.2965 67.605-135.4781-3.9775-32.6519-42.3721-89.6952-94.5149-85.1992-65.6143 5.881-75.1922 100.6558-75.1922 100.6558C167.5694 399.639 197.6743 493.2366 278.5498 475.8344zM364.6361 644.3291c-2.3805 6.8194-7.6741 24.2366-3.08 39.3993 9.0442 34.0369 38.5895 35.5629 38.5895 35.5629h42.45499862087712V615.5276722382225h-45.452092469189594C376.7054 621.6185 366.8467 637.5098 364.6361 644.3291zM429.0171 313.3605c44.7785 0 80.9615-51.5261 80.9615-115.2339 0-63.6498-36.184-115.1619-80.9615-115.1619-44.6946 0-80.9875 51.5121-80.9875 115.1619C348.0297 261.8345 384.3226 313.3605 429.0171 313.3605zM621.8535 320.9774c59.8449 7.7707 98.3225-56.091 105.9676-104.4952 7.815-48.3322-30.8044-104.4922-73.1735-114.1386-42.455-9.7314-95.4663 58.2595-100.2842 102.6024C548.5941 259.1453 562.1215 313.2896 621.8535 320.9774zM768.4842 605.5145c0 0-92.5811-71.6304-146.6307-149.0589-73.2594-114.1556-177.3482-67.6961-212.1591-9.6465-34.6699 58.0496-88.6896 94.7628-96.3637 104.4922-7.7821 9.5775-111.8489 65.7374-88.7446 168.3539 23.1043 102.5335 104.2327 100.5718 104.2327 100.5718s59.787 5.881 129.1549-9.6465c69.3939-15.3866 129.1269 3.8514 129.1269 3.8514s162.0899 54.2702 206.4467-50.2239C837.8521 659.7157 768.4842 605.5145 768.4842 605.5145zM491.1586 761.016H385.7786447819187c-45.5061-9.0728-63.6245-40.1278-65.9211-45.4212-2.2396-5.3764-15.1504-30.3414-8.3197-72.7946 19.6605-63.6359 75.7508-68.2008 75.7508-68.2008h56.09332464552544v-68.9432564721119l47.7746 0.7285V761.0160311308932zM687.4138 760.2885H566.1529267385943c-46.9891-12.1128-49.2027-45.4902-49.2027-45.4902V580.6902919820361l49.2027-0.7975v120.5242845350852c2.9971 12.8553 18.9609 15.1777 18.9609 15.1777h49.95922593230705V580.6902919820361h52.33971194320412V760.28852438047zM859.0786 402.2563c0-23.1613-19.2388-92.887-90.5944-92.887-71.4675 0-81.0165 65.8064-81.0165 112.3348 0 44.3979 3.7536 106.3819 92.5272 104.4092C868.7964 524.1516 859.0786 425.5405 859.0786 402.2563z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M83.617 654.65c-26.262 26.265-26.262 68.847 0.003 95.112 26.258 26.265 68.847 26.265 95.112 0l292.187-292.19c11.76-9.185 26.285-14.298 41.362-14.298 15.078 0 29.604 5.116 41.366 14.301l291.626 291.627c26.265 26.265 68.847 26.265 95.112 0 26.266-26.265 26.266-68.847 0-95.112l-380.548-380.548c-12.612-12.613-29.718-19.697-47.556-19.697-17.839 0-34.944 7.084-47.558 19.696l-381.107 381.108z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-camera" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M907.2128 289.5872l-179.2 0-51.2-104.2176 0 1.8176-307.2 0-51.2 102.4-179.2 0c-25.6 0-76.8 49.3824-76.8 99.7632l0 410.3936c0 42.3936 43.7504 104.2176 76.8 104.2176l768 0c33.5872 0 76.8-63.4368 76.8-103.424L984.0128 390.1696C984.0128 364.5696 958.4128 289.5872 907.2128 289.5872zM932.8128 800.5632c0 10.112-17.9712 51.6608-25.6 52.224l-768 0c-5.9136-0.4864-25.6-39.4496-25.6-53.0176L113.6128 389.376c0-16.2304 47.4112-48.1792 51.2-48.5632l153.6 0 18.7392-1.8176 14.9248-24.8832 43.136-75.6992 256 0 44.0064 75.7248 14.08 24.8576 44.3136 1.8176 153.6 0c18.048 0 25.344 47.36 25.6 49.3824L932.8128 800.5632zM523.2128 390.1696c-98.944 0-179.2 80.2304-179.2 179.2s80.256 179.2 179.2 179.2c98.9696 0 179.2-80.2304 179.2-179.2S622.1824 390.1696 523.2128 390.1696zM523.2128 697.3696c-70.5792 0-128-57.4208-128-128s57.4208-128 128-128 128 57.4208 128 128S593.7664 697.3696 523.2128 697.3696z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-62" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M923.042657 487.09375 518.837732 487.09375l0-383.739824c0-14.128789-11.453866-25.582655-25.582655-25.582655s-25.582655 11.453866-25.582655 25.582655l0 383.739824-363.2737 0c-14.128789 0-25.582655 11.453866-25.582655 25.582655s11.453866 25.582655 25.582655 25.582655l363.2737 0 0 383.739824c0 14.129812 11.453866 25.582655 25.582655 25.582655s25.582655-11.452843 25.582655-25.582655l0-383.739824 404.204925 0c14.129812 0 25.582655-11.453866 25.582655-25.582655S937.172469 487.09375 923.042657 487.09375z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cc-mic" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.221776 675.709549c-91.010807 0-164.984588-74.021877-164.984588-164.984588L346.237187 227.894384c0-90.986247 73.973782-164.984588 164.984588-164.984588 90.959641 0 164.982542 73.998341 164.982542 164.984588L676.204317 510.72496C676.204317 601.687672 602.181417 675.709549 511.221776 675.709549zM511.221776 110.047372c-64.956408 0-117.847012 52.892651-117.847012 117.847012L393.374764 510.72496c0 64.951291 52.890604 117.844965 117.847012 117.844965 64.954361 0 117.845988-52.893674 117.845988-117.844965L629.067764 227.894384C629.067764 162.940023 576.176137 110.047372 511.221776 110.047372z"  ></path>' +
    '' +
    '<path d="M817.620118 510.72496c0-13.006222-10.590196-23.570835-23.567765-23.570835-12.982686 0-23.569812 10.564613-23.569812 23.570835 0 142.980435-116.28033 259.259742-259.259742 259.259742-142.980435 0-259.261789-116.28033-259.261789-259.259742 0-13.006222-10.5421-23.570835-23.568788-23.570835-13.028735 0-23.568788 10.564613-23.568788 23.570835 0 161.02337 124.889405 293.415656 282.829554 305.47839l0 95.196129-70.707388 0c-13.028735 0-23.569812 10.588149-23.569812 23.570835 0 12.979616 10.540054 23.567765 23.569812 23.567765l188.553377 0c12.979616 0 23.569812-10.589173 23.569812-23.567765 0-12.983709-10.591219-23.570835-23.569812-23.570835l-70.708412 0 0-95.196129C692.775738 804.140617 817.620118 671.748331 817.620118 510.72496z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huidaodingbu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M217.157343 165.076686l589.677127 0c27.892257 0 50.506301-22.621207 50.506301-50.510394 0-27.897374-22.615067-50.512441-50.506301-50.512441L217.157343 64.053851c-27.891234 0-50.506301 22.61609-50.506301 50.512441C166.650019 142.454456 189.26611 165.076686 217.157343 165.076686z"  ></path>' +
    '' +
    '<path d="M857.663112 488.360604 556.29432 186.984648c-0.064468-0.064468-0.115634-0.135076-0.181125-0.199545-12.178367-12.17939-28.148084-18.272155-44.110637-18.267039-15.968693-0.00614-31.93841 6.086625-44.1178 18.267039-0.064468 0.064468-0.115634 0.135076-0.181125 0.199545L166.334841 488.360604c-24.365944 24.346501-24.365944 63.850214 0 88.210018 24.359804 24.359804 63.857377 24.359804 88.210018 0l206.943213-206.938096 0 539.808346c0 27.898397 22.61609 50.506301 50.507324 50.506301 27.898397 0 50.513464-22.608927 50.513464-50.506301L562.508859 369.632525l206.942189 206.938096c24.352641 24.359804 63.851237 24.359804 88.210018 0C882.029056 552.210817 882.029056 512.707105 857.663112 488.360604z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-002" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M777.710345 418.427586C777.710345 520.152106 742.165582 607.321406 671.653839 677.833149 599.266664 750.220325 513.806147 785.655172 412.248276 785.655172 310.050186 785.655172 223.126486 749.788596 152.98871 677.980875 80.887265 607.549376 45.02069 520.625676 45.02069 418.427586 45.02069 316.401546 80.778529 229.32069 152.842713 157.256506 224.137234 85.961985 311.633344 49.434483 412.248276 49.434483 514.446366 49.434483 601.370066 85.301058 671.507841 157.10878 742.278935 229.5649 777.710345 316.878018 777.710345 418.427586L777.710345 418.427586ZM813.02069 418.427586C813.02069 307.673706 773.993965 211.500703 696.768021 132.436047 619.920476 53.758799 523.86471 14.124138 412.248276 14.124138 302.232896 14.124138 205.766215 54.396636 127.874529 132.288322 49.160646 211.002204 9.710345 307.075289 9.710345 418.427586 9.710345 530.044021 49.345006 626.099786 128.022254 702.947332 204.576076 781.330856 300.631842 820.965517 412.248276 820.965517 523.175597 820.965517 617.616094 781.807261 696.622024 702.801334 773.805928 625.617429 813.02069 529.447894 813.02069 418.427586L813.02069 418.427586ZM772.235758 810.445098 980.566793 1020.54165 1005.640104 995.67904 797.309069 785.582488 772.235758 810.445098 772.235758 810.445098ZM797.309069 785.582488 772.235758 810.445098 980.566793 1020.54165 1005.640104 995.67904 797.309069 785.582488 797.309069 785.582488Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-0021" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M888.192 1024c0.384-7.104 2.24-14.016 2.24-21.312C890.432 802.432 721.024 640 512 640c-209.024 0-378.432 162.432-378.432 362.688 0 7.296 1.792 14.208 2.24 21.312L1.152 1024C0.832 1016.896 0 1009.792 0 1002.688c0-195.904 119.872-364.16 292.864-443.008C223.04 501.12 178.048 416 178.048 320c0-176.768 149.504-320 333.952-320s333.888 143.296 333.888 320c0 95.936-44.992 181.056-114.688 239.616C904.128 638.528 1024 806.784 1024 1002.688c0 7.104-0.896 14.208-1.152 21.312L888.192 1024zM512 128C401.344 128 311.616 214.016 311.616 320S401.344 512 512 512c110.592 0 200.256-85.952 200.256-192S622.592 128 512 128z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)