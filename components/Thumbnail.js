import Image from 'next/image'
import styled from 'styled-components'

const Thumbnail = ({movie}) => {

    const BASE_URL = "https://image.tmdb.org/t/p/original/"

    return (
        <ThumbnailContainer>
            <MovieBox>
                <Image src={`${BASE_URL}${movie.poster_path}` || `${BASE_URL}${movie.backdrop_path || movie.poster_path}`} height={300} width={200} />
            </MovieBox>
            
        </ThumbnailContainer>
    )
}

export default Thumbnail

const ThumbnailContainer = styled.div`

`

const MovieBox = styled.div`
    height: 300px;
    border: 1px solid teal;
    /* width: 200px; */

`
