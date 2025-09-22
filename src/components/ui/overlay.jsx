export default function Overlay({close}) {
    return (
        <>
        {isOpen && <div className="w-full h-full bg-black/50 fixed" onClick={closeModal}></div>}
        </>
    )
}