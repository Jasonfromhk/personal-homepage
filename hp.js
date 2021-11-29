let text = "Jason's" + " " + "Roadmap"
let textIndex = 0;
let textCursor

function tickText() {
    if (textIndex >= text.length) {
      textCursor = document.createElement('div')
      textCursor.classList.add('cursor')
      textCursor.textContent = '|'
      textOutput.appendChild(textCursor)
      setTimeout(tickCursor, 60)
      return
    }
    let span = document.createElement('span')
    span.textContent = text[textIndex]
    textIndex++
    textOutput.appendChild(span)
    setTimeout(tickText, 60)
  }
  setTimeout(tickText, 1000)

  function tickCursor() {
    textCursor.classList.toggle('active')
    setTimeout(tickCursor, 600)
  }

//Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}