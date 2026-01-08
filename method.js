document.addEventListener('DOMContentLoaded', () => {
	const backBtn = document.getElementById('methodBackBtn')
	const toCodingBtn = document.getElementById('methodToCodingBtn')

	const cls = localStorage.getItem('class')
	let theoryPage = ''
	let practicePage = ''

	if (cls === '5' || cls === '6') {
		theoryPage = 'theory_beginner.html'
		practicePage = 'practice_beginner.html'
	} else if (cls === '7' || cls === '8' || cls === '9' || cls === '10' || cls === '11') {
		theoryPage = 'theory_middle.html'
		practicePage = 'practice_middle.html'
	}

	backBtn.addEventListener('click', () => {
		if (!theoryPage) {
			alert('Ошибка определения уровня')
			return
		}
		window.location.href = theoryPage
	})

	toCodingBtn.addEventListener('click', () => {
		if (!practicePage) {
			alert('Ошибка определения уровня')
			return
		}
		window.location.href = practicePage
	})
})
