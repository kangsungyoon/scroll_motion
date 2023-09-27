function setScroll(frame, baseLine = 0) {
	const scroll = window.scrollY;
	let scroll2 = 0;
	scroll >= frame.offsetTop + baseLine
		? (scroll2 = scroll - frame.offsetTop - baseLine)
		: (scroll2 = 0);
	return scroll2;
}
