import React from 'react';
import styled from 'styled-components';
import Title from './components/Title.jsx';
import { Container, ContentContainer, Vertical, Horizontal } from './components/containers.js'
import Diagram from './components/Diagram/Diagram.jsx';

import { DiagramContext } from './DiagramContext';
import { useData } from './hooks/useData';

import Swiper from './components/Swiper.jsx';
import SliderContainer from './components/SliderContainer.jsx';

function App() {
    const data = useData();
    const circle = React.useRef({});
    const providerData = React.useMemo(()=> data, [data])
    const [current, setCurrent] = React.useState(0);
    const [timing, setTiming] = React.useState(1);
    
    return (
        <DiagramContext.Provider value={{providerData, circle, current, setCurrent, timing, setTiming}}>
            <Container>
                <Vertical/>
                <Horizontal/>
                <ContentContainer>
                    <Title>Исторические <br/> даты</Title>
                    <Diagram></Diagram>
                    <Swiper/>
                    <SliderContainer/>
                </ContentContainer>
            </Container>
        </DiagramContext.Provider>
    );
}

export default App;
