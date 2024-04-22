import { useState } from "react";
import User from "./components/User";

function App() {
	const users = [
		{
			fullname: "Anthony B",
			student: true,
			id: 1,
		},
		{
			fullname: "Frane T",
			student: false,
			id: 2,
		},
		{
			fullname: "Anthony Gorski",
			student: false,
			id: 3,
		},
	];

	const [travel, setTravel] = useState(0);

	return (
		<section>
			{/* 
      
      User => 2 props

      1er props => fullname (key) qui a pour valeur "Anthony Bochin"
      2eme props => student = true

      {
        fullname="Anthony Bochin",
        student="true"
      }
      
      */}
			{users.map((user) => {
				return (
					<User
						key={user.id}
						fullname={user.fullname}
						student={user.student}
						voyage={travel}
						setVoyage={setTravel}
					/>
				);
			})}
		</section>
	);
}

export default App;
