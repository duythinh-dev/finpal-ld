// hooks/useSubmitForm.ts
import { set } from "date-fns";
import { useState } from "react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function useSubmitForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = async (formData: Record<string, any>) => {
    setStatus("loading");
    setError(null);
    console.log("Submitting form data:", formData);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL || "",
        {
          method: "POST",
          mode: "no-cors", // Chỉ dùng nếu Google Apps Script không trả về JSON
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        setError("Đã xảy ra lỗi khi gửi dữ liệu. Vui lòng thử lại sau.");
        setStatus("error");
      }

      setStatus("success");
    } catch (err: any) {
      console.error("Form submission error:", err);
      setError(err.message || "Đã xảy ra lỗi");
      setStatus("error");
    }
  };

  return { submit, status, error };
}
