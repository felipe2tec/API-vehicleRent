import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, UpdateDateColumn} from 'typeorm'

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        unique: true,
    })
    email:string

    @Column()
    passwd:string

    @Column({
        default:-1
    })
    vehicle:number

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updateAd:Date
}