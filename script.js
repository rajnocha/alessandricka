const answers = {
    1: { answers: ["Jessie", "Jessinka", "Jessik"], letter: "S" },
    2: { answers: ["Filipíny"], letter: "I" },
    3: { answers: ["Xenie", "Xeňa", "Xena"], letter: "X" },
    4: { answers: ["Smažak"], letter: "S" },
    5: { answers: ["Péra", "Pero"], letter: "E" },
    6: { answers: ["Oktávka", "Octavia", "Oktavia"], letter: "V" },
    7: { answers: ["Femboy"], letter: "E" },
    8: { answers: ["N-word", "Nword", "N word"], letter: "N" }
};

function normalize(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function checkAnswer(q) {
    const input = document.getElementById("q" + q);
    const possibleAnswers = answers[q].answers.map(a => normalize(a));
    const actual = normalize(input.value);

    if (possibleAnswers.includes(actual)) {
        input.disabled = true;
        input.classList.add("correct");
        input.value = answers[q].answers[0];
        document.getElementById("b" + q).textContent = answers[q].letter;

        solved[q - 1] = true;
        checkCompletion();
    }

  }

for (let i = 1; i <= 8; i++) {
    document.getElementById("q" + i).addEventListener("input", () => checkAnswer(i));
}

let solved = new Array(8).fill(false);
let finished = false;

function checkCompletion() {
    if (finished) return;

    if (solved.every(v => v)) {
        finished = true;

        // zobraz obrázek
        document.getElementById("finalImage").style.display = "block";

        // popup
        setTimeout(() => {
    	showBirthdayPopup();
		}, 250);
    }

    for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.className = "confetti";

    c.style.left = Math.random() * 100 + "vw";
    c.style.background = ["#ff69b4","#ffd700","#87cefa","#98fb98"][Math.floor(Math.random()*4)];
    c.style.animationDuration = (2 + Math.random() * 3) + "s";

    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
}
}

setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    const emojis = ["🎂","🧁","🍰","🎉","💖"];
	heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 500);

function showBirthdayPopup() {
    document.getElementById("birthdayPopup").classList.add("show");
}

function hideBirthdayPopup() {
    document.getElementById("birthdayPopup").classList.remove("show");

    setTimeout(() => {
        showQrPopup();
    }, 250);
}

document.getElementById("closePopup").addEventListener("click", hideBirthdayPopup);

document.getElementById("birthdayPopup").addEventListener("click", (e) => {
    if (e.target.id === "birthdayPopup") {
        hideBirthdayPopup();
    }
});

function showQrPopup() {
    document.getElementById("qrPopup").classList.add("show");
}

function hideQrPopup() {
    document.getElementById("qrPopup").classList.remove("show");
}

document.getElementById("closeQrPopup").addEventListener("click", hideQrPopup);

document.getElementById("qrPopup").addEventListener("click", (e) => {
    if (e.target.id === "qrPopup") {
        hideQrPopup();
    }
});