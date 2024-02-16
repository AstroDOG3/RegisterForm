const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Add this line

mongoose.connect('mongodb+srv://mixzas123:mixzas1570123@cluster0.ruzqumx.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

const User = mongoose.model('User', { firstName: String, surName: String, dateOfBirth: Date, gender: String, email: String, userName: String, passWord: String });

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS

app.use(express.json());

app.post('/register', async (req, res) => {
  const { firstName, surName, dateOfBirth, gender, email, userName, passWord } = req.body;
  console.log(firstName)
  console.log(surName)
  console.log(dateOfBirth)
  console.log(gender)
  console.log(email)
  console.log(userName)
  console.log(passWord)


  if (!firstName || !surName || !dateOfBirth || !gender || !email || !userName || !passWord) {
    res.status(400).json({ error: 'All fields are required' });
    return;
  }
  const user = new User({ firstName, surName, dateOfBirth, gender, email, userName, passWord });
  await user.save();
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
