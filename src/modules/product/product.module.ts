import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { RoleGuard } from 'src/common/guards/role.guard';
import { RolePermission } from 'src/entities/role-permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, RolePermission])],
  controllers: [ProductController],
  providers: [ProductService, RoleGuard],
})
export class ProductModule {}
