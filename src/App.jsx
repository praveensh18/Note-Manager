import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NoteAPI } from 'api/note-api';
import { setNoteList } from './store/notes/note-slice';

export function App() {
  const dispatch = useDispatch();

  const fetchAllNotes = async () => {
    const noteList = await NoteAPI.fetchAllNotes();
    dispatch(setNoteList(noteList));
  };

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div>
      <Header />
      <div className='workspace'>
      <Outlet />
      </div>
    </div>
  );
}
