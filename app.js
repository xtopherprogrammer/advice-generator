// function fetchAdvice() {
//     fetch("https://api.adviceslip.com/advice")
//   .then((res) => res.json())
//   .then((data) => {
//     document.querySelector("#advice").textContent = data.slip.advice;
//     document.querySelector("#slip__id").textContent = `ADVICE
//      # ${data.slip.id}`
//   });
// }

async function fetchAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  document.querySelector("#advice").textContent = data.slip.advice;
  document.querySelector("#slip__id").textContet = `ADVICE # ${data.slip.id}`;
}
