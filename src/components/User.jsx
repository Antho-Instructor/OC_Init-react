import { useState } from "react";
function User(props) {
	console.log(props);
	/**
	 * props est un objet.
	 *
	 * Il possède comme clé les props, et comme valeur ce qui été associés
	 *
	 * console.log(props)
	 *
	 * output :
	 *
	 * {
	 *  fullname: "Anthony Bochin"
	 * }
	 */

	const { fullname, student, setVoyage, voyage } = props;

	const [chips, setChips] = useState(0);
	return (
		<div>
			<h1>
				Hello {fullname} ! {student && "🧑‍🎓"}
			</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
				vitae, mollitia magni voluptatibus sit facilis aliquid ab magnam
				eos odit nesciunt, ullam quos, voluptatem qui consequatur
				inventore dolor reiciendis itaque.
			</p>
			<button onClick={() => setVoyage(voyage + 1)}>
				Je voyage !!! ✈️
			</button>
			<button onClick={() => setChips(chips + 1)}>
				J'ai mangé {chips} de chips 🍟
			</button>
			<p>Je n'ai voyagé que {voyage} fois</p>
		</div>
	);
}

export default User;
