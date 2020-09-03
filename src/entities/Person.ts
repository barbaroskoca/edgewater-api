import { Entity, Column } from "typeorm"
import { BaseContent } from "./BaseContent";

@Entity()
export class Person extends BaseContent {

    @Column()
    fullName!: string;

    @Column()
    role!: string;

    @Column()
    email!: string;

    @Column()
    password!: string

}