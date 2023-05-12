import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LogsModule } from './logs/logs.module';
import { LogModule } from './log/log.module';
import { EarlyExitModule } from './early-exit/early-exit.module';

@Module({
  imports: [UserModule, LogsModule, LogModule, EarlyExitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
