const btn = document.querySelector('.btn');
const yourScore = document.querySelector('.your-score');
const inputs = document.querySelectorAll('.correct');

const inputsArr = [...inputs];

btn.addEventListener('click', results);

function results(e) {
	e.preventDefault();
	let score = 0;
	inputsArr.map(el => {
		if (el.checked) {
			score++;
		} else {
			score + 0;
		}
	});

	if (score >= 5 && score <= 10) {
		yourScore.textContent = `Your score is ${score}. It looks like you have a severe drinking problem. You might need to seek help of a specialist.`;
	} else if (score < 5 && score >= 2) {
		yourScore.textContent = `Your score is ${score}. Your drinking problem is probably not that bad yet and it can get worse if you do not work on it.`;
	} else {
		yourScore.textContent = `Apparently you do not have any drinking issues. Please keep going like this and you will be fine.`;
	}
	score = '';
	document.myForm.reset();
}

// The idea is to display the results in html in Results section. For each 'yes' the user gets 1 point.when there is no point
