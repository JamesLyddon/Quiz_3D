import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Text, Text3D, Center, OrbitControls } from '@react-three/drei'
import Question from './Question'

const Experience = ({ questionData }) => {
	return (
		<>
			<Canvas
				camera={{
					fov: 45,
					near: 0.1,
					far: 200,
					position: [0, 0, 20],
				}}
			>
				<OrbitControls makeDefault />
				{questionData.map((item, index) => (
					<Question
						key={item.id}
						question={item.question}
						allAnswers={item.all_answers}
						offset={index}
					/>
				))}
			</Canvas>
		</>
	)
}

export default Experience
