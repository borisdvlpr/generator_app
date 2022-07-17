import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import generatorRouter from './routes/generatorRouter';
import paymentsRouter from './routes/paymentsRouter';

const app: Application = express();
const PORT: any = process.env.PORT || 3001;

const options: cors.CorsOptions = {
	origin: ['http://localhost:3000']
};

app.use(cors(options));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
	res.send(`
		<h2>Endpoints Routes</h2>
		<ul>
			<li>Generator Endpoint - <a>localhost:3001/api/generator</a></li>
			<li>Secret Endpoint - <a>localhost:3001/api/secret</a></li>
		</ul>
	`);
})

app.use('/api', generatorRouter, paymentsRouter);

app.listen(PORT, () => console.log(`App running at localhost:${PORT}`));

