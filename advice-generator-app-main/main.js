const btn = document.querySelector("#btn-dice");
const adviceId = document.querySelector('#advice-id');
const adviceText = document.querySelector('#advice-text');
const loading = document.querySelector('#loading');

btn.addEventListener("click", () => {
  adviceId.textContent = 'LOADING...'
  loading.classList.remove('hidden');
  adviceText.classList.add('hidden');
  btn.classList.add('hidden');
  
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((json) => {
      const {id, advice} = json.slip;
      setTimeout(()=>{
        adviceId.textContent = `ADVICE ${id}`
        adviceText.textContent = `“${advice}”`
        loading.classList.add('hidden');
        adviceText.classList.remove('hidden');
        btn.classList.remove('hidden');
      }, 1000)
    })
});
