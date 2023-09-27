/*
  window.scrollY : 브라우저 스크롤시 스크롤되는 거리값 (동적)
  DOM.offsetTop : 전체 페이지에 특정 DOM의 세로 위치값 (정적)
*/
const secs = document.querySelectorAll('section');
const h1 = secs[0].querySelector('h1');
const h1_2 = secs[1].querySelector('h1');
const baseLine = -window.innerHeight / 2;

window.addEventListener('scroll', () => {
	//const scrolled1 = setScroll(secs[0]);
	h1.style.transform = `translateX(${setScroll(secs[0])}px)`;
	h1_2.style.transform = `translateX(${setScroll(secs[1], -window.innerHeight / 2)}px)`;
});

//첫번째인수로 기준점이 될 frame요소 지정, 두번째 인수로 스크롤 모션이 적용될 커스텀 시점지정 (기본값 0)
function setScroll(frame, baseLine = 0) {
	//내부적으로 scroll값 동적생성
	const scroll = window.scrollY;
	let scroll2 = 0;
	//첫번째와 두번째 인수로 넘어오는 부모세로위치값과 base보정값을 적용한 영역에 도달하면 scroll값 변경시작
	//만약 벗어나면 원래 위치값으로 scroll값 초기화
	scroll >= frame.offsetTop + baseLine
		? (scroll2 = scroll - frame.offsetTop - baseLine)
		: (scroll2 = 0);
	//위에서 만들어지고 있는 스크로값을 실시간으로 리턴
	return scroll2;
}
