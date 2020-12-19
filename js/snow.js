window.onload = function() {
    var flakes = [];
    var types = ['❄','❅','❆'];
    for(var i = 0, len = 240; i < len; i++) {
      flakes.push('<i>' + types[i%3]  + '</i>');
    }  document.getElementById('snow').innerHTML = flakes.join('');
  };