interface RobotInstruction {
    position: {
        x: number;
        y: number;
        orientation: Orientation;
    };
    instructions: string;
}

type Orientation = 'N' | 'S' | 'E' | 'W';

export { RobotInstruction, Orientation };
