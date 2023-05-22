import { Text3D, Center } from '@react-three/drei'
import Answer from './Answer'
const helvetiker = './fonts/helvetiker_regular.typeface.json'

const Question = ({ question, offset, allAnswers }) => {
	let multilineQuestion = question
		.split(' ')
		.map((word, index) => {
			if (index % 5 === 0 && index !== 0) {
				return ` ${word}\n`
			} else {
				return ` ${word}`
			}
		})
		.join('')

	return (
		<>
			<Center position-y={2 + offset * -15}>
				<Text3D
					font={helvetiker}
					size={0.9}
					height={0.05}
					curveSegments={12}
					bevelEnabled
					bevelThickness={0.02}
					bevelSize={0.02}
					bevelOffset={0}
					bevelSegments={5}
				>
					{multilineQuestion}
					<meshBasicMaterial color='#FE5F00' />
				</Text3D>
				<Answer answers={allAnswers} />
			</Center>
		</>
	)
}

export default Question
