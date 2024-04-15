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
	return (
		<div>
			<h1>
				Hello {props.fullname} ! {props.student && "🧑‍🎓"}
			</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
				vitae, mollitia magni voluptatibus sit facilis aliquid ab magnam
				eos odit nesciunt, ullam quos, voluptatem qui consequatur
				inventore dolor reiciendis itaque.
			</p>
		</div>
	);
}

export default User;
