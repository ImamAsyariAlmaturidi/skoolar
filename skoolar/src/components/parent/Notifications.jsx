export default function PrentNotification({ el, key }) {
  console.log(el);
  return (
    <>
      <div className="flex justify-start items-start gap-3 w-full h-[5rem] border-neutral-200 border-b-[0.3px]">
        <section className="h-full flex items-start py-2">
          <section className="w-4 h-4 rounded-full bg-blue-400"></section>
        </section>
        <section className="flex-1 relative justify-center">
          <span className="text-black text-[15px] font-medium">{el.title}</span>
          <span className="text-[#006bf8] text-[12px] absolute right-0 top-0">
            17.30
          </span>
          <p className="text-neutral-600 text-[12px] line-clamp-2 mt-1 leading-normal">
            {el.content}
          </p>
        </section>
      </div>
    </>
  );
}
