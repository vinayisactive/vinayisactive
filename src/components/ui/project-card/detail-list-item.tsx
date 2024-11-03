import React, { FC } from "react";

interface ProjectDetailListItemProps {
    detail : string
}

const DetailListItem: FC<ProjectDetailListItemProps> = ({detail}) => {
  return (
    <li className="text-[13px] mt-2 text-gray-500">
        {detail}
    </li>
  )
}

export default DetailListItem;
