function handleFileSelect(evt) {
  let file = evt.target.files;
  let f = file[0];

  if (!f.type.match('image.*')) {
    alert("Image only please....");
  }
  let reader = new FileReader();

  reader.onload = (function (theFile) {
    return function (e) {
      // Render thumbnail.
      let span = document.createElement('span');
      span.innerHTML = ['<img class="" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
      document.querySelector('.preview-photo').innerText = ""
      document.querySelector('.preview-photo').appendChild(span)
    };
  })(f);
  // Read in the image file as a data URL.
  reader.readAsDataURL(f);
}
document.querySelector('#photo').addEventListener('change', handleFileSelect, false);