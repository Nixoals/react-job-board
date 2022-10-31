import '../App.css';
import Title from './Title';

const Header = (props) => {
	return (
		<>
			<Title title={props.title} className={props.className}></Title>
		</>
	);
};

export default Header;
