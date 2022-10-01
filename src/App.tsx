import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { MoonScene } from './MoonScene';

function App() {
	return (
		<Canvas>
			<Suspense fallback={null}>
				<MoonScene />
			</Suspense>
		</Canvas>
	);
}

export default App;
