import styled from 'styled-components'
import Thumbnail from './Thumbnail'

const Results = ({movies}) => {
    return (
        <MoviesGrid>
            {
                movies.map(movie => <Thumbnail key={movie.id} movie={movie} /> )
            }   
        </MoviesGrid>
    )
}

export default Results

const MoviesGrid = styled.div`
    display: grid;
    gap: 20px;
   
    @media screen and (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 650px) {
        grid-template-columns: repeat(3, 1fr)
    }

    @media screen and (min-width: 900px) {
        grid-template-columns: repeat(4, 1fr)
    }
`

