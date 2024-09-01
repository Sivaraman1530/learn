import { Router ,Request, Response} from "express";
import auth from "./service/auth/index";


const app = Router();

app.use("/auth",auth)


app.get("/health", (req:Request, res: Response) => {
    const description = `I am good.System Time: ${new Date().toISOString()}`;
    const response = { status: 'OK', description };
    res.send(response);
});

export default app;


  