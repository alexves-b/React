import { useState, useEffect } from 'react';
import styles from './app.module.css';
import data from './assets/data.json';

export const App = () => {
	const [steps, setSteps] = useState();
	const [activeIndex, setActiveIndex] = useState(1);
	const [isLastStep, setIsLastStep] = useState(false);
	const [isFirstStep, setIsFirstStep] = useState(true)


	const currentStepData = data
		.filter(item => item.id == activeIndex) // Правильный синтаксис для фильтрации
	// Можно задать 2 состояния — steps и activeIndex

	function handleClickForward() {
		setActiveIndex(activeIndex + 1);
		setIsFirstStep(false)
		if (activeIndex + 1 == data.length) {
			setIsLastStep(true);
			console.log(isLastStep)
		}
		console.log(activeIndex)
		console.log(data.length)
	}


	function handleClickBackward() {
		if (activeIndex < 2) {
			setIsFirstStep(true)
		} else {
			setActiveIndex(activeIndex - 1);
		}

	}

	function handleClickStartFromFirstStep() {
		setActiveIndex(1);
		setIsFirstStep(true)
		setIsLastStep(false)
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
								<li key={item.id} className={styles['steps-item'] + ' ' + styles.done}>
									{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
									<button className={styles['steps-item-button']}>{item.id}</button>
									{item.title}
								</li>
							</>
							)}
					</ul>
					<div className={styles['buttons-container']}>
						{isFirstStep ? (<button className={styles.button} disabled={'Заблокирована'} onClick={handleClickBackward} >Назад</button>) : (<button className={styles.button} onClick={handleClickBackward} >Назад</button>)}

						{isLastStep ? (<button className={styles.button} onClick={handleClickStartFromFirstStep}>
							Начать сначала
						</button>) : (
							<button className={styles.button} onClick={handleClickForward}>
								Далее
							</button>)
						}
					</div>
				</div>
			</div>
		</div>
	);
};
