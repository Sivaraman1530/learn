import App from './config/app'
import express from 'express'
import routes from './routes'

const app = new App({
  port: 8080,
  middleWares: [
    express.urlencoded({
      limit: "20mb",
      extended: false
    }),
    express.json({ limit: '50mb' }),
  ],
  routes: routes
})



app.listen();
