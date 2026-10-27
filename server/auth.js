const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'german_master_ai_super_secret_key_2026';

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name
    },
    JWT_SECRET,
    { expiresIn: '30d' }
  );
}

function authMiddleware(req, res, next) {
  let token = req.headers['authorization'];
  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7);
  } else if (req.query && req.query.token) {
    token = req.query.token;
  }

  if (!token) {
    return res.status(401).json({ error: 'Avtorizatsiyadan o‘tmagan' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Yaroqsiz yoki muddati o‘tgan token' });
  }
}

module.exports = {
  generateToken,
  authMiddleware
};
