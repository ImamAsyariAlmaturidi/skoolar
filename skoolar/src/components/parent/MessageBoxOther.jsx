export default function MessageBoxOther({ text }) {
    return (
        <>
            <div className="col-start-1 col-end-8 p-3 rounded-lg">
                <div className="flex flex-row">
                    <div className="flex items-center justify-center text-white h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        A
                    </div>
                    <div >
                        <p className="ml-3 text-sm mb-2">Fathan</p>
                        <div className="relative ml-3 text-sm bg-neutral-200 py-2 px-4 rounded-lg rounded-tl-none text-neutral-800">{text}</div>
                    </div>
                </div>
            </div>
        </>
    )
}