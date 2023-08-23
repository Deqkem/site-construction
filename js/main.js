document.addEventListener('DOMContentLoaded', function () {
  var sidenav = document.querySelectorAll('.sidenav');
  var instances_sidenav = M.Sidenav.init(sidenav);
});

document.addEventListener('DOMContentLoaded', function () {
  var modal = document.querySelectorAll('.modal');
  var instances_modal = M.Modal.init(modal);
});

document.addEventListener('DOMContentLoaded', function() {
  var materialBox = document.querySelectorAll('.materialboxed');
  var instances_materialBox = M.Materialbox.init(materialBox);
});