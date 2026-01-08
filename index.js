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

    const lastname = document.getElementById("lastname").value.trim();
    const firstname = document.getElementById("firstname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const cls = classSelect.value;

    if (!lastname || !firstname || !phone || !cls) {
        alert("Заполните все поля.");
        return;
    }

    let targetPage = "";

    const beginnerClasses = ["5", "6"];
    const middleClasses = ["7", "8", "9", "10", "11"];

    if (beginnerClasses.includes(cls)) {
        targetPage = "theory_beginner.html";
    } else if (middleClasses.includes(cls)) {
        targetPage = "theory_middle.html";
    }

    if (!targetPage) {
        alert("Ошибка определения уровня сложности.");
        return;
    }

    window.location.href = targetPage;
});


function updateDifficulty(cls) {
    if (cls === "5" || cls === "6") {
        difficultyDiv.textContent = "Сложность: Начальный уровень (5–6 класс)";
    } else if (cls === "7" || cls === "8" || cls === "9") {
        difficultyDiv.textContent = "Сложность: Средний уровень (7–9 класс)";
    } else if (cls === "10" || cls === "11") {
        difficultyDiv.textContent = "Сложность: Средний уровень (7–9 класс)";
    } else {
        difficultyDiv.textContent = "Сложность: —";
    }
}
