const AuthService = require('../../application/services/authService');

const authController = (userRepository) => {
  const authService = new AuthService(userRepository);

  return {
    register: async (req, res) => {
      try {
        await authService.register(req.body.username, req.body.password);
        res.status(201).json({ message: 'User created successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    login: async (req, res) => {
      try {
        const token = await authService.login(req.body.username, req.body.password);
        res.json({ token });
      } catch (error) {
        res.status(401).json({ error: error.message });
      }
    }
  };
};

module.exports = authController;
