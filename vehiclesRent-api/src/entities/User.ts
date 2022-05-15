import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, UpdateDateColumn} from 'typeorm'

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        unique: true
    })
    email:string

    @Column()
    passwd:string

    @Column({
        default:-1
    })
    vehicle:number
    
    @Column({
        default:null
    })
    init_date:Date

    @Column({
        default:null
    })
    finishe_date:Date

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updateAd:Date
}