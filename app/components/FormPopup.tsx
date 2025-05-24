import { timestamp } from "@/lib/masterclass_functions/formatDate";
import Link from "next/link";
import React, { useState } from "react";

interface PopupModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [UserName, setUserName] = useState("");
    const [UserPhone, setUserPhone] = useState("");
    const [UserEmail, setUserEmail] = useState("");
    const [wDateTime, setwDateTime] = useState("");
    const [campName, setCampName] = useState("");
    const [offerEnd, setOfferEnd] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone: string) => /^[0-9]{10}$/.test(phone);
    const toggle = (index: number) => { setActiveIndex(activeIndex === index ? null : index) };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors({});

        const formData = {
            name: UserName.trim(),
            email: UserEmail.trim(),
            phone: UserPhone.trim(),
        };

        let isValid = true;
        const errors: typeof formErrors = {};


        if (!formData.name) {
            errors.name = "Name is required.";
            isValid = false;
        }

        if (!isValidEmail(formData.email)) {
            errors.email = "Invalid email address.";
            isValid = false;
        }

        if (!isValidPhone(formData.phone)) {
            errors.phone = "Invalid phone number.";
            isValid = false;
        }

        if (!isValid) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);

        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = "https://stocktutor.co/no-code-algo/thankyou";

        const data = {
            submittedAt: timestamp(),
            ...formData,
            CampeignName: campName,
            WorkShopTime: wDateTime,
            utm_source: urlParams.get("utm_source"),
            utm_medium: urlParams.get("utm_medium"),
            utm_campaign: urlParams.get("utm_campaign"),
            utm_adgroup: urlParams.get("utm_adgroup"),
            utm_content: urlParams.get("utm_content"),
            utm_term: urlParams.get("utm_term"),
            adsetName: urlParams.get("adset name"),
            adName: urlParams.get("ad name"),
            landingPageUrl: window.location.href,
        };

        try {
            const response = await fetch(`https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY4MDYzZjA0MzI1MjY4NTUzNjUxMzMi_pc`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            window.location.href = redirectUrl;

        } catch (error: any) {
            console.error("Submission error:", error.message);
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }

    };

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl  w-[100%] max-w-md p-6">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
                    onClick={onClose}
                >
                    ✕
                </button>
                <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">Register for Free</h2>
                <form className="space-y-4 w-full" onSubmit={handleSubmit} >
                    <div>
                        <label className="flex flex-col items-start mb-1 text-gray-700">Name</label>
                        <input
                            name="name"
                            placeholder="Enter Name"
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>
                    {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}

                    <div>
                        <label className="flex flex-col items-start mb-1 text-gray-700">Email</label>
                        <input
                            name="email"
                            onChange={(e) => setUserEmail(e.target.value)}
                            type="email"
                            placeholder="Enter Email"
                            className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>
                    {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

                    <div>
                        <label className="flex flex-col items-start mb-1 text-gray-700">Phone</label>
                        <div className="flex">
                            <span className="flex items-center px-4 bg-gray-200 border border-r-0 rounded-l-md text-gray-700">
                                IND
                            </span>
                            <input
                                name="phone"
                                placeholder="Enter Phone"
                                onChange={(e) => setUserPhone(e.target.value)}
                                className="w-full px-4 py-2 text-black border border-l-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-black"
                                required
                            />
                        </div>
                        {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-2 rounded-md transition 
                                    ${isSubmitting
                                ? "bg-gray-700 text-white cursor-not-allowed"
                                : "bg-black hover:bg-gray-800 text-white cursor-pointer"
                            }`}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-2">
                        By continuing, you agree to our{' '}
                        <Link href="https://stocktutor.com/terms-and-conditions" className="text-blue-600 underline">
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="https://stocktutor.com/privacy-policy#privacy" className="text-blue-600 underline">
                            Privacy Policy
                        </Link>.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default PopupModal;
