import express from 'express'

import loginRequestHandler from './login'
import refreshToken from './refreshToken'
import signupRequestHandler from './signup'

const authRouter = express.Router()

authRouter.get('/', (_req, res) => {
  res.send('Auth microservice health ok')
})

authRouter.post('/signup', signupRequestHandler)
authRouter.post('/login', loginRequestHandler)

// refresh token
authRouter.post('/refresh-token', refreshToken)

export default authRouter
