import Robot from './Robot';

describe('Robot', () => {
    let robot: Robot;

    beforeEach(() => {
        robot = new Robot(1, 1, 'E');
    });

    it('should turn left correctly', () => {
        robot.turnLeft();
        expect(robot.orientation).toEqual('N');

        robot.turnLeft();
        expect(robot.orientation).toEqual('W');

        robot.turnLeft();
        expect(robot.orientation).toEqual('S');

        robot.turnLeft();
        expect(robot.orientation).toEqual('E');

        robot.turnLeft();
        robot.turnLeft();
        expect(robot.orientation).toEqual('W');
    });

    it('should turn right correctly', () => {
        robot.turnRight();
        expect(robot.orientation).toEqual('S');

        robot.turnRight();
        expect(robot.orientation).toEqual('W');

        robot.turnRight();
        expect(robot.orientation).toEqual('N');

        robot.turnRight();
        expect(robot.orientation).toEqual('E');

        robot.turnRight();
        robot.turnRight();
        expect(robot.orientation).toEqual('W');
    });

    it('should move forward correctly', () => {
        robot.moveForward();
        expect(robot.x).toEqual(2);
        expect(robot.y).toEqual(1);

        robot.orientation = 'N';
        robot.moveForward();
        expect(robot.x).toEqual(2);
        expect(robot.y).toEqual(2);

        robot.orientation = 'S';
        robot.moveForward();
        expect(robot.x).toEqual(2);
        expect(robot.y).toEqual(1);

        robot.orientation = 'W';
        robot.moveForward();
        expect(robot.x).toEqual(1);
        expect(robot.y).toEqual(1);
    });
});
