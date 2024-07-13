const elList = document.querySelector('.list');
const elItim = document.querySelectorAll('.item');
const elBtn = document.querySelector('.btn');

elItim.forEach(item => {
	item.addEventListener('click', e => {
		e.target.style.color = 'red';
		e.target.style.backgroundColor = 'violet';
	});
});

elBtn.addEventListener('click', () => {
	console.log(elItim);
});
