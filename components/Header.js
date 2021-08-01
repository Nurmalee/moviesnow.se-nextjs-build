import { HomeOutlined, HorizontalSplitOutlined, OfflineBoltOutlined, PersonOutlined, SearchOutlined, VerifiedUserOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import Image from 'next/image'
import HeaderItem from './HeaderItem'


const Header = () => {
    return (
        <HeaderContainer>

            <HeaderLeft>
                <h2>moviesNow.se</h2>
                {/* <Image src='/netflix_official_logo_icon.svg' height={50} width={100} /> */}
            </HeaderLeft>
            <HeaderRight>
                <HeaderItem Icon={HomeOutlined} title="home"/>
                <HeaderItem Icon={OfflineBoltOutlined} title="trending"/>
                <HeaderItem Icon={VerifiedUserOutlined} title="verified"/>
                <HeaderItem Icon={HorizontalSplitOutlined} title="collection"/>
                <HeaderItem Icon={SearchOutlined} title="search"/>
                <HeaderItem Icon={PersonOutlined} title="account"/>
            </HeaderRight>

        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 700px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;

    @media screen and (min-width: 700px) {
        flex: 0.5;
        justify-content: space-between;
        margin-bottom: 0;
    }
`

const HeaderLeft = styled.div`
    font-family: 'Bebas Neue', cursive;
    font-family: 'Kanit', sans-serif;
    letter-spacing: 0.2px;
    border-bottom: 1px solid brown;
    margin-bottom: 30px;

    > h2 {
        font-size: 27px;
        color: rgb(232, 51, 42);

        &:first-letter {
            font-size: 35px;
        }
    }

    @media screen and (min-width: 700px) {
        align-self: flex-start;
        border-bottom: none;
    }
`
