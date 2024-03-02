let id = 0;

export function createRandomShape(): Shape {
    // const types = ["oShape", "iShape", "sShape", "zShape", "lShape", "jShape", "tShape"];
    const types = ["oShape"];

    const randomIndex = getRandomInRange(0, types.length - 1);
    const randomShapeType = types[randomIndex];

    // if (randomShapeType === "oShape") {
    //     return {
    //         type: "oShape",
    //         id: id++,
    //     };
    // }
    return {
        type: "oShape",
        id: id++,
    };
}

function getRandomInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export type Shape = {
    type: "oShape";
    id: number;
};

const test: Shape = {
    type: "oShape",
    id: 1,
};

export const initialField: (Shape | null)[][] = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [test, test, null, null, null, null, null, null, null, null],
    [test, test, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
];

function oShape() {}
