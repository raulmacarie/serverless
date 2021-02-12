import express, { Request, Response } from 'express';
import serverless from 'serverless-http';

const server = express();

server.get('/healthz', (_: Request, res: Response) => {
  res.status(200).json({ health: true });
});

// handle nextjs routing
server.get('*', async (_: Request, res: Response) => {
  res.status(200).json({ allGood: true });
});

const handler = serverless(server);
export default async function app(event, context) {
  // you can do other things here
  const result = await handler(event, context);
  // and here
  return result;
}
