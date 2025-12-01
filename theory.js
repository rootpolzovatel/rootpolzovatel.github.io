document.addEventListener("DOMContentLoaded", () => {

    const toGuideBtn = document.getElementById("toGuideBtn");
    const fields = ["q1", "q2", "q3", "q4", "q5"];

    fields.forEach(id => {
        const el = document.getElementById(id);

        const saved = localStorage.getItem(id);
        if (saved) el.value = saved;

        el.addEventListener("input", () => {
            localStorage.setItem(id, el.value);
        });
    });
    toGuideBtn.addEventListener("click", () => {

        const q1 = document.getElementById("q1").value.trim();
        const q2 = document.getElementById("q2").value.trim();
        const q3 = document.getElementById("q3").value.trim();
        const q4 = document.getElementById("q4").value.trim();
        const q5 = document.getElementById("q5").value.trim();

        localStorage.setItem("q1", q1);
        localStorage.setItem("q2", q2);
        localStorage.setItem("q3", q3);
        localStorage.setItem("q4", q4);
        localStorage.setItem("q5", q5);

        window.location.href = "method.html";
    });

    document.getElementById("backBtn").onclick = () => {
        window.location.href = "index.html";
    };

});
