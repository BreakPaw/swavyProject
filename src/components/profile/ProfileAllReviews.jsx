import { useCallback, useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ReviewCard from "../sections/CuratedEditorial/ReviewCard";
import ReviewModal from "../review/ReviewModal";
import { deleteReview } from "../../services/review";

const ProfileAllReviews = ({ reviews, isOwnProfile, onBack, onReviewDeleted }) => {
  const [editingReview, setEditingReview] = useState(null);
  const [reviewToDelete, setReviewToDelete] = useState(null);
  const [deletingReviewId, setDeletingReviewId] = useState(null);
  const [deleteError, setDeleteError] = useState("");

  const handleReviewClick = (review) => {
    if (!isOwnProfile) return;
    setEditingReview(review);
  };

  const openDeleteConfirmation = (review) => {
    if (!isOwnProfile || deletingReviewId) return;
    setDeleteError("");
    setReviewToDelete(review);
  };

  const closeDeleteConfirmation = useCallback(() => {
    if (deletingReviewId) return;
    setReviewToDelete(null);
  }, [deletingReviewId]);

  useEffect(() => {
    if (!reviewToDelete) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeDeleteConfirmation();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [reviewToDelete, closeDeleteConfirmation]);

  const handleConfirmDelete = async () => {
    if (!reviewToDelete || deletingReviewId) return;

    const review = reviewToDelete;
    setDeleteError("");
    setDeletingReviewId(review.id);

    try {
      await deleteReview(review.id);
      onReviewDeleted?.(review.id);
      if (editingReview?.id === review.id) {
        setEditingReview(null);
      }
      setReviewToDelete(null);
    } catch (error) {
      setDeleteError(error?.message || "Failed to delete review.");
    } finally {
      setDeletingReviewId(null);
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl md:min-w-[720px] lg:min-w-[820px]">
      <div className="mb-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full px-3 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-950"
        >
          Back to Profile
        </button>
      </div>

      <h2 className="mb-6 font-['Newsreader'] text-3xl font-bold text-gray-950">
        All Reviews
      </h2>

      {deleteError ? (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {deleteError}
        </div>
      ) : null}

      {reviews.length > 0 ? (
        <div className="flex flex-col gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-gray-300"
            >
              <ReviewCard
                title={review.title}
                artist={review.artist}
                rating={review.rating}
                snippet={review.content || ""}
                image={review.image_url}
                trackId={review.track_id}
              />
              {isOwnProfile ? (
                <div className="mt-3 flex justify-end gap-2 border-t border-gray-100 pt-3">
                  <button
                    type="button"
                    onClick={() => openDeleteConfirmation(review)}
                    disabled={deletingReviewId === review.id}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <FaRegTrashAlt size={13} />
                    {deletingReviewId === review.id ? "Deleting..." : "Delete Review"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleReviewClick(review)}
                    disabled={deletingReviewId === review.id}
                    className="rounded-full px-3 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-950"
                  >
                    Update Review
                  </button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-sm text-gray-400">
          No reviews yet.
        </div>
      )}

      {editingReview && isOwnProfile ? (
        <ReviewModal
          track={{
            id: editingReview.track_id,
            title: editingReview.title,
            artist: editingReview.artist,
            image: editingReview.image_url,
            albumId: editingReview.album_id,
            albumName: editingReview.album_name,
            albumType: editingReview.album_type,
          }}
          onClose={() => setEditingReview(null)}
        />
      ) : null}

      {reviewToDelete ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-review-title"
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-red-500">
                  Delete review
                </p>
                <h3
                  id="delete-review-title"
                  className="text-2xl font-bold leading-tight text-gray-950"
                >
                  Are you sure?
                </h3>
              </div>

              <button
                type="button"
                onClick={closeDeleteConfirmation}
                disabled={!!deletingReviewId}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                aria-label="Close delete review confirmation"
              >
                <IoClose size={22} />
              </button>
            </div>

            <p className="text-sm leading-relaxed text-gray-600">
              Are you sure you want to delete your review for{" "}
              <span className="font-semibold text-gray-950">
                {reviewToDelete.title}
              </span>
              ? This action cannot be undone.
            </p>

            {deleteError ? (
              <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                {deleteError}
              </div>
            ) : null}

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={closeDeleteConfirmation}
                disabled={!!deletingReviewId}
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-800 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                disabled={!!deletingReviewId}
                className="inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
              >
                <FaRegTrashAlt size={13} />
                {deletingReviewId ? "Deleting..." : "Delete Review"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProfileAllReviews;
