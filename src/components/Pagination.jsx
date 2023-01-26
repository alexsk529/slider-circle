import React from 'react';
import { DiagramContext } from '../DiagramContext';
import styled, {css} from 'styled-components';
import { useRotation } from '../hooks/useRotation';

const StyledDot = styled.div`
    width: 6px;
    height: 6px;
    background: #42567A;
    opacity: 0.4;
    border-radius: 50%;
    cursor: pointer;
    ${props => props.active && css`
        opacity: 1;
    `}
`

const StyledContainer = styled.div`
    display: flex;
    gap: 10px;
`

const Pagination = () => {
    const {providerData: data, current, setCurrent, circle} = React.useContext(DiagramContext);
    const {paginationClick} = useRotation(circle)
    const handleClick = (e) => {
        setCurrent(+e.target.dataset.id - 1);
        paginationClick(+e.target.dataset.id);
    }
    
    return ( 
        <StyledContainer>
            {
                data.map ((entity, index) => {
                    const configs = {
                        onClick: handleClick,
                        key: entity.id,
                        'data-id': entity.id
                    }
                    if (index === +current) return <StyledDot {...configs} active />
                    else return <StyledDot {...configs}/>
                })
            }
        </StyledContainer>
    );
}
 
export default Pagination;