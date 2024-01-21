import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { SequelizeConfigService } from './config/sequelizeConfigService';
import { databaseConfig } from './config/configuration';

import { TodoModule } from './todo/todo.module';

console.log(databaseConfig().sql);

@Module({
  imports: [
    ConfigModule.forRoot({ load: [databaseConfig] }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService,
    }),
    AppModule,
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
