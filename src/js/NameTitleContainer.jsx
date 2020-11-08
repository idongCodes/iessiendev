import Name from './Name';
import SubTitle from './SubTitle';
import styled from 'styled-components';

const NameAndTitle = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
font-weight:700;
`

export default function NameTitleContainer() {
    return (
        <NameAndTitle>
            <Name />
            <SubTitle />
        </NameAndTitle>
    );
}