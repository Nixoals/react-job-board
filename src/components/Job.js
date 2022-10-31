import '../App.css';

const Job = (props) => {
	return (
		<>
			<div className={props.className}>
				<div>
					<h1>{props.title}</h1>
					<div>
						<span>{props.contractType}</span>-<span>{props.country}</span>-<span>{props.city}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Job;
