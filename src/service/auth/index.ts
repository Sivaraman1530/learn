import { NextFunction, Router ,Request,Response} from "express";


const router = Router();


router.get(`/test`, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const  response= req.body
        res.json(response);
    } catch (error) {
      next(error);
    }
  }
);

export default router;


