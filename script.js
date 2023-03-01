const bets = [
    [2, 3, 4, 5, 6],
    [7, 6, 5, 4, 3],
    [0, 9, 8, 6, 3],
    [1, 3, 5, 7, 9],
    [2, 3, 4, 0, 9],
    [5, 2, 3, 4, 1],
  ];

  //Winning numbers
  const drawNumber = [1, 2, 3, 4, 5];

  //task 1
  let isFound = false;
  let position = -1;
  let count = 0;

  for (let i = 0; i < bets.length; i++) {
    let currentBet = bets[i];
    let matchCount = 0;
    for (let j = 0; j < drawNumber.length; j++) {
      if (currentBet.includes(drawNumber[j])) {
        matchCount++;
      }
    }
    if (matchCount === drawNumber.length) {
      isFound = true;
      position = i;
      count++;
      break;
    }
  }

  // a. write a program to check if drawNumber is in
  // bets Array
  if (isFound) {
    console.log("Draw number is in the bets array.");
  } else {
    console.log("Draw number is not in the bets array.");
  }

  // b. find the position of the drawNumber in bets Array
  if (position !== -1) {
    console.log(`Draw number is found at position ${position}.`);
  } else {
    console.log("Draw number is not in the bets array.");
  }

  // c. find the count of drawNumber in bets Array
  if (count > 0) {
    console.log(`Draw number appears ${count} time(s) in the bets array.`);
  } else {
    console.log("Draw number does not appear in the bets array.");
  }

  //task 2
  // a. write a program to display 10 row1buttons 0 - 9
  // let selectedNumbers = [];

  // b. Add another button name even
  // c. Add another button name odd
  //------------------ name small
  //------------------ name big
  //------------------ name clear
  //------------------ name all

  //When you click on either even,odd,small,big,all
  //push to an Array either even,odd,small,big,all

  
function getDrawnumbers() {
    const machineDraw = [];

    // Generate initial draw numbers
    let output = '';
    for (let i = 0; i < 5; i++) {
        machineDraw.push(Math.floor(Math.random() * 10));
        output += `<div class="drawNumber">${machineDraw[i]}</div>`;
    }

    document.querySelector("#draw-numbers").innerHTML = output;
}

let formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  }
let parsedTime = 10;
if(localStorage.remainingSeconds === undefined){
    localStorage.remainingSeconds = parsedTime;
}
function countdown(seconds=localStorage.remainingSeconds) {
    let intervalId = setInterval(function () {
      let hours = Math.floor(seconds / 3600);
      let minutes = Math.floor((seconds % 3600) / 60);
      let myseconds = seconds % 60;
      seconds--;
      localStorage.remainingSeconds = seconds;
      // updateProgressBar(seconds, 60, 1);
   
      if (seconds < 0) {
        clearInterval(intervalId);
        countdown(parsedTime);
        getDrawnumbers();
      }
     let  hrs = formatTime(hours);
     let  secs = formatTime(myseconds);
     let  mins = formatTime(minutes);
      let time = `${hrs}:${mins}:${secs}`;
      localStorage.timer = time;
      let el = document.querySelector("#timer");
      el.innerText = time;
    }, 1000);
  }

  let el = document.querySelector("#timer");
  el.innerText = localStorage.timer;
  

// const timerLoop = setInterval(startTimer);
countdown();

  const instructions = [
   "Choose at least one number from each row.",
//    "Make your best five guesses on each row.",
//    "Select numbers from all rows to form the combinations you intend to guess.",
   "Choose at least 5 numbers from only the first row.",
   "In royal 5, group 60 game, you need to select at least one number from the first row and three numbers from the second row to form a bet.",
//    "Choose from only the third row.",
//    "Try your luck.",
//    "Choose only one number from each row.",
 ];
 const randomIndex = Math.floor(Math.random() * instructions.length);
