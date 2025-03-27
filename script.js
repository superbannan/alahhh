let money = 0;
let perClick = 1;
let autoClickers = 0;
let clickUpgradeCost = 10;
let autoClickerCost = 50;

const moneyDisplay = document.getElementById('money');
const perClickDisplay = document.getElementById('perClick');
const autoClickersDisplay = document.getElementById('autoClickers');
const clickBtn = document.getElementById('clickBtn');
const upgradeClickBtn = document.getElementById('upgradeClickBtn');
const buyAutoClickerBtn = document.getElementById('buyAutoClickerBtn');
const clickUpgradeCostDisplay = document.getElementById('clickUpgradeCost');
const autoClickerCostDisplay = document.getElementById('autoClickerCost');
const message = document.getElementById('message');

// Manual click handler
clickBtn.addEventListener('click', () => {
    money += perClick;
    updateDisplay();
});

// Upgrade click handler
upgradeClickBtn.addEventListener('click', () => {
    if (money >= clickUpgradeCost) {
        money -= clickUpgradeCost;
        perClick *= 2;
        clickUpgradeCost *= 3; // Cost increases faster than reward
        updateDisplay();
        showMessage('Click power upgraded!');
    } else {
        showMessage('Not enough money to upgrade click!');
    }
});

// Buy auto-clicker handler
buyAutoClickerBtn.addEventListener('click', () => {
    if (money >= autoClickerCost) {
        money -= autoClickerCost;
        autoClickers++;
        autoClickerCost *= 2; // Cost doubles each time
        updateDisplay();
        showMessage('Auto-clicker purchased!');
    } else {
        showMessage('Not enough money for auto-clicker!');
    }
});

// Auto-clicker function
setInterval(() => {
    money += autoClickers * perClick;
    updateDisplay();
}, 1000); // Runs every second

function updateDisplay() {
    moneyDisplay.textContent = money;
    perClickDisplay.textContent = perClick;
    autoClickersDisplay.textContent = autoClickers;
    clickUpgradeCostDisplay.textContent = clickUpgradeCost;
    autoClickerCostDisplay.textContent = autoClickerCost;
    upgradeClickBtn.disabled = money < clickUpgradeCost;
    buyAutoClickerBtn.disabled = money < autoClickerCost;
}

function showMessage(text) {
    message.textContent = text;
    setTimeout(() => {
        message.textContent = '';
    }, 3000);
}

// Initial display update
updateDisplay();
