// Slot Machine
function spinSlots() {
    const symbols = ['🍒', '🍋', '🍊', '🍉', '⭐'];
    const reel1 = symbols[Math.floor(Math.random() * symbols.length)];
    const reel2 = symbols[Math.floor(Math.random() * symbols.length)];
    const reel3 = symbols[Math.floor(Math.random() * symbols.length)];

    const reels = document.querySelectorAll('#slot-reels span');
    reels.forEach(reel => reel.classList.add('spin'));

    setTimeout(() => {
        document.getElementById('reel1').textContent = reel1;
        document.getElementById('reel2').textContent = reel2;
        document.getElementById('reel3').textContent = reel3;

        const result = (reel1 === reel2 && reel2 === reel3) ? 'You Win!' : 'Try Again!';
        document.getElementById('slot-result').textContent = result;

        reels.forEach(reel => reel.classList.remove('spin'));
    }, 500);
}

// Roulette Wheel
function spinRoulette() {
    const wheel = document.getElementById('wheel');
    const ball = document.getElementById('ball');

    const spinDuration = 2000; // 2 seconds
    const spinAngle = Math.floor(Math.random() * 360) + 720; // Random angle + 2 full spins

    wheel.style.transition = `transform ${spinDuration}ms ease-out`;
    wheel.style.transform = `rotate(${spinAngle}deg)`;

    setTimeout(() => {
        const resultAngle = spinAngle % 360;
        const result = `Result Angle: ${resultAngle.toFixed(2)}°`;
        document.getElementById('roulette-result').textContent = result;
    }, spinDuration);
}

// Blackjack
function dealCards() {
    const suits = ['♥', '♦', '♠', '♣'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const getRandomCard = () => `${values[Math.floor(Math.random() * values.length)]}${suits[Math.floor(Math.random() * suits.length)]}`;

    const dealerCard = getRandomCard();
    const playerCard = getRandomCard();

    document.getElementById('dealer-hand').innerHTML = `<div class="card-flip">${dealerCard}</div>`;
    document.getElementById('player-hand').innerHTML = `<div class="card-flip">${playerCard}</div>`;

    // Trigger card flip animation
    setTimeout(() => {
        document.querySelectorAll('.card-flip').forEach(card => card.classList.remove('card-flip'));
    }, 500);

    // Simple result display
    const result = (playerCard === dealerCard) ? 'It\'s a tie!' : 'Cards dealt!';
    document.getElementById('blackjack-result').textContent = result;
}
