
document.querySelector('.start-btn').addEventListener('click', () => {
  document.querySelector('.popup').style.display = 'none';
  document.querySelector('.game-container').style.display = 'block';

  let timer = 10;
  const timerEl = document.querySelector('.timer');
  const countdown = setInterval(() => {
    timer--;
    timerEl.textContent = timer;
    if (timer <= 0) {
      clearInterval(countdown);
      window.location.href = "https://ldl1.com/link?z=9584135&var=pushhousetest1&ymid={click_id}";
    }
  }, 1000);
});
