document
  .getElementById("loanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    checkEligibility();
  });

function checkEligibility() {
  const annualIncome = parseFloat(
    document.getElementById("annualIncome").value
  );
  const loanUse = document.getElementById("loanUse").value;
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);

  // Perform eligibility check here (You can define your own eligibility criteria)

  let eligibilityMessage;
  if (annualIncome >= 25000 && loanAmount <= 5000) {
    eligibilityMessage = "Congratulations! You are eligible for the loan.";
  } else {
    eligibilityMessage = "Sorry, you are not eligible for the loan.";
  }

  document.getElementById("result").innerText = eligibilityMessage;
}
