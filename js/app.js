window.onload = run
function run(){
    var allImages = "";

    for (var i = 1; i <=55; i++) {
      allImages += '<img src="c3/reopen_'+i+'.png">';
    }

    $('#photos').append(allImages);
}
