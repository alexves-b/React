import { useState } from 'react';
import styles from './app.module.css';
import data from './assets/data.json';

export const App = () => {
	const [steps, setSteps] = useState();
	const [activeIndex, setActiveIndex] = useState(1);

	const currentStepData = data
		.filter(item => item.id == activeIndex) // Правильный синтаксис для фильтрации
	// Можно задать 2 состояния — steps и activeIndex

	function handleClick() {
		setActiveIndex(activeIndex + 1);
	}


	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	// 24 строка фильтровать и выводить только тот id который соответствует активному индексу?

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{currentStepData[0].content}
					</div>
					<ul className={styles['steps-list']}>

						{data
							.map((item) => <>
								<li className={styles['steps-item'] + ' ' + styles.done}>
									{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
									<button className={styles['steps-item-button']}>{item.id}</button>
									{item.title}
								</li>
							</>
							)}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button}>Назад</button>
						<button className={styles.button} onClick={handleClick}>
							Далее

							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
