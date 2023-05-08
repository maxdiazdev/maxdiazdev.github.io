const BODY = document.querySelector('body');
const INTRO = document.querySelector('#intro');

function toggleTheme() {
	BODY.classList.toggle('bonus-content');
	const links = INTRO.querySelectorAll('a');
	links.forEach(link => link.classList.toggle('disabled'));
}