### Html структуру

```html
<div class="art-board">
  <header class="header">
    <div class="text">Є прохід // Немає проходу</div>
    <div class="text">
      Вибрати точку старту // Вибрати кінець лабіринту // Шукаємо прохід //
      Вибрати точку старту
    </div>
  </header>
  <div class="art-board-labyrinth"></div>
  <div class="art-board-navigation">
    <div class="art-board-item item--size">
      <input type="text" />
      <button>Map size</button>
    </div>
    <div class="art-board-item">
      <button>Refresh Map</button>
    </div>
  </div>
</div>
```

#### Functions

```js
const onLabyrinthMap = () => {}; // ==> Генерація лабіринту
const reset = () => {}; // ==> Скинути налаштування лабіринту
const refreshMap = () => {}; // ==> Перегенерувати лабіринт
const mapSize = () => {}; // ==> Згенерувати нову карту лабіринту певного розміру
const clickStep = () => {}; // ==>  Степ івенти роботи лабіринту
const checkStep = () => {}; // ==> Функция яка буде шагати по клітинкам
const getValidSib = () => {}; // ==> Перевірка куди буможно ходити
```
