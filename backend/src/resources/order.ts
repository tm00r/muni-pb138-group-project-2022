import prisma from '../client';
import {Request, Response} from 'express';

/**
 * Return list of all orders
 */
export const get = async (req: Request, res: Response) => {
    let users;
    try {
        users = await prisma.order.findMany({
            select: {
                id: true,
                orderBy: true,
                createdAt: true,
                shoppingList: true,
            },
        });
    } catch (e) {
        console.log(e);
        res.status(500).send("Error")
        return
    }
    return res.send({
        status: 'success',
        data: users,
    });
};

/**
 * Create order
 */
export const store = async (req: Request, res: Response) => {
    const {orderBy, shoppingList, steps, createdAt} = req.body
    let order;
    try {
        order = await prisma.order.create({
            data: {
                orderBy: orderBy,
                shoppingList: {
                    create: {
                        products: {
                            createMany: {
                                data: [
                                    ...shoppingList
                                ]
                            }
                        }
                    }
                },
                Steps: {
                    createMany: {
                        data: [
                            ...steps
                        ]
                    }
                },
                createdAt: req.body.createdAt
            }
        })
    } catch (e) {
        console.log(e)
        res.status(500).send("Error")
        return
    }
    return res.send({
        status: "success",
        data: order
    });
};