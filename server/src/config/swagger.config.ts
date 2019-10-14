import {INestApplication} from '@nestjs/common';
import {DocumentBuilder, SwaggerBaseConfig, SwaggerModule} from '@nestjs/swagger';

export function setSwagger(app: INestApplication) {
    const options: SwaggerBaseConfig = new DocumentBuilder()
        .setTitle('Beaver Server')
        .setDescription('Beaver API description')
        .addTag('Beaver')
        .setVersion('1.0')
        .addBearerAuth('Authorization', 'header')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
}
