import { Request, Response } from "express";

const UserController = {
    create : async(req: Request, res:Response) => {
        res.status(200).json({
            msg : "User criado com sucesso"
        })
    }
}

module.exports = UserController;