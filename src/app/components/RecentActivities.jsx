export default function RecentActivities({ icon, message, time }) {

    return (
        <div className="flex items-start justify-between gap-1.5 p-4 border-b-1 border-white">
            <p className="w-6">
                {icon}
            </p>
            <p className="flex-1">{message}</p>
            <p className="text-sm whitespace-nowrap text-white">
                {time}
            </p>
        </div>
    )
}