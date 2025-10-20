import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Courses from '../views/Courses.vue'
import Contact from '../views/Contact.vue'
import CourseDetail from '../views/CourseDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/course/:id',
    name: 'CourseDetail',
    component: CourseDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router