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
    console.log(`Clicked! Money increased by ${perClick}. Total: ${money}`); // Debug log
    showMessage(`+$${perClick}`);
});

// Upgrade click handler
upgradeClickBtn.addEventListener('click', () => {
    if (money >= clickUpgradeCost) {
        money -= clickUpgradeCost;
        perClick *= 2;
        clickUpgradeCost *= 3;
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
        autoClickerCost *= 2;
        updateDisplay();
        showMessage('Auto-clicker purchased!');
    } else {
        showMessage('Not enough money for auto-clicker!');
    }
});

// Auto-clicker function
setInterval(() => {
    if (autoClickers > 0) {
        money += autoClickers * perClick;
        updateDisplay();
        console.log(`Auto-click: +${autoClickers * perClick}. Total: ${money}`); // Debug log
    }
}, 1000);

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
    }, 2000); // Reduced to 2 seconds for quicker feedback
}

// Initial display update
updateDisplay();
