module.exports = {
  apps: [
    {
      name: 'Beaver-server',
      script: './dist/main.js',
      env: {
        NODE_ENV: 'production',
        PORT: '3000'
      }
    }
  ]
};
