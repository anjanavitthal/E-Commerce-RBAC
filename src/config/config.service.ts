import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class BackendConfigService {
  constructor(private configService: ConfigService) {}

  get typeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('DB_HOST'),
      port: Number(this.configService.get('DB_PORT')),
      username: this.configService.get('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get('DB_NAME', 'e-commerce'),
      entities: [ __dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    };
  }
}
