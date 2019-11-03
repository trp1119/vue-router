import Login from '../view/login'
import Home from '../view/home'

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/home/exact',
    component: Home
  }
]
