const main = document.querySelector('main');
const [top, right, bottom, left, open, content] = main.children;
const close = content.querySelector('.close');
const speed = 500;

open.addEventListener('click', () => {
	new Anime(
		top,
		{ width: '100%' },
		{
			duration: speed,
			callback: () => {
				new Anime(
					right,
					{ height: '100%' },
					{
						duration: speed,
						callback: () => {
							new Anime(
								bottom,
								{ width: '100%' },
								{
									duration: speed,
									callback: () => {
										new Anime(
											left,
											{ height: '100%' },
											{
												duration: speed,
												callback: () => {
													content.classList.add('on');
													open.classList.add('off');
												},
											}
										);
									},
								}
							);
						},
					}
				);
			},
		}
	);
});

close.addEventListener('click', () => {
	content.classList.remove('on');

	setTimeout(() => {
		new Anime(top, { width: '0%' });
		new Anime(bottom, { width: '0%' });
		new Anime(left, { height: '0%' });
		new Anime(right, { height: '0%' });
		open.classList.remove('off');
	}, 1000);
});
