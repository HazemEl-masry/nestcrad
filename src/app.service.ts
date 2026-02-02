import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHome(): string{
    return "Home";
  }

  getUser(): string{
    return "Hazem";
  }

  sayHelloTo(name:string) {
    return "Hello to: " + name;
  }
}
