import React from 'react'
import Router from 'next/router'
import MovieCreateForm from '../../../components/movieCreateForm'
import { getMovieById, updateMovie } from '../../../actions'


class EditMovie extends React.Component {

  static async getInitialProps({query}) {
    const movie = await getMovieById(query.id)

    return { movie }
  }

  handleUpdateMovie = (movie) => {
    updateMovie(movie).then((updatedMovie) => {
      // router.push('/')
      Router.push('/movies/[id]', `/movies/${movie.id}`)
    })
  }

  render() {
    const { movie } = this.props
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <MovieCreateForm
          submitButton="Update"
          initialData={movie}
          handleFormSubmit={this.handleUpdateMovie} />
      </div>
    )
  }
}


export default EditMovie






 //setState gibi bir yapıdır , Component Dom'a render edildikten sonra çalışan Event'ımızdır.
 // Yani render işleminden sonra çalışır ==> ComponentDidMount


// import React from 'react'
// import MovieCreateForm from '../../../components/movieCreateForm'
// import { getMovieById } from '../../../actions'


// class EditMovie extends React.Component {

//   // static getInitialProps({query}) {
//   //   return {query}
//   // }
//   static async getInitialProps({query}) {
//     const movie = await getMovieById(query.id)

//     return { movie }
//   }

//   // state = {
//   //   movie: {
//   //     name: '',
//   //   description: '',
//   //   rating: '',
//   //   image: '',
//   //   cover: '',
//   //   longDesc: ''
//   //   }
//   // }

//   // componentDidMount() { //setState gibi bir yapıdır , Component Dom'a render edildikten sonra çalışan Event'ımızdır. Yani render işleminden sonra çalışır
//   //   const { id } = this.props.query
//   //   getMovieById(id).then(movie => {
//   //     this.setState({movie})
//   //   })
//   // }


//   render() {
//     const {movie} = this.props
//     return (
      
//       <div className="container">
//         <h1>Edit the Movie</h1>
        
//         <MovieCreateForm initialData={movie} />
//       </div>
//     )
//   }
// }


// export default EditMovie


