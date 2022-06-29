import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    name: string

    @Column()
    rol: string
}