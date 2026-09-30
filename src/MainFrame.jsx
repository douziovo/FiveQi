import Setting, {SettingButton} from "./Setting.jsx"
import Game from "./Game.jsx"
import {useState} from "react";
import {Route, Routes} from "react-router";

export default function MainFrame() {
    let [column, setColumn] = useState(7)
    let [row, setRow] = useState(7)

    return (
        <div className="main-frame">
            <SettingButton/>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <h1 className="title">五字棋</h1>
                            <Game key={`${row}-${column}`} row={row} column={column}/>
                        </>
                    }
                />
                <Route path="/setting" element={<Setting setColumn={setColumn} setRow={setRow}/>}/>
            </Routes>
        </div>
    )

}
