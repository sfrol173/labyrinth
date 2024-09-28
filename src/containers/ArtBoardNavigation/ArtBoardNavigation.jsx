import React, {useRef, useState} from "react";
import Button from "../../components/Button";
import InputMaterial from "../../components/InputMaterial/InputMaterial";
import PropTypes from 'prop-types'

import './ArtBoardNavigation.scss';

const ArtBoardNavigation = (props) => {
	const {onMapSize, onRefreshMap, mapSize} = props;
	const inputRef = useRef(null);
	const [inputSize, setInputSize] = useState(mapSize);
    
    const handleInputChange = () => {
        setInputSize(inputRef.current.value)
    }
	
	return (
		<div className="art-board-navigation">
			<div className="art-board-item item--size">
				<InputMaterial type="number" id='mapSize' name='size' onChange={handleInputChange} inputRef={inputRef} value={inputSize}/>
				<Button onClick={() => onMapSize(Number(inputRef.current.value))}>Map size</Button>
			</div>
			<div className="art-board-item">
				<Button onClick={onRefreshMap}>Refresh Map</Button>
			</div>
		</div>
	)
}

ArtBoardNavigation.propTypes = {
	onMapSize: PropTypes.func,
	onRefreshMap: PropTypes.func,
	mapSize: PropTypes.number
}

export default ArtBoardNavigation

