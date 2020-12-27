const Review = require('../models/reviewModel');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
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
exports.getAllReviews = catchAsync(async (req, res, next) => {
  // Build filter for get all reviews for one tour if tourId param
  // is sent by user
  let filter = {};
  if (req.params.tourId) filter = { tour: req.params.tourId };

  // EXECUTE QUERY
  const reviews = await Review.find(filter);

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews: reviews,
    },
  });
});

// Delete Review
exports.deleteReview = factory.deleteOne(Review);
// Update Review
exports.updateReview = factory.updateOne(Review);
