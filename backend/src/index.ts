import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(express.json());

app.get('/ping', (_req: Request, res: Response) => {
  res.json({ msg: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
