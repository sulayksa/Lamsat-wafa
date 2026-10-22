/* Lamsat Wafa — links page */
(function () {
  document.getElementById('y').textContent = new Date().getFullYear();
  var toast = document.querySelector('.toast');
  function show(msg) { toast.textContent = msg; toast.classList.add('show'); setTimeout(function () { toast.classList.remove('show'); }, 2200); }
  document.querySelector('.lp-share').addEventListener('click', function () {
    var data = { title: 'لمسة وفاء', text: 'روابط فريق لمسة وفاء التطوعي', url: location.href };
    if (navigator.share) { navigator.share(data).catch(function () {}); }
    else if (navigator.clipboard) { navigator.clipboard.writeText(location.href).then(function () { show('تم نسخ الرابط'); }); }
  });
})();
