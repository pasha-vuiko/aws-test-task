export const config = {
  app: {
    host: process.env.APP_HOST ?? process.env.HOSTNAME,
    port: process.env.PORT,
    playground: process.env.GRAPHQL_PLAYGROUND === 'true',
    playgroundIntrospection: process.env.GRAPHQL_PLAYGROUND === 'true',
  },
  helmet: {
    // options for proper working GraphQL playground with Fastify
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [
          `'self'`,
          `'unsafe-inline'`,
          'cdn.jsdelivr.net',
          'fonts.googleapis.com',
        ],
        fontSrc: [`'self'`, 'fonts.gstatic.com'],
        imgSrc: [`'self'`, 'data:', 'cdn.jsdelivr.net'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`, `cdn.jsdelivr.net`],
      },
    },
  }
};
