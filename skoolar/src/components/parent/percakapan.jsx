import Link from "next/link";
import ChatBox from "../../components/parent/ChatBox";

export default async function Percakapan({ data }) {
  // console.log(data, "ini data di sini");
  return (
    <>
      <div className="w-full h-[21rem] rounded-3xl ">
        <section className="w-full  h-[15%] text-black text-[17px] font-medium flex items-center justify-between gap-4 px-3">
          <section className="flex items-center gap-3">
            <svg
              width="33px"
              height="33px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#006bf8"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  d="M21.331 10.669v-7.997h-18.659v14.394h7.997v7.997h11.063l4.265 4.264h0.665v-4.264h2.666v-14.394h-7.997zM3.738 16v-12.262h16.527v6.931h-9.596v5.331h-6.931zM28.262 23.997h-2.666v3.422l-3.423-3.422h-10.439v-12.262h16.527v12.262z"
                  fill="currentColor"
                />
              </g>
            </svg>
            <span>Classroom</span>
          </section>
          <Link href={"/dashboard/parent/chat"}>
            <span className="text-[12px] text-[#006bf8] bg-white p-2 px-3 rounded-xl hover:text-white hover:bg-[#006bf8]">
              See All
            </span>
          </Link>
        </section>
        {data?.map((el, index) => (
          <Link href={`/dashboard/parent/chat/${el._id}`} key={index}>
            <ChatBox data={el} />
          </Link>
        ))}
      </div>
    </>
  );
}
