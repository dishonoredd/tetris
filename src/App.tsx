import { useEffect, useRef, useState } from "react";
import css from "./app.module.css";
import { Shape, createRandomShape, initialField } from "./lib";
import { useImmer } from "use-immer";

function App() {
    const [field, updateField] = useImmer<(null | Shape)[][]>(initialField);
    const movingShapeId = useRef<number | null>(1);

    useEffect(() => {
        // const randomShape = createRandomShape();
        // movingShapeId.current = randomShape.id;

        // if (randomShape.type === "oShape") {
        //     updateField((draft) => {
        //         const line1 = draft[0];
        //         const line2 = draft[1];

        //         line1.splice(0, 1, randomShape);
        //         line1.splice(1, 1, randomShape);

        //         line2.splice(0, 1, randomShape);
        //         line2.splice(1, 1, randomShape);
        //     });
        // }

        const timerId = setInterval(() => {
            updateField((draft) => {
                for (let y = draft.length - 1; y >= 0; y--) {
                    const line = draft[y];
                    let isBroken = false;

                    for (let x = 0; x < line.length; x++) {
                        const cell = line[x];
                        if (cell && cell.id === movingShapeId.current) {
                            if (draft[y + 1] === undefined) {
                                isBroken = true;
                                break;
                            }
                            draft[y + 1][x] = cell;
                            draft[y][x] = null;
                        }
                    }
                    if (isBroken) {
                        break;
                    }
                }
            });
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    function renderCell(cell: Shape | null) {
        if (!cell) return "0";
        if (cell.type === "oShape") {
            return <div className={css.oShape}>_</div>;
        }
    }

    return (
        <div className={css.root}>
            {field.map((line) => line.map((cell) => <div className={css.gridElement}>{renderCell(cell)}</div>))}
        </div>
    );
}

export default App;
