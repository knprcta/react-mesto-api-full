const router = require('express').Router();
const {
  getUsers, getUserById, updateUser, updateAvatar, getUserInfo,
} = require('../controllers/users');
const { validateUserId, validateInfo, validateAvatar } = require('../middlewares/validator');

router.get('/', getUsers);
router.get('/me', getUserInfo);
router.get('/:userId', validateUserId, getUserById);
router.patch('/me', validateInfo, updateUser);
router.patch('/me/avatar', validateAvatar, updateAvatar);

module.exports = router;
