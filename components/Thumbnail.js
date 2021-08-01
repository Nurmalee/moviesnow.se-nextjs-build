import Image from 'next/image'
import styled from 'styled-components'

const Thumbnail = ({movie}) => {

    const BASE_URL = "https://image.tmdb.org/t/p/original/"

    return (
        <ThumbnailContainer>
            <h3>{movie.title || movie.original_title || movie.name || movie.original_name}</h3>

            <MovieBox>
                <Image src={`${BASE_URL}${movie.poster_path}` || `${BASE_URL}${movie.backdrop_path || movie.poster_path}`} layout='fill' />

                <MovieDetails>
                    <div>
                        <p>Ratings: {movie.vote_average}</p>
                        <p>Votes: {movie.vote_count}</p>
                        <p>Quality 1080p WEBRip (High)</p>
                    </div>
                    <p>{movie.overview.length <= 250 ? movie.overview : movie.overview.substring(0, 250)}...</p>
                </MovieDetails> 
            </MovieBox>
            
        </ThumbnailContainer>
    )
}

export default Thumbnail

const ThumbnailContainer = styled.div`

    > h3 {
        font-size: 13px;
        font-weight: 400;
        text-align: center;
    }
    
`

const MovieBox = styled.div`
    position: relative;
    height: 300px;
    /* width: 220px; */
    border: 1px solid teal;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        > div {
            opacity: 100;
        }
    }
`

const MovieDetails = styled.div`
    position: absolute;
    height: 100%;
    padding: 10px;
    top: 0;
    left: 0;
    font-size: 11px;
    text-align: center;
    opacity: 0;
    transition: 300ms;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), teal);

    > div {
        margin-bottom: 10px; 
    }
`
