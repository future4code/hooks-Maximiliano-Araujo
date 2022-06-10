import React from "react"
import { ContainerHeader } from "./HeaderStyled"
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import { Buttons } from "./HeaderStyled";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const Header = (props) => {
    return (
        <ContainerHeader>
            <h2>Astromatch</h2>
            <Buttons>
                {props.showPage === 'cardOptions' &&
                    <button onClick={() => props.changePage('cardMatch')}
                    ><WhatshotRoundedIcon
                            color="error" fontSize="large"
                        /></button>}
                {props.showPage === 'cardMatch' &&
                    <button onClick={() => props.changePage('cardOptions')} ><PeopleAltIcon
                        color="error" fontSize="large" />
                    </button>}
            </Buttons>
        </ContainerHeader>
    )
}

export default Header;

