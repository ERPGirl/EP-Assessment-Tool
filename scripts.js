// Show/hide questions based on scope selection
const scopeRadios = document.getElementsByName('scope');
scopeRadios.forEach(radio => {
  radio.addEventListener('change', function() {
    document.getElementById('hcm-questions').classList.add('hidden');
    document.getElementById('fin-questions').classList.add('hidden');
    document.getElementById('both-questions').classList.add('hidden');

    if (this.value === 'hcm') document.getElementById('hcm-questions').classList.remove('hidden');
    if (this.value === 'fin') document.getElementById('fin-questions').classList.remove('hidden');
    if (this.value === 'both') document.getElementById('both-questions').classList.remove('hidden');
  });
});

// Calculate score and display result
document.getElementById('submit-btn').addEventListener('click', () => {
  const checked = document.querySelectorAll('input[type=radio]:checked');
  if (checked.length === 0) {
    document.getElementById('result').innerText = "Please answer the questions first.";
    return;
  }

  let total = 0;
  checked.forEach(c => total += parseInt(c.value));
  const avg = total / checked.length;

  let msg = "";
  if (avg >= 4) msg = "✅ High Readiness: Your Workday implementation is well on track!";
  else if (avg >= 2.5) msg = "⚖️ Moderate Readiness: You have a solid foundation, but some gaps remain.";
  else msg = "⚠️ Low Readiness: Significant opportunities exist to strengthen your Workday approach.";

  document.getElementById('result').innerText = msg;
});
