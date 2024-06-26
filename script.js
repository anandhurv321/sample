// document.addEventListener('DOMContentLoaded', () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
//         burger.classList.toggle('toggle');
//     });

//     const form = document.getElementById('prediction-form');
//     form.addEventListener('submit', async (event) => {
//         event.preventDefault();

//         const formData = new FormData(form);
//         const data = Object.fromEntries(formData);

//         console.log(data); // Handle form data as needed

//         // Optionally, you can send this data to a backend server for prediction
//         const response = await fetch('/predict', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
//         console.log(response,'jjj');

//         const result = await response.json();
//         console.log(result); // Display the prediction result as needed
//     });
// });
// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');

//     const form = document.querySelector('form');
//     form.addEventListener('submit', (event) => {
//         alert('Form submitted!');
//     });
// });


// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("openModalBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


var c = document.getElementById('canv');
var $ = c.getContext('2d');


var col = function(x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1,1);
}
var R = function(x, y, t) {
  return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
}

var G = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
}

var B = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}

var t = 0;

var run = function() {
  for(x=0;x<=35;x++) {
    for(y=0;y<=35;y++) {
      col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
    }
  }
  t = t + 0.120;
  window.requestAnimationFrame(run);
}

run();