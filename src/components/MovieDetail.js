/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */

import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const API_KEY = '550cdedbf6caf11afd3650259725861c';

class MovieDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    const { match } = this.props;
    fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(movies => {
        this.setState(() => ({ movies }))
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="movie-detail">
        <h1>{movies.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt="poster" />
        <div>
          <Typography component="p">
            <strong>Tagline:&nbsp;</strong>{movies.tagline}
          </Typography>
          <Typography component="p">
            <strong>IMDB Rating:&nbsp;</strong>{movies.vote_average}
          </Typography>
          <Typography component="p">
            <strong>Release Date:&nbsp;</strong>{movies.release_date}
          </Typography>
          <Typography component="p">
            <strong>Budget:&nbsp;</strong>{movies.budget}
          </Typography>
          <Typography component="p">
            <strong>Status:&nbsp;</strong>{movies.status}
          </Typography>
          <Typography component="p">
            <strong>Homepage:&nbsp;</strong>{movies.homepage}
          </Typography>
          <Typography component="p">
            <strong>Overview:&nbsp;</strong>{movies.overview}
          </Typography>
          <Link to={{
            pathname : '/collection',
            state : {
              moviename : movies.title,
              movieid: movies.id}
            }}>
            <Button>Add to collection</Button>
            </Link>
        </div>
      </div>
    );
  }

};

export default MovieDetail;
