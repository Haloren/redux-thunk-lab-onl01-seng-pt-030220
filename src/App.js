import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList'

class App extends Component {   
  
  componentDidMount() {
    console.log(this.props + "componentDidMount")
    this.props.fetchCats()
  }

  handleLoading = () => {
    console.log(this.props.loading + "handleLoading")
    if(this.props.loading) {
      return <div>Loading....</div>
    }else{
      return <CatList catPics={this.props.catPics} />
    }
  }

  render() {
    console.log(this.props.catPics + "App render()")
    return (
      <div className="App">
        <h1>CatBook</h1>
        {/* add CatList component here */}
        {this.handleLoading()}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     catPics: state.cats,
//     loading: state.loading
//   }
// }

// const mapDispatchToProps = dispatch => {
const mapDispatchToProps = state => {
  return {
    // fetchCats: () => dispatch(fetchCats())
    catPics: state.cats,
    loading: state.loading
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default connect(mapDispatchToProps, {fetchCats})(App)