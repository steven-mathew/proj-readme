import {
    PrimaryGeneratedColumn, 
    BaseEntity,
    UpdateDateColumn,
    CreateDateColumn,
} from "typeorm";
import { classToPlain, Exclude } from 'class-transformer'

export default abstract class Entity extends BaseEntity {
    @Exclude()
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    toJSON() {
        return classToPlain(this)
    }
}
