import auth0 from '../../utils/auth0';
console.log("env: ..... "+process.env.domain);
export default async function login(req, res) { 
  try {
    await auth0.handleLogin(req, res, {});
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
