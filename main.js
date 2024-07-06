const elList = document.querySelector('.list');
const elItim = document.querySelectorAll('.item');
const elBtn = document.querySelector('.btn');
elBtn.addEventListener('click', () => {
	console.log(elItim);
});

elItim.forEach(item => {
	item.addEventListener('click', e => {
		e.target.style.color = 'red';
	});
});
