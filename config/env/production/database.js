    // strapi-api/config/database.js
    // module.exports = ({ env }) => ({
    //   connection: {
    //     client: env('DATABASE_CLIENT','postgres'),
    //     connection: {
    //       host: env('DATABASE_HOST', 'localhost'),
    //       port: env.int('DATABASE_PORT', 5432),
    //       database: env('DATABASE_NAME', 'strapi'),
    //       user: env('DATABASE_USERNAME', 'strapi'),
    //       password: env('DATABASE_PASSWORD', 'strapi'),
    //       // schema: env('DATABASE_SCHEMA', 'public'), // Not required
    //       ssl: false,
    //     },
    //     debug: false,
    //   },
    // });

module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('PGHOST', '127.0.0.1'),
        port: env.int('PGPORT', 5432),
        database: env('PGDATABASE', 'strapi'),
        user: env('PGUSER', 'strapi'),
        password: env('PGPASSWORD', 'strapi'),
       ssl: env.bool(true),
      },
      pool: {min: 0}
    },
  });