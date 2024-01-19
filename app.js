function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((data) => {
    document.querySelector("#advice").textContent = data.slip.advice;
    document.querySelector("#slip__id").textContent = `ADVICE
     # ${data.slip.id}`
  });
}