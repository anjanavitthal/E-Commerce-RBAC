import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';
import { BackendConfigService } from './config/config.service';
import { BackendConfigModule } from './config/config.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (backendConfigService: BackendConfigService) => backendConfigService.typeOrmConfig,
      imports: [BackendConfigModule],
      inject: [BackendConfigService],
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
