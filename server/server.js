const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
});

const User = mongoose.model('User', {
    email: String,
    password: String,
});

app.post('/register', async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword });
        await user.save();
        res.status(201).send('Registration successful');
    } catch (error) {
        console.error(error);
        next(error); // Pass the error to the error-handling middleware
    }
});

app.post('/login', async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        console.error(error);
        next(error); // Pass the error to the error-handling middleware
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
