export default function PrentNotification() {
  return (
    <>
      <div className="flex justify-start items- gap-3 w-full h-[5rem] border-neutral-200 border-b-[0.3px]">
        <section className="h-full flex items-start py-2">
          <section className="w-4 h-4 rounded-full bg-blue-400"></section>
        </section>
        <section className="overflow-hidden relative mr-2">
          <span className="text-black text-[15px] font-medium">Finance</span>{" "}
          <span className="text-[#006bf8] text-[12px] absolute right-3">
            17.30
          </span>
          <p className="text-neutral-600 text-[12px] line-clamp-2 mt-1 leading-normal">
            Dear Mr. Fathan, we respectfully inform you that the payment is
            overdue by 3 months...
          </p>
        </section>
      </div>
    </>
  );
}
