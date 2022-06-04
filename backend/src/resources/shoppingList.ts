import prisma from '../client';
import {Request, Response} from 'express';

/**
 * Return shoppingList items for shoppingList id
 */
export const get = async (req: Request, res: Response) => {
    const shoppingListId = req.params.id;
    let shoppingItems;
    try {
        shoppingItems = await prisma.shoppingItem.findMany({
            where: {
                shoppingListId: shoppingListId
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send("Error")
        return
    }
    return res.send({
        status: 'success',
        data: shoppingItems,
    });
}
