import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './component/Navi';
import Process from './component/Process';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <section style={{height:'100vh'}} id=""></section>
      <Process id="process" title="개발자연혁"></Process>
      <section style={{height:'100vh'}} id="portfolio" className='border-top bg-dark'></section>
      <section style={{height:'100vh'}} id="contact" className='border-top'></section>
    </div>
  );
}

export default App;