// HINTS:
import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
const url = 'https://secrets-api.appbrewery.com/random';

app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(url);
        const secret = response.data.secret;
        const user = response.data.username;
        res.render('index.ejs', { secret, user });
    }
    catch (error) {
        res.sendStatus(404);
        console.error(error.response.data);
    }
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

