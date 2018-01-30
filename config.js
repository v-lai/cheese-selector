const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    mongooseDebug: true,
    mongoUri: 'mongodb://localhost/cheese-selector',
    port: 8001,
    useEnv: true,
    useMorgan: true,
  },
  test: {
    mongooseDebug: false,
    mongoUri: 'mongodb://localhost/cheese-selector-test',
    port: 8002,
    useEnv: true,
    useMorgan: false
  },
  production: {
    mongooseDebug: false,
    mongoUri: process.env.MONGODB_URI,
    port: process.env.PORT,
    useEnv: false,
    useMorgan: false
  }
}

module.exports = config[env];
