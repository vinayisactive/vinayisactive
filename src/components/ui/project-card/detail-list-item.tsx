import React, { FC } from "react";

interface ProjectDetailListItemProps {
    detail : string
}

const DetailListItem: FC<ProjectDetailListItemProps> = ({detail}) => {
  return (
    <li className="text-[13px] mt-2 font-semibold text-gray-500">
      <span className="pr-2 pb-2">•</span>
      {detail}
    </li>
  )
}

export default DetailListItem;
