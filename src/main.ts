import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configure CORS using CorsMiddleware
  const corsOptions: CorsOptions = {
    origin: 'https://tokenized-ballot-dapp-repo.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  };

  app.use((req, res, next) => {
    // Use CorsMiddleware
    // This can also be done with app.enableCors() as a shorthand
    res.header('Access-Control-Allow-Origin', corsOptions.origin);
    res.header('Access-Control-Allow-Methods', (corsOptions.methods as string[]).join(', '));
    res.header('Access-Control-Allow-Headers', (corsOptions.allowedHeaders as string[]).join(', '));
    res.header('Access-Control-Allow-Credentials', corsOptions.credentials.toString());

    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });

  const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('example')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();