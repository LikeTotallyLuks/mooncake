import './App.css';
import { Canvas } from '@react-three/fiber';
import moonFragment from './moonFragment.glsl?raw';
import moonVertex from './moonVertex.glsl?raw';

function App() {
	return (
		<div className="App">
			<Canvas>
				<scene>
					<mesh>
						<sphereGeometry args={[1, 32, 16]} attach="geometry" />
						<shaderMaterial vertexShader={moonVertex} fragmentShader={moonFragment} attach="material" />
					</mesh>
				</scene>
			</Canvas>
		</div>
	);
}

export default App;
