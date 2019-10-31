let closeDrawer = Array.prototype.slice.call(document.querySelectorAll('.rim-drawer__close'));
let openDrawer = Array.prototype.slice.call(document.querySelectorAll('.rim-drawer__open'));

if(closeDrawer) {
  closeDrawer.forEach(function(el) {
    el.addEventListener('click', function() {
      console.log('in close click evt');
      let drawer = document.getElementById(el.dataset.drawer);
      console.log('el.dataset: ' + el.dataset.drawer);
      console.log('drawer: ' + drawer);
      drawer.classList.toggle('rim-drawer--closed');
    });
  });
}

if(openDrawer) {
  openDrawer.forEach(function(el) {
    el.addEventListener('click', function() {
      console.log('in open click evt');
      let drawer = document.getElementById(el.dataset.drawer);
      console.log('el.dataset: ' + el.dataset.drawer);
      console.log('drawer: ' + drawer);
      drawer.classList.toggle('rim-drawer--closed');
    });
  });
}
