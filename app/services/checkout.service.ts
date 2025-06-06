// service.ts
export interface FormDataPayload {
  name: string;
  email: string;
  phone: string;
  campaignName: string;
  workshopDate: string;
  workshopTime: string;
  utms: { [key: string]: string | null };
  submittedAt: string;
  landingPageUrl: string;
}

export const submitFormToPabbly = async (formData: FormDataPayload) => {
  const payload = {
    submittedAt: formData.submittedAt,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    CampeignName: formData.campaignName,
    WorkShopDate: formData.workshopDate,
    WorkShopTime: formData.workshopTime,
    ...formData.utms,
    landingPageUrl: formData.landingPageUrl,
  };

  const response = await fetch(
    `https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY4MDYzZjA0MzI1MjY4NTUzNjUxMzMi_pc`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) throw new Error("Webhook submission failed");
};

export const openRazorpayCheckout = (formData: {
  name: string;
  email: string;
  phone: string;
  amount: number;
  onSuccess: () => void;
}) => {
  // Check if Razorpay is loaded
  if (typeof window === "undefined" || typeof (window as any).Razorpay === "undefined") {
    alert("Razorpay SDK not loaded. Please check your integration.");
    return;
  }

  const options = {
    key: "rzp_live_zT6qxWnoCMD9tU", // Replace with your actual Razorpay key
    amount: formData.amount,
    currency: "INR",
    name: "StockTutor",
    description: "Advisory Workshop",
    handler: function (response: any) {
      console.log("Payment success:", response);
      formData.onSuccess();
    },
    prefill: {
      name: formData.name,
      email: formData.email,
      contact: formData.phone,
    },
    theme: {
      color: "#0d9488",
    },
  };

  const rzp = new (window as any).Razorpay(options);
  rzp.open();
};
