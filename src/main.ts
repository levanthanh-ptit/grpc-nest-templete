import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'user_pb',
        protoPath: './api/proto/user_pb/user.proto',
      },
    },
  );
  console.log(__dirname);
  await app.listenAsync();
}
bootstrap();
