import { Title } from "../common/Title";
import { Tree } from "./Tree";
import { treeData } from "./TreeData";

export const TreePage = () => {
  return (
    <>
      <Title>Tree</Title>
      <Tree treeData={treeData} />
    </>
  );
};
