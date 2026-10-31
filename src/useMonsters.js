import { useState, useEffect } from "react";
import { getMonsters } from "./api";
import { onlyLarge, simplify } from "./logic";

export default function useMonsters(){
    const [state, setState] = useState({
        status: "loading",
        monsters: [],
        error: null
    });
    useEffect(() => {
        const controller = new AbortController();

        getMonsters(controller.signal).then(data => {
            setState({
                status: "ready",
                monsters: simplify(onlyLarge(data)),
                error: null
            });
        })
        .catch(err => {
            if(err.name === "AbortError"){
                return;
            }
            setState({
                status: "error",
                monsters: [],
                error: err.message
            });
        });
        return () => controller.abort();
        
    }, []);
    return state;
}