/**
 * @param {{
 *  text?: string,
 *  color?: string,
 *  bgColor?: string,
 *  borderColor?: string
 * }} props
 */

// type InfoBadgeProps = {
//     text?: String,
//     color?: String,
//     bgColor?: String,
//     borderColor?: String,
// }

export default function InfoBadge({
  text = "",
  color = "#6CE8F9",
  bgColor = "#021D21",
  borderColor = "#096D7C",
}) {
  return (
    <div
      className="w-fit h-auto flex flex-row gap-x-2 border-[1px] px-5 py-1.5 rounded-full"
      style={{ borderColor: borderColor, backgroundColor: bgColor }}
    >
      <div className="w-auto h-auto flex justify-center items-center">
        <div className="relative w-3.5 h-3.5">
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-75"
            style={{ backgroundColor: color }}
          />
          <div
            className="relative w-3.5 h-3.5 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
      <div className="w-fit h-full flex justify-center items-center">
        <p className="font-[400] text-[14px]" style={{ color: color }}>
          {text}
        </p>
      </div>
    </div>
  );
}
