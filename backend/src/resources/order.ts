import prisma from '../client';
import {Request, Response} from 'express';

/**
 * Return list of all orders
 */
export const get = async (req: Request, res: Response) => {
    let order;
    try {
        order = await prisma.order.findMany({
            where: {
                deletedAt: null,
            },
            select: {
                id: true,
                orderBy: true,
                name: true,
                createdAt: true,
                isFinished: true,
                isTemplate: true,
            },
        });
    } catch (e) {
        console.log(e);
        res.status(500).send("Error")
        return
    }
    return res.send({
        status: 'success',
        data: order,
    });
};

/**
 * Create order
 */
export const store = async (req: Request, res: Response) => {
    const {orderBy, name, shoppingList, steps, createdAt, items, isFinished, isTemplate} = req.body
    let order;
    try {
        order = await prisma.order.create({
            data: {
                orderBy: orderBy,
                name: name,
                Items: {
                    createMany: {
                        data: [
                            ...items
                        ]
                    }
                },
                Steps: {
                    createMany: {
                        data: [
                            ...steps
                        ]
                    }
                },
                createdAt: req.body.createdAt,
                isFinished: isFinished,
                isTemplate: isTemplate,
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

export const remove = async (req: Request, res: Response) => {
    const orderId = req.params.id;
    let removedOrder;
    try {

        const order = await prisma.order.findUnique(
            {
                where: {
                    id: orderId
                }
            }
        )

        if (!order) {
            return res.status(404).send({
                status: 'error',
                data: {},
                message: 'Order not found'
            })
        }

        removedOrder = await prisma.order.update({
            where: {
                id: orderId
            },
            data: {
                deletedAt: new Date(),
            },
        });

    } catch (e) {
        console.log(e)
        res.status(500).send("Error")
        return
    }
    return res.send({
        status: 'success',
        data: removedOrder,
    });
}