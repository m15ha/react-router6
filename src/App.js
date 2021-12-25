import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/notFound';
import About from './pages/about';
import Posts from './pages/posts';
import Layout from './components/layout';
import { Post } from './pages/post';
import { Edit } from './pages/edit';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='posts' element={<Posts />} />
                    <Route path='posts/:id' element={<Post />} />
                    <Route path='posts/:id/edit' element={<Edit />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
