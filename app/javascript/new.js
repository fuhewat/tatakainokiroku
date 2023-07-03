document.addEventListener('DOMContentLoaded', function() {
  const winButton = document.getElementById("winButton");
  const winCountElement = document.getElementById("winCount");
  let winCount = 0;
  const loseButton = document.getElementById("loseButton");
  const loseCountElement = document.getElementById("loseCount");
  let loseCount = 0;
  const endButton = document.getElementById("endButton");
  const totalCountElement = document.getElementById("totalCount");
  const winRateElement = document.getElementById("winRate")

  let totalCount = (parseInt(winCountElement.textContent.split(" ")[1]) || 0) + (parseInt(loseCountElement.textContent.split(" ")[1]) || 0);
  totalCountElement.textContent = "今回の合計試合数  " + totalCount + "回";

  let winRate = (winCount / (totalCount || 1)) * 100;
  winRateElement.textContent = "勝率  " + winRate.toFixed(1) + "%";

  winButton.addEventListener('mouseover', function() {
    winButton.setAttribute("style", "background-color:#1e90ff;")
  });

  winButton.addEventListener('mouseout', function() {
    winButton.removeAttribute("style");
  });

  winButton.addEventListener('click', function() {
    winCount++;
    winCountElement.textContent = "勝ち  " + winCount + "回";
    winButton.style.marginTop = '15px';
    setTimeout(function() {
      winButton.style.marginTop = '0';
    }, 15);
    updateTotalCount();
  });

  const winCountField = document.getElementById("winCountField");
  winCountField.value = winCount;

  loseButton.addEventListener('mouseover', function() {
    loseButton.style.backgroundColor = '#ff9595';
  });

  loseButton.addEventListener('mouseout', function() {
    loseButton.removeAttribute("style");
  });

  loseButton.addEventListener('click', function() {
    loseCount++;
    loseCountElement.textContent = "負け  " + loseCount + "回";
    loseButton.style.marginTop = '15px';
    setTimeout(function() {
      loseButton.style.marginTop = '0';
    }, 15);
    updateTotalCount();
  });

  endButton.addEventListener('mouseover', function() {
    endButton.style.backgroundColor = '#00ff00';
  });

  endButton.addEventListener('mouseout', function() {
    endButton.removeAttribute("style");
  });

  endButton.addEventListener('click', function() {
    endButton.style.marginTop = '15px';
    setTimeout(function() {
      endButton.style.marginTop = '0';
    }, 15);
    updateTotalCount();
  });

  function updateTotalCount() {
    totalCount = winCount + loseCount;
    totalCountElement.textContent = "今回の合計試合数  " + totalCount + "回";
    winRate = (winCount / totalCount) * 100;
    winRateElement.textContent = "勝率  " + winRate.toFixed(1) + "%";
  }
});
