/*
  window.scrollY : 브라우저 스크롤시 스크롤되는 거리값 (동적)
  DOM.offsetTop : 전체 페이지에 특정 DOM의 세로 위치값 (정적)
*/
const secs = document.querySelectorAll('section');
const h1 = secs[0].querySelector('h1');
const h1_2 = secs[1].querySelector('h1');

window.addEventListener('scroll', () => {
	const scroll = window.scrollY;
	const scroll_2 = scroll - secs[1].offsetTop;

	h1.style.transform = `translateX(${scroll}px) rotate(${scroll}deg) scale(${1 + scroll / 200})`;
	h1.style.opacity = 1 - scroll / 400;

	if (scroll >= secs[1].offsetTop) {
		h1_2.style.transform = `translateX(${scroll_2}px) rotate(${scroll_2}deg) scale(${
			1 + scroll_2 / 200
		})`;
		h1_2.style.opacity = 1 - scroll_2 / 400;
	}
});
