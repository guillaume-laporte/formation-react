import React, { useState, useEffect } from 'react'
import FlexV3Grow from './components/layout/FlexV3Grow/FlexV3Grow'
import Header from './components/ui/Header/Header'
import NavBar from './components/ui/NavBar/NavBar'
import FlexH1Grow from './components/layout/FlexH1Grow/FlexH1Grow'
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme'
import Footer from './components/ui/Footer/Footer'
import MemeForm, { MemeFormStoredConnected } from './components/fonctionnal/MemeForm/MemeForm'
import datas from './db.json'
import store from './store/store'
import { fetchAllRessources } from './store/ressourcesSlice'
import { MemeSVGViewerStoredConnected } from './components/fonctionnal/MemeSVGViewerStoredConnected/MemeSVGViewerStoredConnected'
import { Route, Routes } from 'react-router-dom'
import Editor from './pages/editor'
import MemeThumbnail, { MemeThumbnailStoredConnected } from './components/ui/MemeThumbnail/MemeThumbnail'

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
    store.dispatch(fetchAllRessources());
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
        <Routes>
          <Route path='/' element={<div><h1>Hello à tous</h1></div>} />
          <Route path='/thumbnail' element={<MemeThumbnailStoredConnected />} />
          <Route path='/meme' element={<Editor />} />
          <Route path='/meme/:id' element={<Editor />} />
        </Routes>
        <Footer />
      </FlexV3Grow>
    </div>
  )
}

/*
<MemeSVGViewer
meme={state.current}
image={state.images.find(img => img.id === state.current.imageId)}
basePath='' />
*/

/*
<MemeForm
images={datas.images}
current={state.current}
onMemeChange={(meme) => setstate({...state, current: meme})} />
*/

export default App
