import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/root';
import Home from '../Page/Home';
import MovieShow from '../Page/MovieShow';

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
