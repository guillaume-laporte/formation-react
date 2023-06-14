import React, { useEffect } from 'react'
import FlexH1Grow from '../components/layout/FlexH1Grow/FlexH1Grow'
import { MemeSVGViewerStoredConnected } from '../components/fonctionnal/MemeSVGViewerStoredConnected/MemeSVGViewerStoredConnected'
import { MemeFormStoredConnected } from '../components/fonctionnal/MemeForm/MemeForm'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../store/currentSlice'
import { emptyMeme } from 'orsys-tjs-meme'

export default function Editor() {

    console.log("GLA GLA GLA - ", useParams());

    const d = useDispatch();
    const memes = useSelector(s => s.ressources.memes);
    const params = useParams();
    
    useEffect(() => {
        if (undefined !== Number(params.id)) {
            const toViewMeme = memes.find(m => m.id === Number(params.id));
            if (undefined === toViewMeme) {  }
            else { d(update(toViewMeme)); }
        } else {
            d(update(emptyMeme));
        }
    }, [params, d, memes])
    
  return (
    <FlexH1Grow>
        <MemeSVGViewerStoredConnected basePath='' />
        <MemeFormStoredConnected />
    </FlexH1Grow>
  )
}
