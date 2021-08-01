import styled from 'styled-components'
import moviesRoot from '../utils/request'

const Nav = () => {
    return (
        <Navbar>
            <div>
                {
                    Object.entries(moviesRoot).map(([key, {title, URL}]) => <h2 key={key}>{title}</h2> )
                }
            </div>
        </Navbar>
    )
}

export default Nav

const Navbar = styled.nav`

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

            /* &:last-of-type {
                padding-right: 40px;
            } */

            &:hover {
                transform: scale(1.1);
                color: white;
                border-bottom: 2px solid rgb(232, 51, 42);
                border-bottom: 2px solid white;
            }

            &:active {
                color: rgb(232, 51, 42);
            }

            @media screen and (min-width: 700px) {
                font-size: 16px;
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
