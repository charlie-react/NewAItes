"use client";
import { useState } from "react";
import { X } from "lucide-react"
import toast from "react-hot-toast";
import { API_BASE_URL } from "@/config";

export default function ChangePassword({toggle}) {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleChangePassword = async (e) => {
        e.preventDefault();


        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user)
        if (!user) return toast.error("You must be logged in.");



        if (newPassword !== confirmPassword) {
            return setMessage("New passwords do not match!");
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(newPassword)) {
            return toast.error(
                "Password must be at least 8 characters long, include a number, an uppercase and lowercase letter."
            );
        }
        try {
            console.log(user.id)
            const res = await fetch(`${API_BASE_URL}/api/user/change-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: user.id,
                    oldPassword,
                    newPassword,
                }),
            });

            const data = await res.json();
            

            if (data.message === "Password updated successfully") {
                localStorage.removeItem("user");
                toast.success("Password updated. Please log in again.");
                setTimeout(() => {
                    window.location.href = "/";
                }, 2000);
            }

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white text-black shadow-md p-6 rounded-lg absolute z-100 top-5 ">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <X className="cursor-pointer absolute top-7 right-7 text-black" size={24} onClick={()=>toggle(false)} />
            <form onSubmit={handleChangePassword} className="space-y-4">
                <input
                    type="password"
                    placeholder="Old password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="New password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded cursor-pointer hover:bg-black/80"
                >
                    Update Password
                </button>
            </form>
        </div>
    );
}
