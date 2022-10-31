import './App.css';
import Header from './components/Header';
import Jobs from './components/Jobs';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<Header className={'main-header'} title={'The Job Board'}></Header>
			<div className={'job-boards-container'}>
				<Jobs className={'job-boards red'} title={'Full Time Sales Associate - Sydney Boutique'} contractType={'CDI'} country={'Australia'} city={'Sydney'}></Jobs>
				<Jobs className={'job-boards green'} title={'Full Time Sales Associate - Sydney Boutique'} contractType={'CDI'} country={'Australia'} city={'Sydney'}></Jobs>
				<Jobs className={'job-boards yellow'} title={'Full Time Sales Associate - Sydney Boutique'} contractType={'CDI'} country={'Australia'} city={'Sydney'}></Jobs>
				<Jobs className={'job-boards blue'} title={'Full Time Sales Associate - Sydney Boutique'} contractType={'CDI'} country={'Australia'} city={'Sydney'}></Jobs>
				<Jobs className={'job-boards salmon'} title={'Full Time Sales Associate - Sydney Boutique'} contractType={'CDI'} country={'Australia'} city={'Sydney'}></Jobs>
				<Jobs className={'job-boards red'} title={'Full Time Sales Associate - Sydney Boutique'} contractType={'CDI'} country={'Australia'} city={'Sydney'}></Jobs>
				<Jobs className={'job-boards green'} title={'Full Time Sales Associate - Sydney Boutique'} contractType={'CDI'} country={'Australia'} city={'Sydney'}></Jobs>
				<Jobs className={'job-boards yellow'} title={'Full Time Sales Associate - Sydney Boutique'} contractType={'CDI'} country={'Australia'} city={'Sydney'}></Jobs>
				<Jobs className={'job-boards blue'} title={'Full Time Sales Associate - Sydney Boutique'} contractType={'CDI'} country={'Australia'} city={'Sydney'}></Jobs>
			</div>
			<Footer></Footer>
		</>
	);
};

export default App;
