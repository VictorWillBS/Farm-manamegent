/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const FarmersConteroller = () => import('#controllers/farmers_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('farmers', FarmersConteroller).apiOnly()
