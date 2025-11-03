export default function Announcements({ icon, message, time }) {
    return (
    <div className="flex items-start justify-between bg-black gap-1.5 p-4 border-l-4 border-white">
        <p className="w-6">
            {icon}
        </p>
        <p className="flex-1 truncate">{message}</p>
        <p className="text-sm whitespace-nowrap text-white">
            {time}
        </p>
    </div>
    )
}