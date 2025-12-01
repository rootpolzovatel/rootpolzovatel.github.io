document.addEventListener('DOMContentLoaded', () => {
	const sendBtn = document.getElementById('sendBtn')
	const submitModal = document.getElementById('submitModal')
	const closeModalBtn = document.getElementById('closeModalBtn')
	const confirmSubmitBtn = document.getElementById('confirmSubmitBtn')
    const fields = ["task6", "task7", "task8"];

    fields.forEach(id => {
        const el = document.getElementById(id);

        const saved = localStorage.getItem(id);
        if (saved) el.value = saved;

        el.addEventListener("input", () => {
            localStorage.setItem(id, el.value);
        });
    });
	// Назад
	document.getElementById('practiceBackBtn').onclick = () => {
		window.location.href = 'method.html'
	}

	// Нажатие "Завершить олимпиаду"
	sendBtn.onclick = () => {
		// Обновляем ссылки перед открытием модалки
		localStorage.setItem('task6', document.getElementById('task6').value.trim())
		localStorage.setItem('task7', document.getElementById('task7').value.trim())
		localStorage.setItem('task8', document.getElementById('task8').value.trim())

		// Показываем модалку
		submitModal.classList.remove('hidden')
		submitModal.style.display = 'flex'
	}

	// Закрыть модалку
	closeModalBtn.onclick = () => {
		submitModal.classList.add('hidden')
		submitModal.style.display = 'none'
	}

	// Подтверждение отправки
	confirmSubmitBtn.onclick = () => {
		const form = document.createElement('form')
		form.method = 'POST'
		form.action =
			'https://script.google.com/macros/s/AKfycby119bAPLrBjBt7R7gELZ1TrkRd_mDQm-UWqz3-UABzycXThAWu70B84Xs1w1PeNUke/exec'

		const fields = [
			'lastname',
			'firstname',
			'middlename',
			'phone',
			'class',
			'difficulty',
			'q1',
			'q2',
			'q3',
			'q4',
			'q5',
			'task6',
			'task7',
			'task8',
		]

		fields.forEach((key) => {
			const input = document.createElement('input')
			input.type = 'hidden'
			input.name = key
			input.value = localStorage.getItem(key) || ''
			form.appendChild(input)
		})

		document.body.appendChild(form)
		form.submit()

        setTimeout(() => {
            fields.forEach(key => localStorage.removeItem(key));
        }, 300);
	}
})
