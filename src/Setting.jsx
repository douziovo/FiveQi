import settingsIcon from "./assets/settings.svg"
import {useLocation, useNavigate} from "react-router";
import {useRef} from "react";

export default function Setting({setColumn, setRow}) {
    let col = useRef();
    let row = useRef();
    function saveSetting() {
        setColumn(col.current.value)
        setRow(row.current.value)
    }
    return (
        <>
            <h1 className="title">设置</h1>
            <div className="setting-labels"><span>行</span><span>列</span></div>
            <div className="setting-controls"><input ref={col}/><span>x</span><input ref={row}/></div>
            <button className="replay" onClick={saveSetting}>应用</button>
        </>
    )
}

export function SettingButton() {
    let navigate = useNavigate()
    let location = useLocation()
    let isSetting = location.pathname === "/setting"

    return (
        <button className={`setting-button${isSetting ? " is-setting" : ""}`} type="button"
                aria-label={isSetting ? "返回" : "设置"}
                onClick={() => navigate(isSetting ? "/" : "/setting")}>
            <img src={settingsIcon} alt=""/>
        </button>
    )
}
