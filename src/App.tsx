import { useState } from 'react';
import './App.css';
import Fire from './Components/fire/Fire';
import Center from './Components/Layout/Center';
import Row from './Components/Layout/Row';
import Spacer from './Components/Layout/Spacer';
import Monigote from './Components/Monigote';
import MyKnowledge from './Containers/MyKnowledge';
import ProjectsScene from './Containers/ProjectsScene';




function App() {
  return (
    <div className="App">

      <Center>
        <Row>
          <Spacer />

          <Monigote />
          <Spacer />
          <RightSide />
        </Row>
      </Center>

    </div>
  );
}

const RightSide = () => {

  const [showProjects, setShowProjects] = useState<boolean>(false);

  return <div>
    {showProjects ? <ProjectsScene /> : <MyKnowledge />}
    <button onClick={() => setShowProjects((current) => !current)}>change</button>
  </div>

}



export default App;
