module.exports = {
  apps: [
    {
      name: 'Beaver Server',
      script: 'dist/main.js',
      instances: 0,
      exec_mode: 'cluster',
      watch: true,
      env: {
        NODE_ENV: 'production',
        PORT: '3000'
      }
    }
  ]
};
