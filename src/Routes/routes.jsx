import { createBrowserRouter } from 'react-router-dom';
import MovieShow from '../Components/MovieShow';
import Root from '../Layout/root';
import Home from '../Page/Home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'movie/:movieId',
        element: <MovieShow />,
      },
    ],
  },
]);

export default routes;
