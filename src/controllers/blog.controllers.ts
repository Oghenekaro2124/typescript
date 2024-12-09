import {Request, Response, NextFunction} from 'express';

const createNewBlog = async (req: Request, res: Response,) => {
    res.json({message:'create new blog'});
};