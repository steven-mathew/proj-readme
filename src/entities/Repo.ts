import {
    Column,
    Entity as TOEntity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany, 
} from "typeorm";
import {makeId, slugify} from "../util/helpers";

import Entity from './Entity'
import Post from "./Post";
import User from './User'

@TOEntity("repos")
export default class Repo extends Entity {
    constructor(repo: Partial<Repo>) {
        super()
        Object.assign(this, repo)
    }
    
    @Index()
    @Column({ unique: true })
    name: string
    
    @Column()
    title: string

    @Column({ type: 'text', nullable: true })
    description: string
    
    @Column({ nullable: true })
    imageUrn: string

    @Column({ nullable: true })
    bannerUrn: string

    @ManyToOne(() => User)
    @JoinColumn({ name: 'username', referencedColumnName: 'username' })
    user: User

    @OneToMany(() => Post, post => post.repo)
    posts: Post[]
}
