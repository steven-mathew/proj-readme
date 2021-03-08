import {Request, Response, Router} from "express";
import { isEmpty } from 'class-validator'
import { getRepository } from 'typeorm'

import User from '../entities/User'
import Repo from '../entities/Repo'
import auth from '../middleware/auth'

const createRepo = async (req: Request, res: Response) => {
    const { name, title, description } = req.body

    const user: User = res.locals.user

    try {
        let errors: any = {}
        if (isEmpty(name)) errors.name = 'Name must not be empty'
        if (isEmpty(title)) errors.title = 'Title must not be empty'
    
        const repo = await getRepository(Repo)
            .createQueryBuilder('repo')
            .where('lower(repo.name) = :name', { name: name.toLowerCase() })
            .getOne()
    
        if (repo) errors.name = 'Repo already exists'

        if (Object.keys(errors).length > 0) {
            throw errors
        }
        
    } catch (err) {
        return res.status(400).json(err)
    }

    try {
        const repo = new Repo({ name, description, title, user })
        await repo.save()

        return res.json(repo)
    } catch (err) {
        console.log(err) 
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

const router = Router()

router.post('/', auth, createRepo)

export default router
