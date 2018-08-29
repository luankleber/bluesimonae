d = new Date();
days = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
day = d.getDate();
w = days[d.getDay()];
month = months[d.getMonth()];
h = d.getHours();
y = d.getFullYear();
m = d.getMinutes();
ampm = h >= 12 ? 'pm' : 'am';
h = h % 12;
h = h ? h : 12; // the hour '0' should be '12'
m = m < 10 ? '0' + m : m;
var strTime = h + ':' + m + ' ' + ampm;
document.getElementsByClassName('time')[0].innerHTML = day + ' ' + month + ' ' + y + '<br />' + w + ' ' + strTime;

var body = document.body;
setTimeout(function(){
  body.classList.add('active');
}, 200);
  
document.getElementsByClassName('reload')[0].onclick = function() {
  body.classList.remove('active');
  setTimeout(function() {
    body.classList.add('active');
  }, 1500);
}
