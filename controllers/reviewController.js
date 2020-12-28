const Review = require('../models/reviewModel');
// const AppError = require('../utils/appError');
// const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

// Make a new review
exports.createReview = factory.createOne(Review);

// Get reviews
exports.getAllReviews = factory.getAll(Review);
// Delete Review
exports.deleteReview = factory.deleteOne(Review);
// Update Review
exports.updateReview = factory.updateOne(Review);
// Get Review
exports.getReview = factory.getOne(Review);
// Get All Reviews
