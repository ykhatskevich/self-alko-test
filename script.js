const btn = document.querySelector('.btn')
const yourScore = document.querySelector('.your-score')

btn.addEventListener('click', result)

function result(argument) {
	let score = 0
	if (document.getElementById('correct1').checked) {
		score++
	}
	if (document.getElementById('correct2').checked) {
		score++
	}
	if (document.getElementById('correct3').checked) {
		score++
	}
	if (document.getElementById('correct4').checked) {
		score++
	}
	if (document.getElementById('correct5').checked) {
		score++
	}
	if (document.getElementById('correct6').checked) {
		score++
	}
	if (document.getElementById('correct7').checked) {
		score++
	}
	if (document.getElementById('correct8').checked) {
		score++
	}
	if (document.getElementById('correct9').checked) {
		score++
	}
	if (document.getElementById('correct10').checked) {
		score++
	}

	if (score >= 5 && score == 10) {
		yourScore.append(
			`Your score is ${score}. It looks like you have a severe drinking problem. You might need to seek help of a specialist.`
		)
	} else if (score < 5 && score > 2) {
		yourScore.append(
			`Your score is ${score}. Your drinking problem is probably not that bad yet and it can get worse if you do not work on it.`
		)
	} else {
		yourScore.append(
			`Apparently you do not have any drinking issues. Please keep going like this and you will be fine.`
		)
	}

	// The idea is to display the results in html in Results section. For each 'yes' the user gets 1 point.when there is no point
}
