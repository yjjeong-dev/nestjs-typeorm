import { CoreEntity } from "src/common/entities/common.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Member extends CoreEntity {
  @Column()
  name: string;

  @Column()
  email: string;
}
