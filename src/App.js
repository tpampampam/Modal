
import { useCallback } from 'react';
import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/Header';
import Modal from './components/modal/Modal';
import ModalCallMe from './components/modal/ModalCallMe';
import ModalCallUs from './components/modal/ModalCallUs';
import ModalProblem from './components/modal/ModalProblem';


function App() {
  const [modal, setModal] = useState(false)
  const [modalCallMe, setModalCallMe] = useState(false)
  const [modalCallUs, setModalCallUs] = useState(false)
  const [modalProblem, setModalProblem] = useState(false)

  const setModalState = useCallback(() => setModalProblem(s => !s), []);

  return (
    <div className="App">
      {modal && <Modal setModal={setModal}/>}
      {modalCallMe && <ModalCallMe setModalCallMe={setModalCallMe}/>}
      {modalCallUs && <ModalCallUs setModalCallUs={setModalCallUs}/>}
      {modalProblem && <ModalProblem setModalProblem={setModalState}/>}
      <Header setModal={setModal} setModalCallMe={setModalCallMe}/>
      <Footer setModalCallUs={setModalCallUs} setModalProblem={setModalProblem}/>
    </div>
  );
}

export default App;
