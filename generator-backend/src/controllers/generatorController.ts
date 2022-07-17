import { Request, Response } from "express";
import stringGenerator from '../utils/stringGenerator';

let generateCode = (req: Request, res: Response) => {
    let generatedCode: string[][] = stringGenerator();

    const currentSeconds: number = new Date().getSeconds();
    const matrixX: number = Math.floor(currentSeconds / 10);
    const matrixY: number = currentSeconds % 10;

    const codeLeft: string = generatedCode[matrixX][matrixY];
    const codeRight: string = generatedCode[matrixY][matrixX];

    let counterLeft: number = 0, counterRight: number = 0;

    for (let i: number = 0; i < 10; i++) {
        for(let j: number = 0; j < 10; j++) {
            if(generatedCode[i][j] === codeLeft) { counterLeft++; }
            if(generatedCode[i][j] === codeRight) { counterRight++; }
        }
    }

    let secretCode = `${counterLeft}${counterRight}${codeLeft}${codeRight}`;

    res.json({code: generatedCode, secret: secretCode})
}

export { generateCode };
