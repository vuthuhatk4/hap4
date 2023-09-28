// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'iimt0qsdlg'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-h72ydfr71scohpq6.us.auth0.com',            // Auth0 domain
  clientId: 'MTATtrLNii5bkpxb0641aLdYXX3nZ2zd',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
