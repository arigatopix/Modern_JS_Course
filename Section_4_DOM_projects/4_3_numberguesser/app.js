/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

///////////////////////////////////
// Game values
let min = 9,
    max = 10,
    winingNum = getRandomNum(min,max), // random ภายหลัง ค่าระหว่าง min, max
    guessLeft = 3; // จำนวนรอบ

// UI Elements รับค่าจาก UI
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// Assign UI min and max เพื่อนำไปแสดงใน html
minNum.textContent = min;
maxNum.textContent = max;

///////////////////////////////////

// *** Listen for guess
guessBtn.addEventListener('click',function(){
  // เก็บค่าจำนวนเต็มจาก UI
  let guess = parseInt(guessInput.value); // กรอก 1.2 มา มันจะถูก parseInt เป็น 1

  // Validate (ตรวจสอบความถูกต้อง) ให้เป็นตัวเลข และอยู่ระหว่าง min, max
  if (isNaN(guess) || guess < min || guess > max ) {
    // *** ใช้ guess === NaN ไม่ได้ ต้องเช็คด้วย isNaN(geuss)
    setMessage(`Please enter a number ${min} and ${max}`, 'red');
  } else {

    if(guess === winingNum) {
      // Check if won ชนะแล้วจะให้แสดงข้อความ กับเปลี่ยนสี
      gameOver(true,`${winingNum} is correct, YOU WIN!`);

    } else {
      // กรณีใส่เลขผิด ให้นับรอบ ลดทีละ 1
      guessLeft -= 1;
  
      if (guessLeft === 0) {
        // Game Over - lost (won === false)
        gameOver(false,`Game Over, you lost. The correct number was ${winingNum}`);

      } else {
        // Game continues - answer wrong
        // Show message
        setMessage(`${guess} is not correct, ${guessLeft} guesses left`,'red');

        // Clear Input ให้ใส่ตัวเลขใหม่
        guessInput.value ='';
      }
    }
  }
});

// *** Play again event listener ให้กดปุ่ม play again
game.addEventListener('mousedown', function(e) {
  // *** ใช้ mousedown แทนที่จะใช้ click เพราะตอน game over จะขึ้น 'play-again' จากนั้นเราปล่อยเมาส์ หน้าเว็บจะ reload เลย เพราะ 'click' จะเข้า game.addEventListener ทันที ไม่รอให้ขึ้นค่า Play Again?

  if(e.target.className === 'play-again') {
    //* ให้กดโดนปุ่มที่มี class name = 'play-again' เท่านั้นถึงจะ reload 
    //* ระวังเรื่อง event bubling ถ้าไม่กำหนด class name กดตรงไหนก็ reload เพราะ id game คือใหญ่สุด
    window.location.reload();
  }

});
 
///////////////////////////////////

//*  Set game over
function gameOver(won,msg) {
  
  // กำหนด condition กรณี ชนะจริงมั้ย
  let color;
  won === true ? color = 'green' : color = 'red' ;

  // * Disable input ใส่ disabled 
  guessInput.disabled = true;
  // * เปลี่ยนสีของ border
  guessInput.style.borderColor = color;
  // เปลี่ยนสีข้อความ
  message.style.color = color;
  // แสดงข้อความ
  setMessage(msg);

  // Play Again ? เชคเมื่อ game over ตามเงื่อนไข กำหนดให้เปลี่ยนข้อความในปุ่ม และ reset ค่า
  guessBtn.value = "Play Again?";
  guessBtn.className += "play-again"; //เพิ่ม class เข้าไป เดี๋ยวจะ addEventListener
  
};

//* Set message
function setMessage(msg, color) {
  message.textContent = msg;
  // ให้แสดงสีของ msg โดยระบุ สีผ่าน argument
  message.style.color = color;
}

// * Get Wining Number
function getRandomNum(min,max) {
  // เข้า case hoisting ภาษาอื่นจะต้องประกาศ function ไว้บนสุดแล้วเรียกใช้ แต่ JS ไม่ใช่ สามารถกำหนดไว้ตรงนี้ได้ function จะซ้อนด้านบนของ execution context

  return Math.floor(Math.random()*((max-min)+1)+min); 
  // max-min ต้อง + 1 ทุกครั้ง เพราะ Math.random(); ค่า <1
  // +min เพราะบางครั้ง min ไม่ใช่ 1 จะได้กำหนดกรอบได้ถูกต้อง

  // Math.random(); random ค่า 0 ถึง 0.9xxx ไม่ถึง 1
  // Math.floor(); คือปัดเศษให้เป็นจำนวนเต็ม
}