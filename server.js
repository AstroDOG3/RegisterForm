const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://mixzas123:mixzas1570123@cluster0.ruzqumx.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', { firstName: String, surName: String, dateOfBirth: Date, gender: String, email: String, userName: String, passWord: String });

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
  const { firstName, surName, dateOfBirth, gender, email, userName, passWord } = req.body;

  if (!firstName || !surName || !dateOfBirth || !gender || !email || !userName || !passWord) {
    res.status(400).json({ error: 'All fields are required' });
    return;
  }
  const user = new User({ firstName, surName, dateOfBirth, gender, email, userName, passWord });
  await user.save();
  res.json(user);
});

app.post('/auth', async (req, res) => {
  const { userLog, passLog } = req.body;
  console.log(userLog);
  console.log(passLog);
  const user = await User.find({ userName : userLog,passWord : passLog });
  console.log(user);
  if (user.length > 0) {
    res.json({ authenticated: true ,user : user});
    
  } else {
    res.json({ authenticated: false });
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
