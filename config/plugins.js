module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        jwtSecret: env('JWT_SECRET'),
      },
    },
  });