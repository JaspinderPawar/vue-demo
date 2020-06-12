import Home from './components/Home'
import About from './components/About'

export default [
  { name: 'home', path: '/', component: Home },
  { name: 'about', path: '/about/:id', component: About, props: true },
  //{ name: 'posts.view', path: '/posts/:id', component: Post }
]