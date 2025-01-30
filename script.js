const git = document.getElementById('git');
const frontEnd = document.getElementById('front-end')
const linkedIn = document.getElementById('linkedin')
const twitter = document.getElementById('twitter')
const insta = document.getElementById('insta')


const links = [git,frontEnd,linkedIn,twitter,insta]


function addHoverListeners() {
  for (const link of links) {
    link.addEventListener('mouseover', mouseoverHandler)
    link.addEventListener('mouseout', mouseoutHandler)       
  }
}

function removeHoverListeners() {
  for (const link of links) {
    link.removeEventListener('mouseover', mouseoverHandler)
    link.removeEventListener('mouseout', mouseoutHandler)       
  }
}


function mouseoverHandler (event) {
  event.currentTarget.style.opacity = ''

  for (const notLink of links) {
    if (notLink !== event.currentTarget) {
      notLink.style.opacity = '0.5'
    }
  }
}

function mouseoutHandler (event) {
  event.currentTarget.style.opacity = ''

  for (const notLink of links) {
    if (notLink !== event.currentTarget) {
      notLink.style.opacity = ''
    }
  }
}


const mediaQuery = window.matchMedia('(min-width: 475px)');

function checkMediaQuery() {
  if (mediaQuery.matches) {
    addHoverListeners();
  } else {
    removeHoverListeners();
  }
}

checkMediaQuery();

mediaQuery.addEventListener('change', checkMediaQuery);