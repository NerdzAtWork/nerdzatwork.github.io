document.querySelectorAll('a[href^="#"]').forEach((anchor) =>
	anchor.addEventListener('click', (event) => {
		event.preventDefault();

		const element = document.querySelector(anchor.getAttribute('href'));

		if (window.innerWidth <= 700) {
			return element.scrollIntoView({ behavior: 'smooth' });
		}

		window.scrollTo({
			behavior: 'smooth',
			top:
				element.getBoundingClientRect().top +
				window.scrollY -
				document.querySelector('nav.navigation').getBoundingClientRect().height,
		});
	})
);

document.querySelectorAll('a[href="/"]').forEach((anchor) =>
	anchor.addEventListener('click', (event) => {
		event.preventDefault();

		window.scrollTo({ top: 0, behavior: 'smooth' });
	})
);

const navigation = document.querySelectorAll('nav.navigation')[0];

navigation.addEventListener('click', () => {
	if (window.innerWidth <= 700) {
		navigation.classList.toggle('visible');
	}
});
