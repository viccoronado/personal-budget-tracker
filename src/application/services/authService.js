const bcrypt = require('bcryptjs');
const jwtUtils = require('../utils/jwtUtils');

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async register(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword };
    await this.userRepository.create(user);
  }

  async login(username, password) {
    const user = await this.userRepository.findByUsername(username);
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    return jwtUtils.generateToken(user.id);
  }
}

module.exports = AuthService;
