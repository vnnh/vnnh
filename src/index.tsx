import React, { Suspense } from "react";
import { render } from "react-dom";
import { Environment, FlyControls, Html, useGLTF, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

/**const Scene = () => {
	const gltf = useGLTF("/scene/scene.gltf");

	return (
		<>
			<primitive object={gltf.scene.children[0]} />
			<FlyControls movementSpeed={5} rollSpeed={Math.PI / 3} autoForward={false} dragToLook={true} />
			<ambientLight intensity={0.5}></ambientLight>
			<Environment preset={"forest"} background />
		</>
	);
};

const Loader = () => {
	const { progress } = useProgress();

	return <Html center>{progress} % loaded</Html>;
};

<Canvas frameloop={"always"}>
			<Suspense fallback={<Loader />}>
				<Scene />
			</Suspense>
		</Canvas>*/

render(
	<div className={`full`}>
		<img
			style={{ position: "absolute", width: "100%", height: "100%", objectFit: "contain" }}
			src={`/92551272_p0_master1200.jpg`}
		></img>
		<div className={`sidebar`}>
			<div className={`bio-div`}>
				<a className={`bio-title caret`}>hey! I'm vincent.</a>
				<a className={`bio-desc`}>
					self-proclaimed programmer, designer, and probably a couple of other things
				</a>
			</div>
			<div className={`tabs full`}>a</div>
			<div className={`social-div`}>
				<a className={`bio-title caret`}>email github.</a>
			</div>
		</div>
	</div>,
	document.getElementById("root"),
);
