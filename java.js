    // Elementlarni olish
    const inputBox = document.getElementById('input-box');
    const sendButton = document.getElementById('send-button');
    const minusButton = document.getElementById('minus-button');
    const plusButton = document.getElementById('plus-button');
    const numberDisplay = document.getElementById('number');
    const colorPicker = document.getElementById('color-picker');
    
    let number = parseInt(numberDisplay.textContent);

    // Send tugmasini bosganda sonni o'rnatish
    sendButton.addEventListener('click', () => {
      const inputValue = parseInt(inputBox.value);
      if (!isNaN(inputValue)) {
        number = inputValue; // Yangi sonni o'rnatish
        numberDisplay.textContent = number;
        inputBox.value = ""; // Inputni tozalash
      } else {
        alert("Iltimos, son kiriting!"); // Foydalanuvchiga xatolik xabari
      }
    });

    // Plus tugmasini bosganda sonni oshirish
    plusButton.addEventListener('click', () => {
      number++;
      numberDisplay.textContent = number;
    });

    // Minus tugmasini bosganda sonni kamaytirish
    minusButton.addEventListener('click', () => {
      number--;
      numberDisplay.textContent = number;
    });

    // Hover effekti
    [minusButton, plusButton].forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.color = 'yellow';
      });
      button.addEventListener('mouseout', () => {
        button.style.color = 'white';
      });
    });

    // Rangni o'zgartirish
    colorPicker.addEventListener('input', (event) => {
      numberDisplay.style.color = event.target.value;
    });