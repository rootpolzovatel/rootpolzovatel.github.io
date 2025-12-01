const classSelect = document.getElementById("classSelect");
const difficultyDiv = document.getElementById("difficulty");
const toTasksBtn = document.getElementById("toTasksBtn");

classSelect.addEventListener("change", () => 
{
    const cls = parseInt(classSelect.value);
    if (cls >= 5 && cls <= 6) 
    {
        difficultyDiv.textContent = "Сложность: Начальный уровень (5–6 класс)";
    } 
    else if (cls >= 7 && cls <= 9) 
    {
        difficultyDiv.textContent = "Сложность: Средний уровень (7–9 класс)";
    } 
    else if (cls >= 10 && cls <= 11) 
    {
        difficultyDiv.textContent = "Сложность: Продвинутый уровень (10–11 класс)";
    } 
    else 
    {
        difficultyDiv.textContent = "Сложность: —";
    }
});

toTasksBtn.addEventListener("click", () => 
{
    const lastname = document.getElementById("lastname").value.trim();
    const firstname = document.getElementById("firstname").value.trim();

    if (!lastname || !firstname || !classSelect.value) 
    {
        alert("Пожалуйста, заполните все обязательные поля.");
        return;
    }

    window.location.href = "C:\\Users\\mi\\Documents\\GitHub\\rootpolzovatel.github.io\\TheoreticalBlock\\TheoreticalPage.html";

    alert("Регистрация завершена! Далее — задания.");
});
