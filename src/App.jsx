import React from 'react';
import Title from './components/Title.jsx';
import { Container, ContentContainer, Vertical, Horizontal } from './components/containers.js'
import Diagram from './components/Diagram/Diagram.jsx';
import Dates from './components/Dates.jsx';

import { DiagramContext } from './DiagramContext';
import { useData } from './hooks/useData';

import Slider from './components/Slider.jsx';

function App() {
    const data = useData();
    const circle = React.useRef({});
    const providerData = React.useMemo(()=> data, [data])
    const [current, setCurrent] = React.useState(0);
    const [timing, setTiming] = React.useState(1);
    
    return (
        <DiagramContext.Provider value={{providerData, circle, current, setCurrent, timing, setTiming}}>
            <Container>
                <ContentContainer>
                    <Title>Исторические <br/> даты</Title>
                    <Diagram></Diagram>
                    <Dates/>
                    <Slider/>
                </ContentContainer>
                <Vertical/>
                <Horizontal/>
            </Container>
        </DiagramContext.Provider>
    );
}

export default App;
