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
`

