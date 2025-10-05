export default function TeamCard({ name, image, bio, role }) {
    return (
        <div className="rounded-md shadow-lg p-8">
            <img src={image} alt={name} className="rounded-full mx-auto w-23 h-23 object-cover aspect-square" />
            <h2 className="text-center  font-semibold mt-2">
                {name}
            </h2>
            <p className="text-center text-sm">
                {role}
            </p>
            <p className="text-center opacity-80">
                {bio}
            </p>
        </div>
    )
}