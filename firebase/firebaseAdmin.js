import * as firebaseAdmin from "firebase-admin";
import serviceAccount from './secret.json';

const privateKey = process.env["admin_private_key"];
const clientEmail = process.env["admin_client_email"];
const projectId = 'nextjs-tina-cms';

if (!privateKey || !clientEmail || !projectId) {
  console.log(
    `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
  );
}

function getProjectApp() {
  let regApp = firebaseAdmin.apps.filter((app) => {
    return app.name == 'nextJsApp'
  })[0]
  if (!regApp) {
    regApp = firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(serviceAccount),
      databaseURL: "https://nextjs-tina-cms-default-rtdb.firebaseio.com"
    }, 'nextJsApp');
  }
  return regApp
}

export {firebaseAdmin, getProjectApp};