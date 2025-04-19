import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

dotenv.config()

export const apiGateway = express()

apiGateway.use(cors())

const authProxy = createProxyMiddleware({
  target: process.env.AUTH_API,
  changeOrigin: true,
  pathRewrite: {
    '^/auth': '/'
  }
})

apiGateway.use((req: any, _res: any, next: any) => {
  // eslint-disable-next-line no-console
  console.log(req.path, req.method)
  next()
})

apiGateway.use('/auth', authProxy)

if (process.env.NODE_ENV !== 'test') {
  apiGateway.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listening at http://localhost:${process.env.PORT}`)
  })
}
