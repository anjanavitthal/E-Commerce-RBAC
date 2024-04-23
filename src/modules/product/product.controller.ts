import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EUserRole } from '../users/user.enum';
import { Roles } from 'src/common/role.decorator';
import { RoleGuard } from 'src/common/guards/role.guard';
import { JWTAuthGuard } from 'src/common/guards/jwt.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @Roles(EUserRole.ADMIN, EUserRole.SELLER)
  @UseGuards(RoleGuard)
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Get()
  @Roles(EUserRole.ADMIN, EUserRole.CUSTOMER, EUserRole.SELLER, EUserRole.SUPPORTER)
  @UseGuards(RoleGuard)
  @UseGuards(JWTAuthGuard)
  async findAllProducts() {
    return this.productService.findAllProducts();
  }

  @Get(':id')
  async findProductById(@Param('id') id: string) {
    return this.productService.findProductById(id);
  }

  @Patch('')
  @UsePipes(ValidationPipe)
  @Roles(EUserRole.ADMIN, EUserRole.SELLER)
  @UsePipes(ValidationPipe)
  async updateProduct(@Body() updateProductDto: UpdateProductDto) {
    return this.productService.updateProduct(updateProductDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  @Roles(EUserRole.ADMIN, EUserRole.SUPPORTER)
  async removeProductById(@Param('id') id: string) {
    return await this.productService.removeProductById(id);
  }
}
