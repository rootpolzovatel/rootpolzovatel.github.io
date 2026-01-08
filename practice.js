document.addEventListener('DOMContentLoaded', () => {
	const sendBtn = document.getElementById('sendBtn');
	const submitModal = document.getElementById('submitModal');
	const closeModalBtn = document.getElementById('closeModalBtn');
	const confirmSubmitBtn = document.getElementById('confirmSubmitBtn');
	const backBtn = document.getElementById('practiceBackBtn');

	// Практические задания
	const fields = ["task6", "task7", "task8"];

	// Восстановление и автосохранение кода
	fields.forEach(id => {
		const el = document.getElementById(id);
		if (!el) return;

		const saved = localStorage.getItem(id);
		if (saved) el.value = saved;

		el.addEventListener("input", () => {
			localStorage.setItem(id, el.value);
		});
	});

	// Кнопка «Назад» — методичка по уровню
	backBtn.onclick = () => {
		const cls = localStorage.getItem('class');
		let methodPage = '';
		if (cls === '5' || cls === '6') methodPage = 'method_beginner.html';
		else if (cls === '7' || cls === '8' || cls === '9' || cls === '10' || cls === '11') 
			methodPage = 'method_middle.html';
		else {
			alert('Ошибка определения уровня');
			return;
		}
		window.location.href = methodPage;
	};

	// Нажатие «Завершить олимпиаду»
	sendBtn.onclick = () => {
		// Обновляем значения локально
		fields.forEach(id => {
			localStorage.setItem(id, document.getElementById(id).value.trim());
		});

		// Показываем модалку
		submitModal.classList.remove('hidden');
		submitModal.style.display = 'flex';
	};

	// Закрыть модалку
	closeModalBtn.onclick = () => {
		submitModal.classList.add('hidden');
		submitModal.style.display = 'none';
	};

	// Подтверждение отправки
	confirmSubmitBtn.onclick = () => {
		const form = document.createElement('form');
		form.method = 'POST';
		form.action = 'https://script.google.com/macros/s/AKfycby119bAPLrBjBt7R7gELZ1TrkRd_mDQm-UWqz3-UABzycXThAWu70B84Xs1w1PeNUke/exec';

		// Все поля для отправки (те же ключи, что и у младших)
		const submitFields = [
			'lastname','firstname','middlename','phone','class','difficulty',
			'q1','q2','q3','q4','q5',
			'task6','task7','task8'
		];

		submitFields.forEach(key => {
			const input = document.createElement('input');
			input.type = 'hidden';
			input.name = key;
			input.value = localStorage.getItem(key) || '';
			form.appendChild(input);
		});

		document.body.appendChild(form);
		form.submit();

		setTimeout(() => {
			submitFields.forEach(key => localStorage.removeItem(key));
		}, 300);
	};
});
