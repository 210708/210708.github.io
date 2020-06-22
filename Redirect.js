var MAX = 8;
var Rand = Math.floor(Math.random() * MAX);

alert(Rand);

if (Rand == 0) {
  window.location.href = 'Battle01-OST.mp3';
}
else if (Rand == 1) {
  window.location.href = 'Battle02-OST.mp3';
}
else if (Rand == 2) {
  window.location.href = 'Battle03-OST.mp3';
}
else if (Rand == 3) {
  window.location.href = 'ClashRoyaleMainTheme1.mp3';
}
else if (Rand == 4) {
  window.location.href = 'ClashRoyaleMainTheme2.mp3';
}
else if (Rand == 5) {
  window.location.href = 'ClashRoyaleMainTheme3.mp3';
}
else if (Rand == 6) {
  window.location.href = 'TimeLimit(30Seconds).mp3';
}
else if (Rand == 7) {
  window.location.href = 'TimeLimit(60Seconds).mp3';
}
else {
  alert('Something is wrong!');
}
