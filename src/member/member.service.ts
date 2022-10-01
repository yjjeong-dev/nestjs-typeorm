import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Member } from "./entities/member.entity";

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>
  ) {}

  post(member: Member): object {
    return this.memberRepository.save(member);
  }
  get(): object {
    return this.memberRepository.find();
  }
}
