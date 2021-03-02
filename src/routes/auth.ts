import { Request, Response, Router } from 'express'
import { isEmpty, validate } from 'class-validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

import { User } from '../entities/User'

const register = async (req: Request, res: Response) => {
    const { email, username, password } = req.body

    try {
        let errors: any = {}
        const emailUser = await User.findOne({ email })
        const usernameUser = await User.findOne({ username })

        if (emailUser) {
            errors.email = 'Email is already taken!'
        }

        if (usernameUser) {
            errors.username = 'Username is already taken!'
        }

        if (Object.keys(errors).length > 0) {
            return res.status(400).json(errors)
        }

        const user = new User({email, username, password})
    
        errors = await validate(user)
        if (errors.length > 0) {
            return res.status(400).json({ errors })
        }

        await user.save()

        return res.json(user)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}

const login = async (req: Request, res: Response) => {
    const { username, password } = req.body

    try {
        let errors: any = {}
        if (isEmpty(username)) errors.username = 'Username must not be empty'
        if (isEmpty(password)) errors.password = 'Password must not be empty'
        if (Object.keys(errors).length > 0) {
            return res.status(400).json(errors)
        }

        const user = await User.findOne({ username })

        if (!user) return res.status(404).json({ error: 'User not found' })

        const passwordMatches = await bcrypt.compare(password, user.password)

        if (!passwordMatches) {
            return res.status(401).json({ password: 'Password is incorrect' })
        }

        const token = jwt.sign({ username }, '27oQPNLa')

        res.set('Set-Cookie', cookie.serialize('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 3600,
            path: '/'
        }))

        return res.json({ user, token })
    } catch (err) {
        
    }
}

const router = Router()
router.post('/register', register)
router.post('/login', login)

export default router