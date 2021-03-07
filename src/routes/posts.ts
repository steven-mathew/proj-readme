import {Router, Request, Response} from "express";

import auth from '../middleware/auth'

import Post from '../entities/Post'
import Repo from '../entities/Repo'

const createPost = async (req: Request, res: Response) => {
    const { title, body, repo } = req.body

    const user = res.locals.user

    if (title.trim() === '') {
        return res.status(400).json({ title: 'Title must not be empty.' })
    }

    try {
        const repoRecord = await Repo.findOneOrFail({ name: repo })
        
        const post = new Post({ title, body, user, repo: repoRecord }) 
        await post.save()

        return res.json(post)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

const router = Router()

router.post('/', auth, createPost)

export default router
