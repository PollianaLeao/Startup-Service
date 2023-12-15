
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Comments } from './comments/Comments'; // Component for comments
import { SubmitRecipe } from './submitRecipe/SubmitRecipe'; // Component for submitting recipes
import './app.css'; // Your custom CSS

function App() {
  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <NavLink className='nav-link' to='/comments'>Comments</NavLink>
            <NavLink className='nav-link' to='/submit-recipe'>Submit Recipe</NavLink>
          </nav>
        </header>

        <Routes>
          <Route path='/comments' element={<Comments />} />
          <Route path='/submit-recipe' element={<SubmitRecipe />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-light'>
          <div className='container-fluid'>
            <span>Your Gluten-Free Kitchen</span>
            <a href='https://github.com/your-github-repo'>Source</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Page Not Found</main>;
}

export default App;
