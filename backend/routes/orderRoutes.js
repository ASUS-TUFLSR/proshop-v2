import express from 'express';
const router = express.Router();
import {
  addOrderItems, 
  getMyOrders, 
  getOrderByID, 
  updateOrderToPaid, 
  updateOrderToDeliver, 
  getOrders
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';


router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/mine').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderByID);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDeliver);


export default router;