/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { HomePage } from '../resources/views/pages/home.jsx'

router.get('/', () => {
  return <HomePage />
})
