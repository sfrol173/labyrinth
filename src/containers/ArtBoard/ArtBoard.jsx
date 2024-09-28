import React, {useState, useEffect} from "react";
import cn from 'classnames'

import ArtBoardLabyrinth from "../ArtBoardLabyrinth/ArtBoardLabyrinth";
import ArtBoardNavigation from "../ArtBoardNavigation/ArtBoardNavigation";
import Row from "../../components/Row/Row";
import Space from "../../components/Space/Space";
import Wall from "../../components/Wall/Wall";
import {mapGenerated} from "../../helpers/mapGenerated";

import './ArtBoard.scss';

const ArtBoard = () => {
	const [size, setSize] = useState(10)
	const [labyrinth, setLabyrinth] = useState(mapGenerated(size))
	const [startPoint, setStartPoint] = useState({x: null, y: null})
	const [endPoint, setEndPoint] = useState({x: null, y: null})
	const [count, setCount] = useState(0)
	const [check, setСheck] = useState(null)
	const [textStatus, setTextStatus] = useState("Вибрати точку старту")
	
	const labyrinthMap = (mapLabyrinth) => {
		return mapLabyrinth.map((row, indexRow) => (
			<Row key={`id_${indexRow.toString()}`}>
				{
					row.map((value, indexCall) =>
						value === 1 ? (
							<Wall
								key={`id_${indexCall.toString()}`}
								y={indexRow}
								x={indexCall}
							/>
						) : (
							<Space
								key={`id_${indexCall.toString()}`}
								y={indexRow}
								x={indexCall}
								isStartPoint={startPoint.x === indexCall && startPoint.y === indexRow}
								isEndPoint={endPoint.x === indexCall && endPoint.y === indexRow}
							/>
						)
					)
				}
			</Row>
		));
	}; // ==> Генерація лабіринту
	
	const handleReset = () => {
		setCount(0)
		setStartPoint({x: null, y: null})
		setEndPoint({x: null, y: null})
		setСheck(false)
		setTextStatus("Вибрати точку старту")
	} // ==> Скинути налаштування лабіринту
	
	const handleRefreshMap = () => {
		handleReset()
		setLabyrinth(mapGenerated(size));
	}; // ==> Перегенерувати лабіринт
	
	const handleMapSize = (value) => {
		setSize(Number(value));
		setLabyrinth(mapGenerated(Number(value)))
		handleReset()
	}; // ==> Згенерувати нову карту лабіринту певного розміру
	
	const handleClickStep = (event) => {
		setCount(count + 1)
		
		if (count === 0) {
			setTextStatus("Выбрать конец лаберинта")
			return setStartPoint({x: Number(event.target.dataset.x), y: Number(event.target.dataset.y)})
		}
		if (count === 1) {
			setTextStatus("Ищем проход")
			return setEndPoint({x: Number(event.target.dataset.x), y: Number(event.target.dataset.y)})
		}
		if (count === 2) {
			setTextStatus("Вибрати точку старту")
			handleReset()
		}
	} // ==>  Степ івенти роботи лабіринту
	
	const handleCheckStep = (start, end) => {
		labyrinth[start.y][start.x] = 5; // відсікаємо вихід за межі артборда
		
		let siblings = getValidSib(start);
		
		if (siblings.length > 0) {
			for (let i = 0; i < siblings.length; i++) {
				const current = siblings[i];
				const isSolved = current.x === end.x && current.y === end.y;
				const notVisited = labyrinth[current.y][current.x] !== 5;
				
				if (isSolved || (notVisited && handleCheckStep(current, end))) {
					return true;
				}
			}
		}
		return false;
	} // ==> Функция яка буде шагати по клітинкам
	
	const getValidSib = (cord) => {
		const {x, y} = cord;
		
		let cords = [];
		
		if (labyrinth[y - 1] !== undefined) {
			cords.push({x: x, y: y - 1, val: labyrinth[y - 1][x]});
		}
		if (labyrinth[y + 1] !== undefined) {
			cords.push({x: x, y: y + 1, val: labyrinth[y + 1][x]});
		}
		if (labyrinth[y][x - 1] !== undefined) {
			cords.push({x: x - 1, y: y, val: labyrinth[y][x - 1]});
		}
		if (labyrinth[y][x + 1] !== undefined) {
			cords.push({x: x + 1, y: y, val: labyrinth[y][x + 1]});
		}
		
		return cords.filter((crd) => crd.val === 0);
	} // ==> Перевірка куди буможно ходити
	
	
	useEffect(() => {
		if (startPoint.x && endPoint.x) {
			setСheck(handleCheckStep(startPoint, endPoint));
		}
	}, [startPoint.x, endPoint.x]);
	
	return (
		<div className="art-board">
			<header className="header">
				<div className={cn("text", {"_status-green":check},{"_status-red":!check})}>{check ? "Є прохід" : "Немає проходу"}</div>
				<div className="text">
					{textStatus}
				</div>
			</header>
			<ArtBoardLabyrinth
				onClick={(event) => handleClickStep(event)}
				onLabirinthMap={labyrinthMap}
				labirinth={labyrinth}
			/>
			<ArtBoardNavigation
				onMapSize={handleMapSize}
				onRefreshMap={handleRefreshMap}
				mapSize={size}
			/>
		</div>
	)
}

export default ArtBoard
