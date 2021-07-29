import React from 'react';
import './index.css';

function SkillCard(props){
    return (
        <div className={props.color === "blue"? "card blue-card" : (props.color==="yellow" ? "card yellow-card": "card green-card")}>
            <div class="card-content">
                <div class="content">
                    <img className="card-image" src="https://image.flaticon.com/icons/png/512/3176/3176298.png" alt="scdsc"></img>
                    <h1 className="title is-4">{props.title}</h1>
                    <p className="has-text-justified">
                    {props.des}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SkillCard;