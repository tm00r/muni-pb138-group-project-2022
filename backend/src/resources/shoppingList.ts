import prisma from '../client';
import {Request, Response} from 'express';

/**
 * Return shoppingList items for shoppingList id
 */
export const get = async (req: Request, res: Response) => {
    const orderId = req.params.id;
    let items;
    try {
        items = await prisma.shoppingItem.findMany({
            where: {
                orderId: orderId
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send("Error")
        return
    }
    return res.send({
        status: 'success',
        data: items,
    });
}
