import React from 'react';

const Films = props => {
    return (
        <div className="films_wrap">
            <h1>{props.name}</h1>
            <img src={props.img} />
            <p>Год выпуска: {props.year}</p>
            <a  href={props.link} target="_blank">{props.post}</a>
        </div>
    )
};

export default Films;