import React, { useState, useEffect } from 'react'
import FlexV3Grow from './components/layout/FlexV3Grow/FlexV3Grow'
import Header from './components/ui/Header/Header'
import NavBar from './components/ui/NavBar/NavBar'
import FlexH1Grow from './components/layout/FlexH1Grow/FlexH1Grow'
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme'
import Footer from './components/ui/Footer/Footer'
import MemeForm from './components/fonctionnal/MemeForm/MemeForm'
import datas from './db.json'
import store from './store/store'

const appInitialState = {
  images: [],
  memes: [],
  current: emptyMeme
}

const App = () => {
  console.log(datas);
  const [state, setstate] = useState(appInitialState);
  // chargement des datas pour 1er montage (fetch si besoin)
  useEffect(() => {
    // componentDidMount
    console.log(`composant App monté`);
    setstate({...state, ...datas});
    // setstate({...state, current.titre: "rrrr"})
    return () => {
      // cleanup
      console.log(`composant App démonté`);
    }
  }, []);
  return (
    <div className="App">
      <FlexV3Grow>
        <Header />
        <NavBar />
        <FlexH1Grow>
          <MemeSVGViewer
          meme={state.current}
          image={state.images.find(img => img.id === state.current.imageId)}
          basePath='' />
          <MemeForm
          images={datas.images}
          current={state.current}
          onMemeChange={(meme) => setstate({...state, current: meme})} />
        </FlexH1Grow>
        <Footer />
      </FlexV3Grow>
    </div>
  )
}

export default App
