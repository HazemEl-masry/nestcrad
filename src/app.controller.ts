import { Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/home")
  getHome(): string {
    return this.appService.getHome();
  }

  @Post("/user")
  getUser(@Query() qu): any {
    return qu;
    return this.appService.getUser();
  }

  // Query params
  @Post("/user2")
  getUser2(@Query() username2): any {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return username2.name;
  }

  // Path params
  @Post("/user3/:name")
  getUser3(@Param() param): any {
    return param;
  }

  // Body params
  @Post("/user4")
  getUser4(@Body() body): any {
    return body;
  }

  // return specific param from the body in response
  @Post("/user5")
  getUser5(@Body("name") name: string) {
    return this.appService.sayHelloTo(name);
  }

  // Query params with specific name(param)
  @Post("/country")
  getCountry(@Query("name") countryName): any {
    return countryName;
  }

}
