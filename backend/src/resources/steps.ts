import prisma from '../client';
import {Request, Response} from 'express';

/**
 * Return steps for order id
 */
export const get = async (req: Request, res: Response) => {
    const orderId = req.params.id;
    let steps;
    try {
        steps = await prisma.step.findMany({
            where: {
                orderId: orderId
            }
        });
    } catch (e) {
        console.log(e)
        res.status(500).send("Error")
        return
    }
    return res.send({
        status: 'success',
        data: steps,
    });

}
