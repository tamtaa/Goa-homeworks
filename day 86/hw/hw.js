// ტაიმერი:
// პირობები ტაიმერის ასაწყობად —
// დაწერე ტაიმერის ლოგიკა (კოდი) setInterval-ის გამოყენებით — რათა მომხმარებელს შეეძლოს ვებ-საიტზე დროს/წამზომის ნახვა.
// დაამატე ღილაკები — Pause/Continue.
// ასევე დაამატე ღილაკი Reset, რომლის დაჭერის შემთხვევაში, მთელი setInterval დარესეთდება.

// let span = document.querySelector('span')
// let startpause =document.querySelector('startpause')
// let Reset = document.querySelector('button')
// let time = 0
// let intervalid = setInterval(()=>{
//     span.textContent = time
//     time+=1
// }, 1000)
// btn.addEventListener('click', ()=>clearInterval(intervalid))

let span = document.querySelector('#timer-display');
let startPauseBtn = document.querySelector('#start-pause-btn');
let resetBtn = document.querySelector('#reset-btn');

let time = 0;
let intervalId = null;
let isRunning = false; // ინახავს ინფორმაციას, ჩართულია თუ არა ტაიმერი

function updateTimer() {
    intervalId = setInterval(() => {
        time += 1;
        span.textContent = time;
    }, 1000);
}

// Pause / Continue ლოგიკა
startPauseBtn.addEventListener('click', () => {
    if (!isRunning) {
        // თუ გაჩერებულია, ვრთავთ
        updateTimer();
        startPauseBtn.textContent = "Pause";
        isRunning = true;
    } else {
        // თუ ჩართულია, ვაპაუზებთ
        clearInterval(intervalId);
        startPauseBtn.textContent = "Continue";
        isRunning = false;
    }
});

// Reset ლოგიკა
resetBtn.addEventListener('click', () => {
    // ვაჩერებთ ინტერვალს
    clearInterval(intervalId);
    // ვასუფთავებთ მონაცემებს
    time = 0;
    isRunning = false;
    // ვანახლებთ ინტერფეისს
    span.textContent = time;
    startPauseBtn.textContent = "Start";
});