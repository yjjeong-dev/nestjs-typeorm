import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class CoreEntity {
  @ObjectIdColumn()
  // @PrimaryGeneratedColumn()
  id: ObjectID;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}

@Entity()
export class IncludeSoftDeleteCoreEntity extends CoreEntity {
  @DeleteDateColumn()
  deletedAt?: Date;
}
