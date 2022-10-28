import { Request , Response } from "express";
import { PostBusiness } from "../business/PostBusiness";


export class PostController {
    async post(req: Request, res: Response) {
        try {
            const {photo, description, type, authorId} = req.body

            const postBusiness = new PostBusiness()
            await postBusiness.post(photo, description, type, authorId)

            res.status(200).send("Post criado.")

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    async get(req: Request, res: Response) {
        try {
            const id = req.params.id

            const postBusiness = new PostBusiness()
            const result = await postBusiness.getPostById(id)

            res.status(200).send({message: result})
        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
    }
}