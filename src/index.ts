import express from 'express';
import { VercelRequest, VercelResponse } from '@vercel/node';

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello from Vercel!');
});

export default (req: VercelRequest, res: VercelResponse) => app(req, res);
