import React from "react";
import tableData from "../utils/data.js";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const TableBio = () => {
  return (
    <table className="w-full text-left text-lg">
      <tbody>
        {tableData.map((row, index) => (
          <motion.tr
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            key={index}
          >
            <th className="p-1 md:p-4">{row.label}</th>
            <td className="p-1 md:p-4 font-thin">: {row.value}</td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableBio;
