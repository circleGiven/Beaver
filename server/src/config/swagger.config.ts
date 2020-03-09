import {INestApplication} from '@nestjs/common';
import {DocumentBuilder, SwaggerBaseConfig, SwaggerModule} from '@nestjs/swagger';

export function setSwagger(app: INestApplication) {
    const options: SwaggerBaseConfig = new DocumentBuilder()
        .setTitle('Beaver')
        .setDescription('Beaver API documentation')
        .setVersion('Avril 0.1')
        .setContactEmail('circlegiven@gmail.com')
        .setLicense('Github repository', 'https://github.com/circleGiven/Beaver')
        .addBearerAuth('Authorization', 'header')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);
}
