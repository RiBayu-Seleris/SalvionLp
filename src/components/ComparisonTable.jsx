const ComparisonTable = ({
  capabilities = [],
  tableData = [],
  columns = [],
  columnWidths = [],
}) => {
  return (
    <table className="w-full table-fixed">
      <thead className="bg-[#021D21]/70 border-[1px] border-[#54B2C1]">
        <tr>
          {columns.map((col, i) => (
            <th
              key={i}
              className={`text-start px-10 py-8 ${columnWidths[i] ?? ""}`}
            >
              <p className="text-[#4FE4F8]">{col}</p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {capabilities.map((capability, i) => {
          const row = tableData.find((d) => d.capabilityId === capability.id);
          return (
            <tr
              key={capability.id}
              className={`bg-[#1B1D23]/70 ${
                i !== capabilities.length - 1 ? "border-b border-[#979797]" : ""
              }`}
            >
              <td className="text-start px-10 py-5">
                <p className="text-[#FFFFFF]">{capability.label}</p>
              </td>
              {row
                ? columns.slice(1).map((_, j) => (
                    <td key={j} className="text-start px-10 py-8">
                      <p
                        className={
                          j === columns.slice(1).length - 1
                            ? "text-[#4FE4F8]"
                            : "text-[#FFFFFF]"
                        }
                      >
                        {row.cells[j] ?? "-"}
                      </p>
                    </td>
                  ))
                : columns.slice(1).map((_, j) => (
                    <td key={j} className="text-start px-10 py-5">
                      <p className="text-[#FFFFFF]">-</p>
                    </td>
                  ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
