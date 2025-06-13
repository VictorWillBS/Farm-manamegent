/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import apiDocs from '../api-docs.json' with { type: 'json' }

const CropsController = () => import('#controllers/crops_controller')
const FarmsController = () => import('#controllers/farms_controller')
const FarmersConteroller = () => import('#controllers/farmers_controller')
const HarvestsController = () => import('#controllers/harvests_controller')
const DashboardController = () => import('#controllers/dashboard_controller')

router.resource('farmers', FarmersConteroller).apiOnly()
router.resource('farms', FarmsController).apiOnly()
router.resource('harvests', HarvestsController).apiOnly()
router.resource('crops', CropsController).apiOnly()
router.get('dashboard', [DashboardController, 'index'])
router.get('dashboard2', [DashboardController, 'index2'])
router.get('docs', () => apiDocs)
