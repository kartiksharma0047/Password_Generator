import React, { useState,useCallback, useEffect, useRef } from "react";
import "./Index.css"
function App() {
    document.title = "Password Generator";
    const [password, setPassword] = useState("");
    const [char, setChar] = useState(false);
    const [num, setNum] = useState(false);
    const [len, setLen] = useState(8);
    const passwordGenerate=useCallback(()=>{
        let pass="";
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopurstuvwxyz";
        if(num){
            str=str+"1234567890";
        }
        if(char){
            str=str+"!@#$%^&*+-?_";
        }
        for(let i=0;i<len;i++){
            let char=Math.floor(Math.random()*str.length+1);
            pass=pass+str.charAt(char);
        }
        setPassword(pass);
    },[len,num,char]);
    useEffect(()=>{passwordGenerate()},[len,num,char,passwordGenerate]);
    const passwordRef=useRef(null);
    const CopyToClipboard=useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,25);
        window.navigator.clipboard.writeText(password);
    })
    return (
        <div className="Board">
            <h1>Password Generator</h1>
            <div className="display_bar">
                <input
                id="Length"
                    type="text"
                    value={password}
                    placeholder="Password"
                    readOnly
                    ref={passwordRef} />
                <button onClick={CopyToClipboard}>COPY</button>
            </div>
            <div className="settings">
                <input
                    type="range"
                    min={5}
                    max={25}
                    value={len}
                    onChange={(e) => setLen(e.target.value)} />
                <label>Length:{len}</label>

                <input
                    id="charInput"
                    type="checkbox"
                    defaultChecked={char}
                    onChange={() => {
                        setChar(!char);
                    }} />
                <label htmlFor="charInput">Characters</label>

                <input
                id="numInput"
                    type="checkbox"
                    defaultChecked={num}
                    onChange={() => {
                        setNum(!num);
                    }} />
                <label htmlFor="numInput">Numbers</label>
            </div>
        </div>
    )
}
export default App;