//  const randomInstruction = instructions[randomIndex];
const randomInstruction = instructions[2];

  const row1buttons = document.querySelectorAll(".btn-row1");
  const row1SpecialButtons = document.querySelectorAll(".special-row1");
  let row1HighlightedButtons = [];
  let row1AllSelectedNumbers = [];

  const row2buttons = document.querySelectorAll(".btn-row2");
  const row2SpecialButtons = document.querySelectorAll(".special-row2");
  let row2HighlightedButtons = [];
  let row2AllSelectedNumbers = [];

  const row3buttons = document.querySelectorAll(".btn-row3");
  const row3SpecialButtons = document.querySelectorAll(".special-row3");
  let row3HighlightedButtons = [];
  let row3AllSelectedNumbers = [];

  // if (randomInstruction === "In royal 5, group 60 game, you need to select at least one number from the first row and three numbers from the second row to form a bet.") {
  //   row3buttons.style.display = 'none';
  //   row3SpecialButtons.style.display = 'none';
  // }

 function updateInstructions() {
   document.getElementById("instructions").innerHTML = randomInstruction;
 }

  // Row 1 functions
  row1buttons.forEach((button) => {
    row1AllSelectedNumbers = [];
    button.addEventListener("click", () => {
      let selectedNumber = parseInt(button.innerText);
      if (row1HighlightedButtons.includes(button.id)) {
        button.classList.remove("highlighted");
        row1HighlightedButtons = row1HighlightedButtons.filter(
          (id) => id !== button.id
        );
        row1AllSelectedNumbers.splice(
          row1AllSelectedNumbers.indexOf(selectedNumber),
          1
        );
      } else {
        button.classList.add("highlighted");
        row1HighlightedButtons.push(button.id);
        row1AllSelectedNumbers.push(selectedNumber);
      }
      console.log(row1AllSelectedNumbers);
    });
  });

  // Select all even numbers in row1
  document.getElementById("even-row1").addEventListener("click", () => {
    row1HighlightedButtons = [];
    row1AllSelectedNumbers = [];
    let even = [0, 2, 4, 6, 8];
    row1buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (even.includes(buttonNumber)) {
        button.classList.add("highlighted");
        row1HighlightedButtons.push(button.id);
        row1AllSelectedNumbers.push(buttonNumber);
      } else {
        button.classList.remove("highlighted");
        const index = row1AllSelectedNumbers.indexOf(
          parseInt(button.textContent)
        );
        if (index !== -1) {
          row1AllSelectedNumbers.splice(index, 1);
        }
      }
    });
    console.log(row1AllSelectedNumbers);
  });

  // Select all odd numbers in row1
  document.getElementById("odd-row1").addEventListener("click", () => {
    row1HighlightedButtons = [];
    row1AllSelectedNumbers = [];
    let odd = [1, 3, 5, 7, 9];
    row1buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (odd.includes(buttonNumber)) {
        button.classList.add("highlighted");
        row1HighlightedButtons.push(button.id);
        row1AllSelectedNumbers.push(buttonNumber);
      } else {
        button.classList.remove("highlighted");
        const index = row1AllSelectedNumbers.indexOf(
          parseInt(button.textContent)
        );
        if (index !== -1) {
          row1AllSelectedNumbers.splice(index, 1);
        }
      }
    });
    console.log(row1AllSelectedNumbers);
  });

  // Select all small numbers in row1
  document.getElementById("small-row1").addEventListener("click", () => {
    row1HighlightedButtons = [];
    row1AllSelectedNumbers = [];
    let small = [0, 1, 2, 3, 4];
    row1buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (small.includes(buttonNumber)) {
        button.classList.add("highlighted");
        row1HighlightedButtons.push(button.id);
        row1AllSelectedNumbers.push(buttonNumber);
      } else {
        button.classList.remove("highlighted");
        const index = row1AllSelectedNumbers.indexOf(
          parseInt(button.textContent)
        );
        if (index !== -1) {
          row1AllSelectedNumbers.splice(index, 1);
        }
      }
    });
    console.log(row1AllSelectedNumbers);
  });

  // Select all big numbers in row1
  document.getElementById("big-row1").addEventListener("click", () => {
    row1HighlightedButtons = [];
    row1AllSelectedNumbers = [];
    let big = [5, 6, 7, 8, 9];
    row1buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (big.includes(buttonNumber)) {
        button.classList.add("highlighted");
        row1HighlightedButtons.push(button.id);
        row1AllSelectedNumbers.push(buttonNumber);
      } else {
        button.classList.remove("highlighted");
        const index = row1AllSelectedNumbers.indexOf(
          parseInt(button.textContent)
        );
        if (index !== -1) {
          row1AllSelectedNumbers.splice(index, 1);
        }
      }
    });
    console.log(row1AllSelectedNumbers);
  });

  // Select all numbers in row1
  document.getElementById("all-row1").addEventListener("click", () => {
    row1HighlightedButtons = [];
    row1AllSelectedNumbers = [];
    let all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    row1buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (all.includes(buttonNumber)) {
        button.classList.add("highlighted");
        row1HighlightedButtons.push(button.id);
        row1AllSelectedNumbers.push(buttonNumber);
      } else {
        button.classList.remove("highlighted");
        const index = row1AllSelectedNumbers.indexOf(
          parseInt(button.textContent)
        );
        if (index !== -1) {
          row1AllSelectedNumbers.splice(index, 1);
        }
      }
    });
    console.log(row1AllSelectedNumbers);
  });

  // Clear all selection in row1
  document.getElementById("clear-row1").addEventListener("click", () => {
    row1HighlightedButtons = [];
    row1AllSelectedNumbers = [];
    // let clear = [];
    row1buttons.forEach((button) => {
    //   let buttonNumber = parseInt(button.textContent);
      button.classList.remove("highlighted");
      const index = row1AllSelectedNumbers.indexOf(
        parseInt(button.textContent)
      );
      if (index !== -1) {
        row1AllSelectedNumbers.splice(index, 1);
      }
    });
    console.log(row1AllSelectedNumbers);
  });

  // Row 2 functions
  row2buttons.forEach((button) => {
    row2AllSelectedNumbers = [];
    button.addEventListener("click", () => {
      let selectedNumber = parseInt(button.innerText);
      if (row2HighlightedButtons.includes(button.id)) {
        button.classList.remove("highlighted");
        row2HighlightedButtons = row2HighlightedButtons.filter(
          (id) => id !== button.id
        );
        row2AllSelectedNumbers.splice(
          row2AllSelectedNumbers.indexOf(selectedNumber),
          1
        );
      } else {
        button.classList.add("highlighted");
        row2HighlightedButtons.push(button.id);
        row2AllSelectedNumbers.push(selectedNumber);
      }
      console.log(row2AllSelectedNumbers);
    });
  });

  // Select all even numbers in row2
  document.getElementById("even-row2").addEventListener("click", () => {
    row2HighlightedButtons = [];
    row2AllSelectedNumbers = [];
    let even = [0, 2, 4, 6, 8];
    row2buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (even.includes(buttonNumber)) {
        button.classList.add("highlighted");
        row2HighlightedButtons.push(button.id);
        row2AllSelectedNumbers.push(buttonNumber);
      } else {
        button.classList.remove("highlighted");
        const index = row2AllSelectedNumbers.indexOf(
          parseInt(button.textContent)
        );
        if (index !== -1) {
          row2AllSelectedNumbers.splice(index, 1);
        }
      }
    });
    console.log(row2AllSelectedNumbers);
  });

  // Select all odd numbers in row2
  document.getElementById("odd-row2").addEventListener("click", () => {
    row2HighlightedButtons = [];
    row2AllSelectedNumbers = [];
    let odd = [1, 3, 5, 7, 9];
    row2buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (odd.includes(buttonNumber)) {
        button.classList.add("highlighted");
        row2HighlightedButtons.push(button.id);
        row2AllSelectedNumbers.push(buttonNumber);
      } else {
        button.classList.remove("highlighted");
        const index = row2AllSelectedNumbers.indexOf(
          parseInt(button.textContent)
        );
        if (index !== -1) {
          row2AllSelectedNumbers.splice(index, 1);
        }
      }
    });
    console.log(row2AllSelectedNumbers);
  });

  // Select all small numbers in row2
  document.getElementById("small-row2").addEventListener("click", () => {
    row2HighlightedButtons = [];
    row2AllSelectedNumbers = [];
    let small = [0, 1, 2, 3, 4];
    row2buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (small.includes(buttonNumber)) {
        button.classList.add("highlighted");
        row2HighlightedButtons.push(button.id);
        row2AllSelectedNumbers.push(buttonNumber);
      } else {
        button.classList.remove("highlighted");
        const index = row2AllSelectedNumbers.indexOf(
          parseInt(button.textContent)
        );
        if (index !== -1) {
          row2AllSelectedNumbers.splice(index, 1);
        }
      }
    });
    console.log(row2AllSelectedNumbers);
  });

  // Select all big numbers in row2
  document.getElementById("big-row2").addEventListener("click", () => {
    row2HighlightedButtons = [];
    row2AllSelectedNumbers = [];
    let big = [5, 6, 7, 8, 9];
    row2buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (big.includes(buttonNumber)) {
        button.classList.add("highlighted");
        row2HighlightedButtons.push(button.id);
        row2AllSelectedNumbers.push(buttonNumber);
      } else {
        button.classList.remove("highlighted");
        const index = row2AllSelectedNumbers.indexOf(
          parseInt(button.textContent)
        );
        if (index !== -1) {
          row2AllSelectedNumbers.splice(index, 1);
        }
      }
    });
    console.log(row2AllSelectedNumbers);
  });

  // Select all numbers in row2
  document.getElementById("all-row2").addEventListener("click", () => {
    row2HighlightedButtons = [];
    row2AllSelectedNumbers = [];
    let all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    row2buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (all.includes(buttonNumber)) {
        button.classList.add("highlighted");
        row2HighlightedButtons.push(button.id);
        row2AllSelectedNumbers.push(buttonNumber);
      } else {
        button.classList.remove("highlighted");
        const index = row2AllSelectedNumbers.indexOf(
          parseInt(button.textContent)
        );
        if (index !== -1) {
          row2AllSelectedNumbers.splice(index, 1);
        }
      }
    });
    console.log(row2AllSelectedNumbers);
  });

  // Clear all selection in row2
  document.getElementById("clear-row2").addEventListener("click", () => {
    row2HighlightedButtons = [];
    row2AllSelectedNumbers = [];
    // let clear = [];
    row2buttons.forEach((button) => {
    //   let buttonNumber = parseInt(button.textContent);
      button.classList.remove("highlighted");
      const index = row2AllSelectedNumbers.indexOf(
        parseInt(button.textContent)
      );
      if (index !== -1) {
        row2AllSelectedNumbers.splice(index, 1);
      }
    });
    console.log(row2AllSelectedNumbers);
  });

  // Row 3 button actions
  row3buttons.forEach((button) => {
    row3AllSelectedNumbers = [];
    button.addEventListener("click", () => {
      let selectedNumber = parseInt(button.innerText);
      if (row3HighlightedButtons.includes(button.id)) {
        button.classList.remove("highlighted");
        row3HighlightedButtons = row3HighlightedButtons.filter(
          (id) => id !== button.id
        );
        row3AllSelectedNumbers.splice(
          row3AllSelectedNumbers.indexOf(selectedNumber),
          1
        );
      } else {
        button.classList.add("highlighted");
        row3HighlightedButtons.push(button.id);
        row3AllSelectedNumbers.push(selectedNumber);
      }
      console.log(row3AllSelectedNumbers);
    });
  });

  // Select all even numbers in row3
  document.getElementById("even-row3").addEventListener("click", () => {
    row3HighlightedButtons = [];
    row3AllSelectedNumbers = [];
    let even = [0, 2, 4, 6, 8];
    row3buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (even.includes(buttonNumber)) {
        button.classList.add("highlighted");
        row3HighlightedButtons.push(button.id);
        row3AllSelectedNumbers.push(buttonNumber);
      } else {
        button.classList.remove("highlighted");
        const index = row3AllSelectedNumbers.indexOf(
          parseInt(button.textContent)
        );
        if (index !== -1) {
          row3AllSelectedNumbers.splice(index, 1);
        }
      }
    });
    console.log(row3AllSelectedNumbers);
  });

  // Select all odd numbers in row3
  document.getElementById("odd-row3").addEventListener("click", () => {
    row3HighlightedButtons = [];
    row3AllSelectedNumbers = [];
    let odd = [1, 3, 5, 7, 9];
    row3buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (odd.includes(buttonNumber)) {
        button.classList.add("highlighted");
        row3HighlightedButtons.push(button.id);
        row3AllSelectedNumbers.push(buttonNumber);
      } else {
        button.classList.remove("highlighted");
        const index = row3AllSelectedNumbers.indexOf(
          parseInt(button.textContent)
        );
        if (index !== -1) {
          row3AllSelectedNumbers.splice(index, 1);
        }
      }
    });
    console.log(row3AllSelectedNumbers);
  });

  // Select all small numbers in row3
  document.getElementById("small-row3").addEventListener("click", () => {
    row3HighlightedButtons = [];
    row3AllSelectedNumbers = [];
    let small = [0, 1, 2, 3, 4];
    row3buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (small.includes(buttonNumber)) {
        button.classList.add("highlighted");
        row3HighlightedButtons.push(button.id);
        row3AllSelectedNumbers.push(buttonNumber);
      } else {
        button.classList.remove("highlighted");
        const index = row3AllSelectedNumbers.indexOf(
          parseInt(button.textContent)
        );
        if (index !== -1) {
          row3AllSelectedNumbers.splice(index, 1);
        }
      }
    });
    console.log(row3AllSelectedNumbers);
  });

  // Select all big numbers in row3
  document.getElementById("big-row3").addEventListener("click", () => {
    row3HighlightedButtons = [];
    row3AllSelectedNumbers = [];
    let big = [5, 6, 7, 8, 9];
    row3buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (big.includes(buttonNumber)) {
        button.classList.add("highlighted");
        row3HighlightedButtons.push(button.id);
        row3AllSelectedNumbers.push(buttonNumber);
      } else {
        button.classList.remove("highlighted");
        const index = row3AllSelectedNumbers.indexOf(
          parseInt(button.textContent)
        );
        if (index !== -1) {
          row3AllSelectedNumbers.splice(index, 1);
        }
      }
    });
    console.log(row3AllSelectedNumbers);
  });

  // Select all numbers in row3
  document.getElementById("all-row3").addEventListener("click", () => {
    row3HighlightedButtons = [];
    row3AllSelectedNumbers = [];
    let all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    row3buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (all.includes(buttonNumber)) {
        button.classList.add("highlighted");
        row3HighlightedButtons.push(button.id);
        row3AllSelectedNumbers.push(buttonNumber);
      } else {
        button.classList.remove("highlighted");
        const index = row3AllSelectedNumbers.indexOf(
          parseInt(button.textContent)
        );
        if (index !== -1) {
          row3AllSelectedNumbers.splice(index, 1);
        }
      }
    });
    console.log(row3AllSelectedNumbers);
  });

  // Clear all selection in row3
  document.getElementById("clear-row3").addEventListener("click", () => {
    row3HighlightedButtons = [];
    row3AllSelectedNumbers = [];
    // let clear = [];
    row3buttons.forEach((button) => {
    //   let buttonNumber = parseInt(button.textContent);
      button.classList.remove("highlighted");
      const index = row3AllSelectedNumbers.indexOf(
        parseInt(button.textContent)
      );
      if (index !== -1) {
        row3AllSelectedNumbers.splice(index, 1);
      }
    });
    console.log(row3AllSelectedNumbers);
  });

  // Event listener for All Zero buttons
  document.getElementById("all0").addEventListener("click", () => {
    const allZeroes = [0];
    selectAllNumbers(allZeroes);
  });

  // Event listener for All One buttons
  document.getElementById("all1").addEventListener("click", () => {
    const allOnes = [1];
    selectAllNumbers(allOnes);
  });

  // Event listener for All Two buttons
  document.getElementById("all2").addEventListener("click", () => {
    const allTwos = [2];
    selectAllNumbers(allTwos);
  });

  // Event listener for All Three buttons
  document.getElementById("all3").addEventListener("click", () => {
    const allThrees = [3];
    selectAllNumbers(allThrees);
  });

  // Event listener for All Four buttons
  document.getElementById("all4").addEventListener("click", () => {
    const allFours = [4];
    selectAllNumbers(allFours);
  });

  // Event listener for All Five buttons
  document.getElementById("all5").addEventListener("click", () => {
    const allFives = [5];
    selectAllNumbers(allFives);
  });

  // Event listener for All Six buttons
  document.getElementById("all6").addEventListener("click", () => {
    const allSixes = [6];
    selectAllNumbers(allSixes);
  });

  // Event listener for All Seven buttons
  document.getElementById("all7").addEventListener("click", () => {
    const allSevens = [7];
    selectAllNumbers(allSevens);
  });

  // Event listener for All Eight buttons
  document.getElementById("all8").addEventListener("click", () => {
    const allEights = [8];
    selectAllNumbers(allEights);
  });

  // Event listener for All Nine buttons
  document.getElementById("all9").addEventListener("click", () => {
    const allNines = [9];
    selectAllNumbers(allNines);
  });

  function selectAllNumbers(selectedNumbers) {
    // Loop through each button in row 1 to select
    row1buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (selectedNumbers.includes(buttonNumber)) {
        button.classList.add("highlighted");
        if (!row1AllSelectedNumbers.includes(buttonNumber)) {
          row1HighlightedButtons.push(button.id);
          row1AllSelectedNumbers.push(buttonNumber);
        }
      }
    });
    console.log(row1AllSelectedNumbers);

    // Loop through each button in row 2 to select
    row2buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (selectedNumbers.includes(buttonNumber)) {
        button.classList.add("highlighted");
        if (!row2AllSelectedNumbers.includes(buttonNumber)) {
          row2HighlightedButtons.push(button.id);
          row2AllSelectedNumbers.push(buttonNumber);
        }
      }
    });
    console.log(row2AllSelectedNumbers);

    // Loop through each button in row 3 to select
    row3buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (selectedNumbers.includes(buttonNumber)) {
        button.classList.add("highlighted");
        if (!row3AllSelectedNumbers.includes(buttonNumber)) {
          row3HighlightedButtons.push(button.id);
          row3AllSelectedNumbers.push(buttonNumber);
        }
      }
    });
    console.log(row3AllSelectedNumbers);
  }

  // Event listener for clearing Zero buttons
  document.getElementById("clear0").addEventListener("click", () => {
    const allZeroes = [0];
    clearAllNumbers("0", allZeroes);
  });

  // Event listener for clearing One buttons
  document.getElementById("clear1").addEventListener("click", () => {
    const allOnes = [1];
    clearAllNumbers("1", allOnes);
  });

  // Event listener for clearing Two buttons
  document.getElementById("clear2").addEventListener("click", () => {
    const allTwos = [2];
    clearAllNumbers("2", allTwos);
  });

  // Event listener for clearing Three buttons
  document.getElementById("clear3").addEventListener("click", () => {
    const allThrees = [3];
    clearAllNumbers("3", allThrees);
  });

  // Event listener for clearing Four buttons
  document.getElementById("clear4").addEventListener("click", () => {
    const allFours = [4];
    clearAllNumbers("4", allFours);
  });

  // Event listener for clearing Five buttons
  document.getElementById("clear5").addEventListener("click", () => {
    const allFives = [5];
    clearAllNumbers("5", allFives);
  });

  // Event listener for clearing Six buttons
  document.getElementById("clear6").addEventListener("click", () => {
    const allSixes = [6];
    clearAllNumbers("6", allSixes);
  });

  // Event listener for clearing Seven buttons
  document.getElementById("clear7").addEventListener("click", () => {
    const allSevens = [7];
    clearAllNumbers("7", allSevens);
  });

  // Event listener for clearing Eight buttons
  document.getElementById("clear8").addEventListener("click", () => {
    const allEights = [8];
    clearAllNumbers("8", allEights);
  });

  // Event listener for clearing Nine buttons
  document.getElementById("clear9").addEventListener("click", () => {
    const allNines = [9];
    clearAllNumbers("9", allNines);
  });

  function clearAllNumbers(columnNum, selectedNumbers) {
    // const clearButton = document.getElementById(`clear${columnNum}`);

    // Loop through each button in row 1 to clear
    row1buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (selectedNumbers.includes(buttonNumber)) {
        button.classList.remove("highlighted");
      }
    });
    row1AllSelectedNumbers = row1AllSelectedNumbers.filter(
      (num) => !selectedNumbers.includes(num)
    );
    console.log(row1AllSelectedNumbers);

    // Loop through each button in row 2 to clear
    row2buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (selectedNumbers.includes(buttonNumber)) {
        button.classList.remove("highlighted");
      }
    });
    row2AllSelectedNumbers = row2AllSelectedNumbers.filter(
      (num) => !selectedNumbers.includes(num)
    );
    console.log(row2AllSelectedNumbers);

    // Loop through each button in row 3 to clear
    row3buttons.forEach((button) => {
      let buttonNumber = parseInt(button.textContent);
      if (selectedNumbers.includes(buttonNumber)) {
        button.classList.remove("highlighted");
      }
    });
    row3AllSelectedNumbers = row3AllSelectedNumbers.filter(
      (num) => !selectedNumbers.includes(num)
    );
    console.log(row3AllSelectedNumbers);
  }

  function calculateCombinations(selection) {
    const n = selection.length;
  
    // Check if selection has at least 5 numbers
    if (n < 5) {
      console.log("Error: Selection must have at least 5 numbers");
      return 0;
    }
  
    // To calculate number of combinations of 5 numbers from user selection on 1 row
    let combinations = [];
    if (n === 5) {
      combinations.push(selection);
    } else {
      for (let i = 0; i < n-4; i++) {
        for (let j = i+1; j < n-3; j++) {
          for (let k = j+1; k < n-2; k++) {
            for (let m = k+1; m < n-1; m++) {
              for (let p = m+1; p < n; p++) {
                combinations.push([selection[i], selection[j], selection[k], selection[m], selection[p]]);
              }
            }
          }
        }
      }
    }
  
    return combinations;
  }

  function getCombinations(array, r) {
    const result = [];
   
    // Recursive function to generate combinations
    function generateCombos(combination, index) {
      if (combination.length === r) {
        result.push(combination);
        return;
      }
   
      if (index >= array.length) {
        return;
      }
   
      const newCombo = [...combination];
      newCombo.push(array[index]);
   
      generateCombos(newCombo, index + 1);
      generateCombos(combination, index + 1);
    }
   
    generateCombos([], 0);
    return result;
  }
 
  // let q = [0,4,6,8];
  // console.log("Q Combo:", getCombinations(q, 1));
  
  function mergeAndCheck2(arr1, arr2) {
    let mergedArr = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr2[j].indexOf(arr1[i][0]) !== -1 && arr1[i].every(val => arr2[j].indexOf(val) !== -1)) {
          continue; // skip if arr1 and arr2 have same values
        } else {
          mergedArr.push([...arr1[i], ...arr2[j]]);
        }
      }
    }
    return mergedArr;
  }

  // Submit the selection made and clear
  document.getElementById("submit").addEventListener("click", () => {
    let allSelectedNumbers = [];
    allSelectedNumbers.push(row1AllSelectedNumbers);
    allSelectedNumbers.push(row2AllSelectedNumbers);
    allSelectedNumbers.push(row3AllSelectedNumbers);
    let mergedRowsArray = JSON.stringify(allSelectedNumbers);


    if (randomInstruction === "Choose at least 5 numbers from only the first row.") {
        allSelectedNumbers = row1AllSelectedNumbers;
        const combinations = calculateCombinations(row1AllSelectedNumbers);
        console.log(`Number of combinations: ${combinations.length}`);
        console.log(JSON.stringify(combinations));
      }

      console.log("Selected numbers from all rows: ", mergedRowsArray);


    if (randomInstruction === "Choose at least one number from each row.") {
        let combinations = [];
    for (let i = 0; i < row1AllSelectedNumbers.length; i++) {
      for (let j = 0; j < row2AllSelectedNumbers.length; j++) {
        for (let k = 0; k < row3AllSelectedNumbers.length; k++) {
          combinations.push([row1AllSelectedNumbers[i], row2AllSelectedNumbers[j], row3AllSelectedNumbers[k]]);
          const currentCombination = [
            row1AllSelectedNumbers[i],
            row2AllSelectedNumbers[j],
            row3AllSelectedNumbers[k],
          ];
          const uniqueCombination = [...new Set(currentCombination)];
          if (uniqueCombination.length === currentCombination.length) {
            combinations.push(currentCombination);
          }
        }
      }
    }
    console.log(JSON.stringify(combinations));
    let totalBets = combinations.length;
    console.log("Total number of bets: ", totalBets);
    }

    if (randomInstruction === "In royal 5, group 60 game, you need to select at least one number from the first row and three numbers from the second row to form a bet.") {
      let row1Combo = getCombinations(row1AllSelectedNumbers, 1);
      let row2Combo = getCombinations(row2AllSelectedNumbers, 3);
      let merge = mergeAndCheck2(row1Combo, row2Combo);
        console.log(JSON.stringify(merge));
        console.log("Number of bets", JSON.stringify(merge.length));
    }

    // if (
    //   JSON.stringify(machineDraw) ===
    //   JSON.stringify(row1AllSelectedNumbers.slice(0, machineDraw.length))
    // ) {
    //   result.textContent = "Row 1 matched in the same order!";
    //   result.classList.add("match");
    // } else if (
    //   JSON.stringify(machineDraw) ===
    //   JSON.stringify(row2AllSelectedNumbers.slice(0, machineDraw.length))
    // ) {
    //   result.textContent = "Row 2 matched in the same order!";
    //   result.classList.add("match");
    // } else if (
    //   JSON.stringify(machineDraw) ===
    //   JSON.stringify(row3AllSelectedNumbers.slice(0, machineDraw.length))
    // ) {
    //   result.textContent = "Row 3 matched in the same order!";
    //   result.classList.add("match");
    // } else {
    //   result.textContent = "No row matched in the same order.";
    //   result.classList.add("nomatch");
    // }

    // clear row 1 after submission
    // row1buttons.forEach((button) => {
    //   let buttonNumber = parseInt(button.textContent);
    //   button.classList.remove("highlighted");
    //   row1AllSelectedNumbers = [];
    // });
    // console.log(row1AllSelectedNumbers);

    // clear row 1 after submission
    // row2buttons.forEach((button) => {
    //   let buttonNumber = parseInt(button.textContent);
    //   button.classList.remove("highlighted");
    //   row2AllSelectedNumbers = [];
    // });
    // console.log(row2AllSelectedNumbers);

    // clear row 1 after submission
    // row3buttons.forEach((button) => {
    //   let buttonNumber = parseInt(button.textContent);
    //   button.classList.remove("highlighted");
    //   row3AllSelectedNumbers = [];
    // });
    // console.log(row3AllSelectedNumbers);

    // setInterval(function(){
    //   location.reload();
    // }, 5000);

  });

  document.getElement;