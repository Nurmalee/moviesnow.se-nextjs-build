import styled from 'styled-components' 

const HeaderItem = ({Icon, title}) => {
    return (
        <HeaderItemOne>
            <Icon />
            <p>{title}</p>
        </HeaderItemOne>
    )
}

export default HeaderItem

const HeaderItemOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50px;
    cursor: pointer;

    > p {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 13px;
        opacity: 0;
        margin-top: 10px;
        transition: 300ms;
    }

    &:hover {
        color: white;

        > p {
            opacity: 100;
        }
    }

    @media screen and (min-width: 700px) {
        width: 70px;

        > p {
            font-size: 15px;
            opacity: 0;
        }
    }
`