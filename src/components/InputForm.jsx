export default function InputForm({
  label,
  placeholder,
  value,
  onChange,
  name,
  type = "text",
  as = "input",
}) {
  return (
    <div className="w-full h-auto flex flex-col gap-y-3">
      <label
        htmlFor={name}
        className="text-xs font-medium text-[#FFFFFF] uppercase tracking-wide"
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={7}
          className="w-full bg-[#FFFFFF] border-[1px] border-[#D4D4D4] rounded-md px-3 py-2 text-[#737373] text-sm placeholder-[#737373]"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-[#FFFFFF] border-[1px] border-[#D4D4D4] rounded-md px-3 py-2 text-[#737373] text-sm placeholder-[#737373]"
        />
      )}
    </div>
  );
}
