import { APIGatewayEvent, Context } from 'aws-lambda';

import * as handler from '../simple';

describe('simple', () => {
  it('Should return 200 when event is valid ', async () => {
    const event = { body: 'Test Body' } as APIGatewayEvent;
    const context = {} as Context;

    const response = await handler.hello(event, context);

    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe('string');
  });
});
