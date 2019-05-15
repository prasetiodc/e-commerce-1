const router = require('express').Router()
const transaction = require('../controllers/transaction')
const { authentication, authorization } = require('../middleware/auth')


router.use(authentication)
router.get('/', transaction.findAll)
router.get('/:id', transaction.findOne)
router.post('/', transaction.create)

// router.use('/:id', authorization)
router.delete('/:id', transaction.delete)
router.patch('/:id', transaction.update)

module.exports = router