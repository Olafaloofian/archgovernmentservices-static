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