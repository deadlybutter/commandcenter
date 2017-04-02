require('forky')({
  path: `./server.js`,
  workers: process.env.FORKY_CORES || require('os').cpus().length,
  enable_logging: process.env.FORKY_LOGGING === 'true',
});
