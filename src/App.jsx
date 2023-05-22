import { useState, useEffect } from 'react'
import he from 'he'
import { nanoid } from 'nanoid'
import './App.css'

import Experience from './Experience'

function App() {
	const [questionData, setQuestionData] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const controller = new AbortController()
		const fetchQuestionData = async () => {
			try {
				const response = await fetch('https://opentdb.com/api.php?amount=5', { signal: controller.signal })
				const data = await response.json()
				const formattedData = formatQuestionData(data.results)
				setQuestionData(formattedData)
				setLoading(false)
			} catch (error) {
				console.error('Failed to fetch question data:', error)
			}
		}

		fetchQuestionData()

		return () => {
			controller.abort()
		}
	}, [])

	console.log(questionData)

	const formatQuestionData = (data) => {
		return data.map((entry) => {
			const decodedQuestion = he.decode(entry.question)
			const decodedCorrectAnswer = he.decode(entry.correct_answer)
			const decodedIncorrectAnswers = entry.incorrect_answers.map((answer) => he.decode(answer))
			const allAnswers = shuffleArray([...decodedIncorrectAnswers, decodedCorrectAnswer])

			return {
				...entry,
				id: nanoid(),
				userCorrect: false,
				question: decodedQuestion,
				correct_answer: decodedCorrectAnswer,
				incorrect_answers: decodedIncorrectAnswers,
				all_answers: allAnswers,
			}
		})
	}

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[array[i], array[j]] = [array[j], array[i]]
		}
		return array
	}

	return <>{loading ? <h1>Loading...</h1> : <Experience questionData={questionData} />}</>
}

export default App
