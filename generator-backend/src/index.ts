import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
	res.send('Hello Express TypeScript!');
});

app.listen(PORT, () => console.log(`App running at localhost:${PORT}`));

