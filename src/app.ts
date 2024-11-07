// npm install express
// npm i --save-dev @types/express
// import express, { Request, Response } from "express";
// import { IUser } from "./types/user";
// const app = express();

// // Declarando variavel com o tipo String ou nulo
// const nome: String | null | 12 = 12 ;


// app.use(express.json());
// app.post("/criar", (req: Request, res: Response) => {
//     const { nome, endereco, senha } = req.body;

//     const usuario: IUser = {
//         nome,
//         senha,
//         endereco
//     }
// })

import express from 'express';
const app = express();
const PORT: number = 8090;




