import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';
import { BackendConfigService } from './config/config.service';
import { BackendConfigModule } from './config/config.module';

@Module({
  imports: [
    // TypeOrmModule.forRootAsync({
    //  imports: [BackendConfigModule],
    //  inject: [BackendConfigService],
    //  useFactory: (backendConfigService: BackendConfigService) => backendConfigService.typeOrmConfig
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'e-commerce',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ProductModule,
    BackendConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
