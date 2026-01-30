const changePlanBtn = document.getElementById('changePlan');
const planName = document.getElementById('planName');
const planPrice = document.getElementById('planPrice');

let yearly = true;

changePlanBtn.addEventListener('click', () => {
  if (yearly) {
    planName.textContent = "Monthly Plan";
    planPrice.textContent = "$5.99/month";
  } else {
    planName.textContent = "Annual Plan";
    planPrice.textContent = "$59.99/year";
  }
  yearly = !yearly;
});
