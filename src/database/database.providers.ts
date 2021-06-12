import { Provider } from '@nestjs/common';
import { DATABASE_CONNECTION } from 'src/constants';
import { createConnection } from 'typeorm';

export const databaseProviders: Provider[] = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: '127.0.0.1',
        port: 5432,
        username: 'postgres',
        password: '123456',
        database: 'account_dev',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
