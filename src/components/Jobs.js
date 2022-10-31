import Job from './Job.js';

const Jobs = (props) => {
	return (
		<>
			<Job color={props.color} className={props.className} title={props.title} contractType={props.contractType} country={props.country} city={props.city}></Job>
		</>
	);
};

export default Jobs;
