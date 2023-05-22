import { Text3D, Center } from '@react-three/drei'

const helvetiker = './fonts/helvetiker_regular.typeface.json'

const Answer = ({ answers }) => {
	return (
		<>
			{answers.map((answer, index) => (
				<Text3D
					position-y={index === 0 ? -5 : -5 + index * -1}
					position-x={2}
					key={answer}
					font={helvetiker}
					size={0.5}
					height={0.05}
					curveSegments={12}
					bevelEnabled
					bevelThickness={0.02}
					bevelSize={0.02}
					bevelOffset={0}
					bevelSegments={5}
				>
					{`${String.fromCharCode(index + 97)}) ${answer}`}
					<meshBasicMaterial color='#8CBCB9' />
				</Text3D>
			))}
		</>
	)
}

export default Answer
