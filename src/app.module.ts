import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { FacturaModule } from './factura/factura.module';
import { DetalleModule } from './detalle/detalle.module';

@Module({
  imports: [ClienteModule, FacturaModule, DetalleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
