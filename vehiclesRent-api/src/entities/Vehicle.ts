import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, UpdateDateColumn} from 'typeorm'

@Entity()
export class Vehicle extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        default:null
    })
    id_user:number

    @Column({
        unique: true
    })
    plate:string

    @Column()
    model:string

    @Column({
        default:false
    })
    rent:boolean
    
    @Column({
        default:10
    })
    daily_price:number

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