import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'

export default [
  { name: 'home', path: '/', component: Home },
  { name: 'about', path: '/about/:id', component: About, props: true },
  { name: 'Login', path: '/login', component: Login }
]