export default function MessageBoxMe({ text }) {

    return (
        <div className="col-start-6 col-end-13 p-3 rounded-lg">
            <div className="flex items-center justify-start flex-row-reverse">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 text-white flex-shrink-0">
                    A
                </div>
                <div className="flex flex-col mr-3">
                    <p className="mr-3 text-sm mb-2 text-end">Me</p>
                    <div className="relative ml-3 text-sm bg-blue-600 py-2 px-4 rounded-lg rounded-tr-none text-white">{text}</div>
                </div>
            </div>
        </div>
    )
}