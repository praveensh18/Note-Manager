import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from 'App';
import { StrictMode } from 'react';
import NoteBrowse from 'pages/NoteBrowse/NoteBrowse';
import Note from 'pages/Note/Note';
import NoteCreate from 'pages/NoteCreate/NoteCreate';
import PageNotFound from 'pages/PageNotFound/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<NoteBrowse />}></Route>
            <Route path='/note/:noteId' element={<Note />}></Route>
            <Route path='/note/new' element={<NoteCreate />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
