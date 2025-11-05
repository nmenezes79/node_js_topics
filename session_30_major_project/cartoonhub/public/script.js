document.getElementById("quizForm").addEventListener("submit", function (e) {
	e.preventDefault();

	let score = 0;
	const answers = {
		q1: "SpongeBob",
		q2: "Tom & Jerry"
	};

	Object.keys(answers).forEach(q => {
		let selected = document.querySelector(`input[name=${q}]:checked`);
		if (selected && selected.value === answers[q]) {
			score++;
		}
	});

	document.getElementById("result").innerText = `You scored ${score}/2 🎉`;
});
