const box = document.querySelector('article');

box.addEventListener('click', () => {
	new Anime(
		box, //선택자
		{ left: 1000, backgroundColor: '#ef1da5' },
		{
			duration: 1000,
			easeType: 'linear',
			callback: () => {
				new Anime(box, { top: 300, background: '#000000' });
			},
		}
	);
});
