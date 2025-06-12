/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const FarmsController = () => import('#controllers/farms_controller')
import router from '@adonisjs/core/services/router'
const FarmersConteroller = () => import('#controllers/farmers_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('farmers', FarmersConteroller).apiOnly()
router.resource('farms', FarmsController).apiOnly()
