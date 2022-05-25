import prisma from '../client';
import {Request, Response} from 'express';

/**
 * Return list of all orders
 */
export const get = async (req: Request, res: Response) => {
    const users = await prisma.order.findMany({
        select: {
            id: true,
            orderBy: true,
            createdAt: true,
            shoppingList: true,
        },
    });
    return res.send({
        status: 'success',
        data: users,
    });
};

/**
 * Create order
 */
export const store = async (req: Request, res: Response) => {
    const order = await prisma.order.create({
        data: {
            orderBy: req.body.orderBy,
            shoppingList: {
                create: {
                    products: {
                        createMany: {
                            data: [
                                {
                                    name: "Testing shopping item 1",
                                    count: 69,
                                },
                                {
                                    name: "Testing shopping item 2",
                                    count: 69,
                                }
                            ]
                        }
                    }
                }
            },
            Steps: {
                createMany: {
                    data: [
                        {
                            description: "testing step 1",
                            deadline: new Date(),
                            isFinished: false,
                            orderSequenceNumber: 1,
                        },
                        {
                            description: "testing step 2",
                            deadline: new Date(),
                            isFinished: false,
                            orderSequenceNumber: 2,
                        }
                    ]
                }
            },
            createdAt: new Date()
        }
    })
    return res.send({
        status: "success",
        data: order
    });
};