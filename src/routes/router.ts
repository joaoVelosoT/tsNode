import {Request, Response, Router} from 'express';
const router: Router = Router();
import UserController from "../controllers/user-controller"
router.get('/', UserController.create);


module.exports = router;