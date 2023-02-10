import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
const Card = (props) => {
	return (
		<>
			<div className={styles.container}>
				<button
					className={styles.close}
					onClick={props.onClose}
					value={props.id}
				>
					X
				</button>
				<Link to={`/detail/${props.id}`}>
					<img className={styles.photo} src={props.image} alt={props.name} />
					<h2 className={styles.name}>{props.name}</h2>
					<div>
						<h3 className={styles.stats}>{props.species}</h3>
						<h3 className={styles.stats}>{props.gender}</h3>
						<h3 className={styles.stats}>{props.status}</h3>
					</div>
				</Link>
			</div>
		</>
	);
};

export default Card;
