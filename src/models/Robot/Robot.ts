import { Orientation } from '../../types';

/**
 * Represents a robot with its position and orientation.
 * The robot can move and rotate within a rectangular grid.
 * It processes a sequence of instructions and reports the final position and orientation.
 */
class Robot {
    public x: number;
    public y: number;
    public orientation: Orientation;

    constructor(x: number, y: number, orientation: Orientation) {
        // Assign default positions of x, y and orientation
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }

    public moveForward(): void {
        switch (this.orientation) {
            case 'N':
                this.y++;
                break;
            case 'S':
                this.y--;
                break;
            case 'E':
                this.x++;
                break;
            case 'W':
                this.x--;
                break;
            default:
                break;
        }
    }

    public turnLeft(): void {
        switch (this.orientation) {
            case 'N':
                this.orientation = 'W';
                break;
            case 'S':
                this.orientation = 'E';
                break;
            case 'E':
                this.orientation = 'N';
                break;
            case 'W':
                this.orientation = 'S';
                break;
            default:
                break;
        }
    }

    public turnRight(): void {
        switch (this.orientation) {
            case 'N':
                this.orientation = 'E';
                break;
            case 'S':
                this.orientation = 'W';
                break;
            case 'E':
                this.orientation = 'S';
                break;
            case 'W':
                this.orientation = 'N';
                break;
            default:
                break;
        }
    }
}

export default Robot;
