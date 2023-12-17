import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,  { cors: true });
  // app.enableCors({
  //   origin: "https://tokenized-ballot-dapp-repo.vercel.app/", // or true to allow any origin
  //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //   allowedHeaders: ['Content-Type'],
  //   credentials: false,
  // }
  // );

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