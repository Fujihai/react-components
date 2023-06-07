import { Flex } from "../common/Flex";
import { Title } from "../common/Title";
import { Button } from "./Button";

export function ButtonPage() {
  return (
    <Flex>
      <Title>type</Title>
      <Button>button</Button>
      <Button type="primary">button</Button>
      <Button type="ghost">ghost</Button>
      <Button type="dashed">dashed</Button>
      <Button type="link">link</Button>
      <Button type="text">text</Button>

      <Title>size</Title>
      <Button size="small">small</Button>
      <Button size="default">default</Button>
      <Button size="large">large</Button>

      <Title>loading</Title>
      <Button loading>加载中...</Button>

      <Title>style</Title>
      <Button style={{ backgroundColor: "slateblue", color: "white" }}>
        button
      </Button>

      <Title>block</Title>
      <Button block>block</Button>

      <Title>shape</Title>
      <Button shape="round" type="primary">
        round
      </Button>
      <Button shape="circle">circle</Button>
    </Flex>
  );
}
