export default function DashboardCard({ label, value, icon }) {
    return (
        <div className="flex flex-col gap-2 items-center justify-start p-6 bg-white/40 rounded-lg shadow-xl border border-pink-200">
            <div className="flex items-center justify-center">
                <span className="rounded-lg text-2xl p-3">
                    {icon}
                </span>
                <p className="text-sm text-gray-500">
                    {label}
                </p>
            </div>
            <span className="text-pink-600">
                {value}
            </span>

        </div>
    )
}