import styled from 'styled-components'
import moviesRoot from '../utils/request'
import { useRouter } from 'next/router'

const Nav = () => {

    const router = useRouter()

    return (
        <Navbar>
            <div>
                {
                    Object.entries(moviesRoot).map(([key, {title, URL}]) => <h2 key={key} onClick={() => router.push(`/?genre=${key}`) }>{title}</h2> )
                }
            </div>
            <Fade></Fade>
        </Navbar>
    )
}

export default Nav

const Navbar = styled.nav`
    position: relative;
    margin: 20px 0;

    > div {
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        padding: 10px 0;

        > h2 {
            font-size: 14px;
            font-weight: 400;
            width: fit-content;
            cursor: pointer;
            white-space: nowrap;
            margin: 0 15px;
            padding: 0 5px;
            transition: 300ms;
            border-bottom: 2px solid transparent;

            &:hover {
                transform: scale(1.1);
                color: white;
                /* border-bottom: 2px solid white; */
            }

            &:active {
                color: rgb(232, 51, 42);
            }

            &:last-of-type:hover {
                margin-right: 30px;
            }

            @media screen and (min-width: 700px) {
                font-size: 15px;
            }
        }

        &::-webkit-scrollbar {
            height: 10px;
            opacity: 0;
        }
            
        &::-webkit-scrollbar-track {  
            background-color: transparent;
        }
            
        &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background-color: rgba(0, 0, 0, 0.15);
        }
    }
`

const Fade = styled.div`
    position: absolute;
    width: 77px;
    top: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.0), #222);
`
