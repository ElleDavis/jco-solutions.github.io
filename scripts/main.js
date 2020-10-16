let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/jennifer-combs.png') {
      myImage.setAttribute('src','images/jennifer-combs-2.png');
    } else {
      myImage.setAttribute('src','images/jennifer-combs.png');
    }
  }