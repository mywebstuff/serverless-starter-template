import { keepWarm } from './utils'

/**
 * @param {AWSLambda.APIGatewayEvent} event
 * @param {AWSLambda.Context} context
 */
export const handler = async (event, context) => {
  console.log(JSON.stringify({ event }, null, 2))
  console.log(JSON.stringify({ context }, null, 2))
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `This is an env var: ${process.env.EXAMPLE_ENV_VAR}`,
    }),
  }
}

export default keepWarm(handler)
