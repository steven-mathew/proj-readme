import {
    BeforeInsert,
    Column,
    Entity as TOEntity,
    Index,
    JoinColumn,
    ManyToOne, 
} from "typeorm";
import {makeId, slugify} from "../util/helpers";

import Entity from './Entity'
import Repo from "./Repo";
import User from './User'

@TOEntity("posts")
export default class Post extends Entity {
    constructor(post: Partial<Post>) {
        super()
        Object.assign(this, post)
    }
    
    @Index()
    @Column()
    identifier: string 

    @Column()
    title: string 

    @Index()
    @Column()
    slug: string 

    @Column({ nullable: true, type: 'text' })
    body:string

    @Column()
    repoName: string

    @ManyToOne(() => User, user => user.posts)
    @JoinColumn({ name: 'username', referencedColumnName: 'username' })
    user: User

    @ManyToOne(() => Repo, repo => repo.posts)
    @JoinColumn({ name: 'repoName', referencedColumnName: 'name' })
    repo: Repo

    @BeforeInsert()
    makeIdAndSlug() {
        this.identifier = makeId(7)
        this.slug = slugify(this.title)
    }
}
