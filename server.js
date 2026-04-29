const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/api/stats', (req, res) => {
    res.json({
        p: Math.floor(Math.random() * 20) + 40, // Активна 40-60 МВт
        q: Math.floor(Math.random() * 10) + 10, // Реактивна 10-20 МВАр
        v1: (110 + Math.random()).toFixed(1),
        v2: (10 + Math.random() * 0.5).toFixed(1),
        temp: Math.floor(Math.random() * 30) + 40, // Температура 40-70 C
        cos: 0.95
    });
});

app.listen(3000, () => {
    console.log('Тестовий сервер запущено на http://localhost:3000');
});