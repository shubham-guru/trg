import { Routes, Route } from 'react-router-dom'
import pageRoutes from './pageRoutes'
import Home from '../presentation/screens/Home'
import NoPageFound from '../presentation/screens/NoPageFound'
import Read from '../presentation/screens/Read'
import ViewCollections from '../presentation/screens/ViewCollections'

const AppRoutes= () => {
  return (
    <Routes>
      <Route path={pageRoutes.HOME} element={<Home />} />
      <Route path={pageRoutes.READ} element={<Read />} />
      <Route path={pageRoutes.VIEW_COLLECTIONS} element={<ViewCollections />} />
      <Route path="*" element={<NoPageFound />} />
    </Routes>
  )
}

export default AppRoutes