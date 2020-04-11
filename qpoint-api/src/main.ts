import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import 'dotenv/config';
import {Logger} from "@nestjs/common";

const port = process.env.API_PORT;

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {cors: true});
    app.enableCors();
    await app.listen(port);
    Logger.log(`Server is running on http://localhost:${port}`, 'Bootstrap')
}

bootstrap();