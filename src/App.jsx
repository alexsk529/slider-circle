import React from 'react';
import styled from 'styled-components';
import Title from './components/Title.jsx';
import { Container, ContentContainer, Vertical, Horizontal } from './components/containers.js'
import Diagram from './components/Diagram/Diagram.jsx';

import { DiagramContext } from './DiagramContext';
import { useData } from './hooks/useData';


function App() {
    const data = useData();

    const providerData = React.useMemo(()=> data, [data])
    
    return (
        <DiagramContext.Provider value={providerData}>
            <Container>
                <Vertical/>
                <Horizontal/>
                <ContentContainer>
                    <Title>Исторические <br/> даты</Title>
                    <Diagram></Diagram>
                </ContentContainer>
            </Container>
        </DiagramContext.Provider>
    );
}

export default App;
