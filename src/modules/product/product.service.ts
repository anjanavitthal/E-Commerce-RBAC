import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    let newProduct = this.productRepository.create();
    Object.assign(newProduct, createProductDto);
    return this.productRepository.save(newProduct);
  }

  async findAllProducts() {
    const products = await this.productRepository.find();
    return {
      message: 'Products sent successfully',
      data: products,
    };
  }

  async findProductById(id: string) {
    const product = this.productRepository.findOne({ where: { id } });
    return {
      message: 'Products sent successfully',
      data: product,
    };
  }

  async updateProduct(updateProductDto: UpdateProductDto) {
    await this.productRepository.update({ id: updateProductDto.id }, updateProductDto);
    return {
      message: 'Products updated successfully',
    };
  }

  async removeProductById(id: string) {
    await this.productRepository.delete({ id });
    return {
      message: 'Products deleted successfully',
    };
  }
}
