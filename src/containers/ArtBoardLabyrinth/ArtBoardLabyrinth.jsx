import React from "react";
import PropTypes from 'prop-types'

import './ArtBoardLabyrinth.scss';

const ArtBoardLabyrinth = (props) => {
    const {onClick, onLabirinthMap, labirinth} = props;

    return (
        <div className="art-board-labyrinth" onClick={onClick}>
            {onLabirinthMap(labirinth)}
        </div>
    )
}

ArtBoardLabyrinth.propTypes= {
    onLabirinthMap: PropTypes.func,
    labirinth: PropTypes.array,
    onClick: PropTypes.func
}

export default ArtBoardLabyrinth