export default async function ChatBox({ data = "Alfin" }) {
  return (
    <>
      <div className="pl-8 pt-2 pb-2 flex hover:bg-neutral-200 cursor-pointer">
        <div className="rounded-full bg-orange-200 border border-neutral-200 w-14 h-11 flex items-center justify-center">
          <img
            className="h-7 "
            src="https://www.iconpacks.net/icons/2/free-apple-icon-2327-thumb.png"
            alt=""
          />
        </div>
        <div className="w-full mr-4">
          <div className="flex justify-between w-full">
            <p className="ml-4 font-semibold text-[0.9rem] text-black">
              {data?.name}
            </p>
            <p className="text-neutral-500 text-[0.8rem]">05.50</p>
          </div>
          <p className="ml-4  text-[0.8rem] text-neutral-500">
            Ms.Lita: Okay moms
          </p>
        </div>
      </div>
    </>
  );
}
