const classSelect = document.getElementById("classSelect");
const difficultyDiv = document.getElementById("difficulty");

document.addEventListener("DOMContentLoaded", () => {
    const fields = ["lastname", "firstname", "middlename", "phone"];

    fields.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        const saved = localStorage.getItem(id);
        if (saved) el.value = saved;

        el.addEventListener("input", () => {
            localStorage.setItem(id, el.value);
        });
    });

    const savedClass = localStorage.getItem("class");
    if (savedClass) {
        classSelect.value = savedClass;
        updateDifficulty(savedClass);
    }

    const savedDifficulty = localStorage.getItem("difficulty");
    if (savedDifficulty) {
        difficultyDiv.textContent = savedDifficulty;
    }
});

classSelect.addEventListener("change", () => {
    const cls = classSelect.value;
    updateDifficulty(cls);

    localStorage.setItem("class", cls);
    localStorage.setItem("difficulty", difficultyDiv.textContent);
});

document.getElementById("toTasksBtn").addEventListener("click", (e) => {
    e.preventDefault();

    const values = {
        lastname: document.getElementById("lastname").value.trim(),
        firstname: document.getElementById("firstname").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        classSelect: classSelect.value
    };

    if (!values.lastname || !values.firstname || !values.phone || !values.classSelect) {
        alert("Заполните все поля.");
        return;
    }

    window.location.href = "theory.html";
});

function updateDifficulty(cls) {
    if (cls === "5" || cls === "6") {
        difficultyDiv.textContent = "Сложность: Начальный уровень (5–6 класс)";
    } else if (cls === "7" || cls === "8" || cls === "9") {
        difficultyDiv.textContent = "Сложность: Средний уровень (7–9 класс)";
    } else if (cls === "10" || cls === "11") {
        difficultyDiv.textContent = "Сложность: Продвинутый уровень (10–11 класс)";
    } else {
        difficultyDiv.textContent = "Сложность: —";
    }
}
