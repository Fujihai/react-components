import { useState } from "react";

export const TreeNode = ({ node }) => {
  const [showChildren, setShowChildren] = useState(false);
  const { children, label } = node;

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  return (
    <>
      <div
        onClick={handleClick}
        style={{ marginBottom: "10px", boxSizing: "border-box" }}
      >
        {children?.length > 0 ? (showChildren ? "- " : "+ ") : ""}
        <span>{label}</span>
      </div>
      <div
        style={{
          paddingLeft: "16px",
          boxSizing: "border-box",
          borderLeft: "1px solid black",
        }}
      >
        {showChildren && children && <Tree treeData={children} />}
      </div>
    </>
  );
};

export const Tree = ({ treeData }) => {
  return (
    <div className="tree">
      {treeData.map((node) => (
        <TreeNode node={node} key={node.key} />
      ))}
    </div>
  );
};
