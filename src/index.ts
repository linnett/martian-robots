import fs from 'fs';

import { INPUT, processOutput } from './utils';
import { Orientation, RobotInstruction } from './types';
import Robot from './models/Robot/Robot';

export function processInstructions(
    robots: RobotInstruction[],
    gridSize: number[]
): string {
    let outputStr = '';
    const [maxGridX, maxGridY] = gridSize;
    const scent = new Set();

    // Loop through each Robot and process direction instructions
    robots.forEach(({ position, instructions }) => {
        const { x, y, orientation } = position;
        const robot = new Robot(x, y, orientation);

        for (const instruction of instructions) {
            switch (instruction) {
                case 'R':
                    robot.turnRight();
                    break;
                case 'L':
                    robot.turnLeft();
                    break;
                case 'F':
                    const posX = robot.x;
                    const posY = robot.y;
                    robot.moveForward();

                    if (
                        robot.x < 0 ||
                        robot.x > maxGridX ||
                        robot.y < 0 ||
                        robot.y > maxGridY
                    ) {
                        robot.x = posX;
                        robot.y = posY;

                        // Check if robot falls off the grid and add scent
                        if (!scent.has(`${robot.x},${robot.y}`)) {
                            scent.add(`${robot.x},${robot.y}`);
                            outputStr = processOutput(
                                outputStr,
                                `${robot.x} ${robot.y} ${robot.orientation} LOST`
                            );
                            return;
                        }
                    }

                    break;
                default:
            }
        }

        outputStr = processOutput(
            outputStr,
            `${robot.x} ${robot.y} ${robot.orientation}`
        );
    });

    return outputStr;
}

export function runMartianRobots(): void {
    const input: string = fs.readFileSync(INPUT, 'utf8');
    const lines: string[] = input.trim().split('\n');

    if (!lines || lines.length < 1) {
        throw new Error(`Input file does not contain any data`);
    }

    const gridSize: number[] = lines[0].split('').map(Number);
    lines.shift();

    const robots: RobotInstruction[] = [];

    // Loop in increments of 3s, input lines are formatted in 3s
    for (let i = 0; i < lines.length; i += 3) {
        const position = lines[i].split('');
        const x = Number(position[0]);
        const y = Number(position[1]);
        const orientation = position[2] as Orientation;
        const instructions = lines[i + 1];

        robots.push({
            position: {
                x,
                y,
                orientation,
            },
            instructions,
        });
    }

    const output = processInstructions(robots, gridSize);

    console.log(output);
}

runMartianRobots();
