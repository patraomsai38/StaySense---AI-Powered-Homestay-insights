import { toast } from "react-hot-toast";

/**
 * Toast Component
 */

export const showToast = (message) => {
  toast.success(message);
};