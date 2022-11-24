import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Routes';

function App() {

  return (
    <div className='mx-auto max-w-screen-xl'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
