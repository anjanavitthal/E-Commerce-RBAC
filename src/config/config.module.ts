import { Module } from '@nestjs/common';
import { BackendConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [ConfigService, BackendConfigService],
  exports: [BackendConfigService],
})
export class BackendConfigModule {}
