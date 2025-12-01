document.addEventListener("DOMContentLoaded", () => {

  const backBtn = document.getElementById("methodBackBtn");
  const toCodingBtn = document.getElementById("methodToCodingBtn");

  // Назад — переход на страницу выбора типа задач
  backBtn.addEventListener("click", () => {
    window.location.href = "theory.html";
  });

  // Переход к заданиям по программированию
  toCodingBtn.addEventListener("click", () => {
    window.location.href = "practice.html";
  });

});
