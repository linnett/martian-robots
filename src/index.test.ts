import { processInstructions } from '.';
import { RobotInstruction } from './types';

describe('processInstructions', () => {
    const gridSize = [5, 3];
    const robots: RobotInstruction[] = [
        {
            position: { x: 1, y: 1, orientation: 'E' },
            instructions: 'RFRFRFRF',
        },
        {
            position: { x: 3, y: 2, orientation: 'N' },
            instructions: 'FRRFLLFFRRFLL',
        },
        {
            position: { x: 0, y: 3, orientation: 'W' },
            instructions: 'LLFFFLFLFL',
        },
    ];

    it('should return the correct output string', () => {
        const output = processInstructions(robots, gridSize);
        const expectedOutput = '1 1 E\n3 3 N LOST\n2 3 S';

        expect(output).toEqual(expectedOutput);
    });
});
