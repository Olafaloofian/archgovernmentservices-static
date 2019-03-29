window.onload = function() {
    // Add current year to copyright
    const today = new Date
    document.getElementById('year').innerHTML = `${today.getFullYear()}`
    // Check the URL on load to see if user requested a specific panel
    if(window.location.href.split('#').length > 1) {
        const panel =  document.getElementById(window.location.href.split('#')[1])
        if(panel) {
            // The panel exists, scroll it into view
            panel.scrollIntoView()
        } else {
            // The panel does not exist
            window.history.replaceState({location: ''}, 'home', ' ')
        }
    } else {
        detectScrollPosition()
    }
}

let ticking = false

window.addEventListener('scroll', function(e) {
    // Prevent backlog spam of scroll function by timing it out 300 ms based on a ticker
    if (!ticking) {
        setTimeout(() => {
            detectScrollPosition();
            ticking = false;   
        }, 300)
        ticking = true;
    }
})

// Alters the class of a chosen element to do a fade-in and fade-out animation
function toggleVisibility(element, toggle) {
    const chosenElement = document.getElementById(element)
	if (chosenElement.classList) {
        if (toggle === 'show') {
            chosenElement.classList.add('visible');
        } else if (toggle === 'hide') {
            chosenElement.classList.remove('visible');
        }
	}
	else {
		var regExp = new RegExp('(\\s|^)' + 'visible' + '(\\s|$)');
		if (!chosenElement.className.match(regExp)) {
            if (toggle === 'show') {
                chosenElement.className += " " + 'visible';
            } else if (toggle === 'hide') {
                chosenElement.className.replace(regExp, ' ');
            }
		}
	}
}

// Responsible for changing the URL path as the user scrolls through the page
function detectScrollPosition() {
    if(window.pageYOffset === 0) {
        toggleVisibility('up-arrow', 'hide')
    } else {
        toggleVisibility('up-arrow', 'show')
    }

    if(window.pageYOffset >= 0 && window.pageYOffset < window.innerHeight) {
        window.history.replaceState({location: ''}, 'home', ' ')
    } else if(window.pageYOffset > window.innerHeight && window.pageYOffset < (window.innerHeight * 2)) {
        window.history.replaceState({location: 'design-and-build-services'}, 'design-and-build-services', '#design-and-build-services')
    } else if (window.pageYOffset > (window.innerHeight * 2) && window.pageYOffset < (window.innerHeight * 3)) {
        window.history.replaceState({location: 'managed-services'}, 'managed-services', '#managed-services')
    } else if (window.pageYOffset > (window.innerHeight * 3)) {
        window.history.replaceState({location: 'procurement-and-logistics-services'}, 'procurement-and-logistics-services', '#procurement-and-logistics-services')
    }
}