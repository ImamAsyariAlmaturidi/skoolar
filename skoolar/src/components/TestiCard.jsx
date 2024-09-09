export default function TestiCard({ name, relation, message, image }) {

    return (
        <>
            <div className="ml-32">
                <div className="bg-white h-72 w-96 rounded-xl pt-5 flex flex-col justify-around">
                    <div>
                        <svg
                            className="ml-7"
                            width="25px"
                            height="25px"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#1D4ED8"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M5.29289 1.29291L6.70711 2.70712L3 6.41423V7.00001H7V14H1V5.5858L5.29289 1.29291Z"
                                    fill="#1D4ED8"
                                />{" "}
                                <path
                                    d="M15 7.00001H11V6.41423L14.7071 2.70712L13.2929 1.29291L9 5.5858V14H15V7.00001Z"
                                    fill="#1D4ED8"
                                />{" "}
                            </g>
                        </svg>

                        <p className="p-7">
                            {message}
                        </p>

                    </div>
                    <div className="flex">
                        <img className="rounded-full h-10 w-10 ml-7" src="https://cdn-icons-png.freepik.com/512/10302/10302971.png" alt="" />
                        <div>
                            <p className="font-semibold ml-4 text-neutral-900">{name} </p>
                            <p className=" text-sm ml-4 text-neutral-400">{relation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}