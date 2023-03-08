import React from "react";
import { Badge } from "reactstrap";
import './TagList.css'

const TagList = ({ tags }) => {
  return (
    <>
      {tags.map((tag) => (
        <Badge className="mr-1" color="primary" key={tag}>
          {tag}
        </Badge>
      ))}
    </>
  );
};

export default TagList;
