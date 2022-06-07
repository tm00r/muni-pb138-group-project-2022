import prisma from '../client';
import {Request, Response} from 'express';

/**
 * Return steps for order id
 */
export const get = async (req: Request, res: Response) => {
    const orderId = req.params.id;
    console.log("Getting all steps for order: " + orderId)
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
    console.log("Getting all steps for order: " + orderId + " successfully")
    return res.send({
        status: 'success',
        data: steps,
    });
}

/**
 * Sets step to finished and evaluate order isFinished
 */
export const update = async (req: Request, res: Response) => {
    const stepId = req.params.id;
    console.log("Setting step with id " + stepId + " to finished")
    let step;
    let orderIsFinished = false
    try {
        step = await prisma.step.update({
            where: {
                id: stepId
            },
            data: {
                isFinished: true
            }
        });
        orderIsFinished = await evaluateOrderCompletion(step.orderId)
    } catch (e) {
        console.log(e)
        res.status(500).send("Error")
        return
    }
    console.log("Setting step with id " + stepId + " to finished successfully")
    return res.send({
        status: 'success',
        data: step,
        orderIsFinished: orderIsFinished
    });
}

const evaluateOrderCompletion = async (orderId: string) => {
    console.log("Getting all steps for order: " + orderId)
    const steps = await prisma.step.findMany({
        where: {
            orderId: orderId
        }
    })
    console.log("Evaluating state of all steps for order: " + orderId)
    const areAllStepsFinished = steps.every(step => step.isFinished === true)
    if (areAllStepsFinished === true) {
        console.log("All steps finished for order " + orderId)
        const order = await prisma.order.update({
            where: {
                id: orderId
            },
            data: {
                isFinished: true
            }
        })
        console.log("Order is finished. Order id: " + order.id)
    }
    return areAllStepsFinished;
}
