export default function CardImgLeft({
  image,
  tag,
  time,
  title,
  description,
  author_logo,
  author,
  category,
  created_at,
}) {
  return (
    <div className="w-full h-full cursor-pointer">
      {/* Gradient border wrapper */}
      <div className="group w-full h-full p-[1px] rounded-xl bg-transparent hover:bg-[conic-gradient(from_0deg_at_50%_50%,#82DCE2_0deg,#82DCE2_11.92deg,#0D6670_90.84deg,#0D6670_179.32deg,#0D6670_269.98deg,#82DCE2_348.36deg,#82DCE2_360deg)] hover:shadow-[1px_0px_14.2px_5px_rgba(130,220,226,0.25)] hover:scale-[1.02] transition-all duration-300 ease-in-out">
        {/* Card body */}
        <div className="relative w-full h-full flex flex-col group-hover:bg-gradient-to-b group-hover:from-[#0D2224] group-hover:to-[#07383E] rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
          {/* Thumbnail — tidak diubah */}
          <div className="absolute z-10 w-full group-hover:scale-[1.1] transition-all duration-300 ease-in-out">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content — tidak diubah */}
          <div className="relative z-20 mt-[58%] flex flex-col flex-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D2224] to-[#07383E]" />

            {/* tambah flex flex-col flex-1 */}
            <div className="relative z-10 flex flex-col flex-1 gap-y-4 px-4 py-6 bg-[#0B0F1A]/70">
              {/* Tag & Read time */}
              <div className="flex flex-col gap-y-5">
                <div className="flex flex-row gap-x-3 items-center">
                  <span className="px-3 py-1 bg-[#021D21] border border-[#096D7C] rounded-lg text-[12px] text-[#4FE4F8]">
                    {tag}
                  </span>
                  <span className="text-[13px] text-[#9CA3AF]">{time}</span>
                </div>

                {/* Title & Description — min-h dihapus, pakai flex-1 */}
                <div className="flex flex-col gap-y-3.5 flex-1">
                  <p className="text-[18px] text-white font-semibold line-clamp-2">
                    {title}
                  </p>
                  <p className="text-[16px] text-[#6B7280] line-clamp-2">
                    {description}
                  </p>
                </div>
              </div>

              {/* Spacer — mendorong divider & author ke bawah */}
              <div className="flex-1" />

              {/* Divider — tidak diubah */}
              <div className="w-full h-[1px] bg-gradient-to-r from-[#0B0F1A]/0 via-[#23DDF6] to-[#0B0F1A]/0" />

              {/* Author — tidak diubah */}
              <div className="flex flex-row gap-x-3 items-center justify-between">
                <div className="w-full h-auto flex justify-start items-center gap-x-3">
                  <img
                    src={author_logo}
                    alt={author}
                    className="w-6 h-6 rounded-full shrink-0 object-cover"
                  />
                  <div className="flex flex-col gap-y-0.5">
                    <span className="text-[14px] text-[#495367]">{author}</span>
                    <span className="text-[12px] text-[#96A2BE]">
                      {created_at}
                    </span>
                  </div>
                </div>
                <div className="w-full h-auto flex justify-end items-end">
                  <p className="text-[#495367] text-[14px]">{category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
