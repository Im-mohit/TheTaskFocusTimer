// popup.js

let timerInterval;
let hours = 0;
let minutes = 25;
let seconds = 0;

function updateTimerDisplay() {
    document.getElementById('timer').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    // Get task name input value
    const taskName = document.getElementById('taskName').value;
    
    // Convert task name input to header size string
    document.getElementById('taskHeader').textContent = taskName;
    
    // Hide input fields and buttons except for reset button
    document.getElementById('taskInputs').style.display = 'none';
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('stopBtn').style.display = 'inline-block';
    document.getElementById('resetBtn').style.display = 'inline-block'; // Show reset button
    
    // Start the timer
    hours = parseInt(document.getElementById('hours').value);
    minutes = parseInt(document.getElementById('minutes').value);
    seconds = 0;
    
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0 && hours === 0) {
                clearInterval(timerInterval);
                // Timer finished, trigger notification or other action
            } else {
                if (minutes === 0) {
                    hours--;
                    minutes = 59;
                } else {
                    minutes--;
                }
                seconds = 59;
            }
        } else {
            seconds--;
        }
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById('stopBtn').style.display = 'none';
    document.getElementById('startBtn').style.display = 'inline-block';
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('taskInputs').style.display = 'block';
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('stopBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';
    document.getElementById('taskHeader').textContent = ''; // Clear task name header
    document.getElementById('taskName').value = ''; // Clear task name input
    hours = 0;
    minutes = 25;
    seconds = 0;
    updateTimerDisplay();
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

// Initialize timer display
updateTimerDisplay();
