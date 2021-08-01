const Results = ({movies}) => {
    return (
        <div>
            {
                movies.map(movie => <Thumbnail key={movie.id} {...movie} /> )
            }   
        </div>
    )
}

export default Results
