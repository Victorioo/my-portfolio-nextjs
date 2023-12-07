import React from "react";

function Chip({ text }: { text: string }) {
  // switch (text) {
  //   case "Next.js":
  //     return (
  //       <div className="px-2 rounded-full bg-white text-black">
  //         {text}
  //       </div>
  //     );
  //   case "TypeScript":
  //     return (
  //       <div className="px-2 rounded-full bg-blue-700">
  //         {text}
  //       </div>
  //     );
  //   case "HTML":
  //     return (
  //       <div className="px-2 rounded-full bg-orange-400">
  //         {text}
  //       </div>
  //     );
  //   case "CSS":
  //     return (
  //       <div className="px-2 rounded-full bg-blue-700 text-black">
  //         {text}
  //       </div>
  //     );
  //   case "TailwindCSS":
  //     return (
  //       <div className="px-2 rounded-full bg-blue-500 text-white">
  //         {text}
  //       </div>
  //     );
  //   case "JavaScript":
  //     return (
  //       <div className="px-2 rounded-full bg-yellow-400 text-black">
  //         {text}
  //       </div>
  //     );
  //   case "CSS":
  //     return (
  //       <div className="px-2 rounded-full bg-blue-700 text-black">
  //         {text}
  //       </div>
  //     );
  //   default:
  //     break;
  // }
  return <div className="px-2 rounded-full bg-gray-400 text-black">{text}</div>;
}

export default Chip;
