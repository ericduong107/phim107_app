const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware để parse JSON
app.use(express.json());

// 1. Serve Flutter Web build (static files)
app.use(express.static(path.join(__dirname, 'build')));

// Nếu route không khớp API thì trả về index.html (cho Flutter router hoạt động)
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next(); 
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 2. API backend
const users = [
  { id: 1, name: 'Khang' },
  { id: 2, name: 'Minh' }
];

// API GET users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// API POST add user
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
