import { useState } from 'react';
import './App.css';

import Center from './Components/Layout/Center';
import Row from './Components/Layout/Row';
import Spacer from './Components/Layout/Spacer';
import MiLogo from './Components/MiLogo';
import Modal from './Components/Modal/Modal';
import Information from './Containers/Information';
import MyKnowledge from './Containers/MyKnowledgeScene';
import ProjectsScene from './Containers/ProjectsScene';
import useCheckMobileScreen from './hooks/useCheckMobileScreen';

function App() {

  const [showProjects, setShowProjects] = useState<boolean>(false);
  const isMobile = useCheckMobileScreen();


  return (
    <div className="App">
      {isMobile ? <>
        <Information setShowProjects={setShowProjects} showProjects={showProjects} />
        {showProjects ? <ProjectsScene /> : <MyKnowledge />}
      </>
        :
        <>
          <MiLogo />
          <Modal />
          <Center>
            <Row>
              {showProjects ? <ProjectsScene /> : <MyKnowledge />}
              <Spacer />
              <Information setShowProjects={setShowProjects} showProjects={showProjects} />
              <Spacer />
            </Row>
          </Center>

        </>}





    </div>
  );
}



export default App;
