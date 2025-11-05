"use client"

import Loader from "@/components/ui/loader";
import ChangePassword from "@/components/ui/passwordUpdateForm";
import { API_BASE_URL } from "@/config";
import { Edit, LogOut } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const [user, setUser] = useState(null)
    const [userData, setUserData] = useState(null)
    const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false)
    console.log(user)

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"))
        if (storedUser) setUser(storedUser)
    }, [])

    useEffect(() => {
        if (!user?.id) return
        const fetchUserInfo = async () => {

            try {
                console.log(user.id)
                const res = await fetch(`${API_BASE_URL}/api/user/${user.id}`)
                const data = await res.json()
                setUserData(data.data)
                console.log(data.data)
            } catch (error) {
                console.error("Failed to fetch user:", error);
            }

        }
        fetchUserInfo()

    }, [user])


    if (!userData) return <div className="bg-black/80 h-screen flex items-center justify-center gap-1">
        <Loader />
        <span className="text-white text-xl">
            Loading your profile...
        </span>
    </div>;

    return (
        <div>
            {openChangePasswordModal && <div className="w-full h-full bg-black/60 fixed" onClick={() => setOpenChangePasswordModal(false)}></div>}
            <div className=" bg-black/80 text-white min-h-screen">
                <div className="flex gap-6 flex-col p-6">
                    <div className="flex flex-col md:flex-row justify-around items-center gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl md:text-start text-center font-semibold text-white mb-2 ">
                                Profile
                            </h1>
                            <div className="bg-white text-gray-600 shadow-md rounded-lg md:min-w-2/3 p-3">
                                <h2 className="text-2xl  font-bold mb-2">{userData.name.charAt(0).toUpperCase() + userData.name.slice(1)}</h2>
                                <p><strong>Email:</strong> {userData.email}</p>
                                <p className="text-sm "><strong>Joined:</strong> {new Date(userData.createdAt).toLocaleDateString()}</p>
                            </div>

                        </div>
                        <div>
                            <h1 className="text-xl md:text-start text-center mb-2 underline ">
                                Settings
                            </h1>
                            <p className="cursor-pointer" >
                                Edit Info <Edit className="inline-block" size={14} />
                            </p>
                            <p className="cursor-pointer" onClick={() => setOpenChangePasswordModal(true)}>
                                Change password
                            </p>
                        </div>

                    </div>

                    <div className="flex flex-col min-w-full gap-2 justify-center items-center ">
                        <h2 className="text-2xl md:text-start text-center underline font-semibold mt-6 mb-3 ">Your Purchases</h2>
                        {userData.purchases.length > 0 ? (
                            <ul className="space-y-2 gap-3 grid grid-cols-3 ">
                                {userData.purchases.map((purchase) => (
                                    <li key={purchase.id} className="border rounded-lg p-3">
                                        <p><strong>Reference ID:</strong> {purchase.reference}</p>
                                        <p><strong>Date:</strong> {new Date(purchase.createdAt).toLocaleDateString()}</p>
                                        <p><strong>Amount:</strong> ₦{purchase.amount}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No purchases yet.</p>
                        )}
                    </div>
                </div>

                {openChangePasswordModal && <div className="flex justify-center items-center">
                    <ChangePassword toggle={setOpenChangePasswordModal} /></div>}
            </div>

        </div>
    )
}