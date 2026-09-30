import {memo, useState} from "react";

const Grid = memo(function Grid({value, onGridClick}) {
    return (
        <button className="grid" onClick={onGridClick}>
            {value}
        </button>
    );
})

function Map({gameMap, column, row, handleClick}) {
    return (
        <div className="map"> {
            Array.from({length: row}).map((_, row) => (
                <div className="row" key={row}> {
                    Array.from({length: column}).map((_, col) => (
                        <Grid
                            key={col}
                            value={gameMap[row * column + col]}
                            onGridClick={() => {
                                handleClick(row * column + col)
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}


export default function Game({column, row}) {
    let [isXNext, setIsXNext] = useState(false);
    let [gameMap, setGameMap] = useState(() => newMap(column, row))

    function isWin(i) {
        const piece = gameMap[i];
        if (piece == null) return false;
        const dirs = [[0, 1], [1, 0], [1, 1], [1, -1]]; // 横、竖、两斜
        const r = Math.floor(i / column), c = i % column;
        return dirs.some(([dr, dc]) => {
            let n = 1;
            for (const s of [-1, 1]) {      // 从落子点向两侧数连子
                let rr = r + dr * s, cc = c + dc * s;
                while (rr >= 0 && rr < row && cc >= 0 && cc < column
                && gameMap[rr * column + cc] === piece) {
                    n++;
                    rr += dr * s;
                    cc += dc * s;
                }
            }
            return n >= 5;
        });
    }


    function handleClick(i) {
        if (gameMap[i]) {
            return
        }
        // const newMap = [...gameMap];
        gameMap[i] = isXNext ? "X" : "O";
        if (isWin(i)) {
            handleReplayButton()
            setIsXNext(false)
            console.log('win')
            return;
        }
        setGameMap(gameMap);
        setIsXNext(!isXNext)
    }

    function handleReplayButton() {
        setGameMap(newMap(column, row))
    }

    return (
        <>
            <div className="game">
                <Map gameMap={gameMap}
                     column={column}
                     row={row}
                     handleClick={handleClick}></Map>
            </div>
            <Replay handleReplayButton={handleReplayButton}></Replay>
        </>
    )
}

function newMap(column, row) {
    return Array(column * row).fill(null)
}

export function Replay({handleReplayButton}) {
    return (
        <button className="replay" onClick={handleReplayButton}>重新开始</button>
    )
}

