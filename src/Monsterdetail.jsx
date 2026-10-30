import { useState, useEffect } from "react";
import TagList from "./TagList";
import WeaknessList from "./WeaknessList";

export default function MonsterDetail({ monster, onClose}){
    const [imgFailed, setImgFailed] = useState(false);

    useEffect(() => {
        function handleKeyDown(e){
            if(e.key === "Escape"){
                onClose();
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);
    
    function handleOverlayClick(e){
        if(e.target === e.currentTarget){
            onClose();
        }
    }

    return (
        <div className="detail" onClick = {handleOverlayClick}>
            <div className="detail-box">
                <button onClick = {onClose}>Close</button>
                <h2>{monster.name}</h2>
                <p><em>{monster.species}</em></p>
                <p>{monster.description}</p>

                <TagList title = "Elements" items={monster.elements} />
                <h3>Weaknesses</h3>
                <div className="weak-row">
                    <WeaknessList weaknesses={monster.weaknessStars}/>
                    {monster.image && !imgFailed && (
                        <img src = {monster.image} alt = {monster.name} className="detail-img" onError = {() => setImgFailed(true)}/>
                    )}
                </div>
                <TagList title="Resistances" items={monster.resistances}/>
                <TagList title="Locations" items={monster.locations} emptyText="Unknown"/>
            </div>
        </div>
    )
}
