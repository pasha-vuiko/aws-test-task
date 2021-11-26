import compression from 'fastify-compress';
import helmet from 'fastify-helmet';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { config } from 'src/app.config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  await app.register(compression, { encodings: ['gzip', 'deflate'] });
  await app.register(helmet, config.helmet);
  app.enableCors();

  await app.listen(3002, '0.0.0.0');
  console.log(`App is running on: ${await app.getUrl()}`);
}

bootstrap();
