document.addEventListener('DOMContentLoaded', function () {
    const foodIcons = [
        './images/food/borsh.jpg',
        './images/food/varenyky.webp',
        './images/food/holubtsy.webp',
        './images/food/paska.jpg'
    ]; // Add paths to your food images

    const fallingFoodContainer = document.getElementById('falling-food');

    function createFood() {
        const food = document.createElement('img');
        food.src = foodIcons[Math.floor(Math.random() * foodIcons.length)];
        food.className = 'food';
        food.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        food.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall speed
        food.style.animationDelay = Math.random() * 5 + 's'; // Random delay
        fallingFoodContainer.appendChild(food);

        // Remove food after animation ends to save memory
        food.addEventListener('animationend', () => {
            food.remove();
        });
    }

    // Generate food continuously
    setInterval(createFood, 500);
});
