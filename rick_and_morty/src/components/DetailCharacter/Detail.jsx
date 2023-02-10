import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import styles from './Detail.module.css';

const Detail = () => {
	const { detailId } = useParams();
	const [character, setCharacter] = useState({});

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.name) {
					setCharacter(data);
				} else {
					alert('No hay personajes con ese ID');
				}
			})
			.catch((error) => {
				alert('No hay personajes con ese ID');
			});
		return setCharacter({});
	}, [detailId]);

	return (
		<>
			<div className={styles.blogcard}>
				<div className={styles.meta}>
					<div
						className={styles.photo}
						style={{
							backgroundImage: `url(${character.image})`,
						}}
					/>
					<ul className={styles.details}>
						<li className={styles.author}>
							<a href="#">{character.name}</a>
						</li>
						<li className={styles.date}>Aug. 24, 2015</li>
						<li className={styles.tags}>
							<ul>
								<li>
									<NavLink href="#">Learn</NavLink>
								</li>
								<li>
									<NavLink href="#">Code</NavLink>
								</li>
								<li>
									<NavLink href="#">HTML</NavLink>
								</li>
								<li>
									<NavLink href="#">CSS</NavLink>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className={styles.description}>
					<h1>{character.name}</h1>
					<h2>Opening a door to the future</h2>
					<p>
						{'{'}' '{'}'}
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
						dolorum architecto obcaecati enim dicta praesentium, quam nobis!
						Neque ad aliquam facilis numquam. Veritatis, sit.
					</p>
					<p className={styles.readmore}>
						<NavLink href="#">Volver</NavLink>
					</p>
				</div>
			</div>
		</>
	);
};

export default Detail;
