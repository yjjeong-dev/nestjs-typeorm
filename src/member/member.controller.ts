import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { Member } from "./entities/member.entity";
import { MemberService } from "./member.service";

@Controller("member")
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  post(@Body(ValidationPipe) member: Member): object {
    return this.memberService.post(member);
  }

  @Get()
  get(): object {
    return this.memberService.get();
  }
}
