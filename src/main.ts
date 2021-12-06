import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
     // Make sure that there's no unexpected data
     whitelist: true,
     forbidNonWhitelisted: true,
     forbidUnknownValues: true,

     /**
      * Detailed error messages since this is 4xx
      */
     disableErrorMessages: false,
     
     validationError: {
       /**
        * WARNING: Avoid exposing the values in the error output (could leak sensitive information)
        */
       value: false,
     },

     /**
      * Transform the JSON into a class instance when possible.
      * Depends on the type of the data on the controllers
      */
     transform: true,
    })
  );

  //configuración de la documentación
  const config = new DocumentBuilder()
  .setTitle('Servidor de la Dirección Industriales del SPPS')
  .setDescription('Descripción de la API Industriales')
  .setVersion('1.0')
  .addTag('industriales')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);




  await app.listen(3000);
}
bootstrap();
