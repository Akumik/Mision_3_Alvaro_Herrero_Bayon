import { useState, useEffect } from "react";
import { getMonsters } from "./api";
import { onlyLarge, simplify } from "./logic";

export default function useMonsters(){
    const [monsters, setMonsters] = useState([]);
    const [status, setStatus] = useState("loading");
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        getMonsters(controller.signal).then(data => {
            setMonsters(simplify(onlyLarge(data)));
            setStatus("ready");
        })
        .catch(err => {
            if(err.name === "AbortError"){
                return;
            }
            setError(err.message);
            setStatus("error");
        });
        return () => controller.abort();
        
    }, []);
    return { monsters, status, error};
}