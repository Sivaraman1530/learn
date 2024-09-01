import express, { Router, Application } from 'express'

class App {
  public app: Application
  public port: number

  constructor(appInit: { port: any, middleWares: any, routes: any }) {
    this.app = express()
    this.port = appInit.port

    this.middlewares(appInit.middleWares)
    this.routes(appInit.routes)
  }

  private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void }) {
    middleWares.forEach(middleWare => {
      this.app.use(middleWare)
    })
  }


  private routes(controllers: Router) {
    this.app.use('/service', controllers)
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Hi,i am listening on the  ${this.port}/service`)
    })
  }

}

export default App

