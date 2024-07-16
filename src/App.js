import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });

        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });
  }


  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(items)
    }

    return (
      <>
        <BrowserRouter>
          <Header title="Reac App" />
          <Routes>
            <Route path="/" element={<Home item={items}/>}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="*" element={
              <div style={{ padding: "1rem" }}>
                <h1>There's nothing here!</h1>
              </div>
            }>
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>


      </>
    )
  }
}

