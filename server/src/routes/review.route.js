import { Router } from "express";
import authenticate from "../middlewares/authenticate.js";
import {
  createReview,
  getRecentReviews,
  getTrackReviews,
  getPopularReviews,
  toggleReviewLike,
  updateReview,
  deleteReview,
  getMyTrackReview,
} from "../controllers/review.controller.js";

const reviewRoutes = Router();

reviewRoutes.get("/recent", getRecentReviews);
reviewRoutes.get("/popular", getPopularReviews);
reviewRoutes.get("/track/:id/me", authenticate, getMyTrackReview);
reviewRoutes.get("/track/:id", getTrackReviews);
reviewRoutes.post("/", authenticate, createReview);
reviewRoutes.put("/:id", authenticate, updateReview);
reviewRoutes.delete("/:id", authenticate, deleteReview);
reviewRoutes.post("/:id/like", authenticate, toggleReviewLike);

export default reviewRoutes;
