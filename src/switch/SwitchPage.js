import { Title } from "../common/Title";
import { Switch } from "./Switch";

export const SwitchPage = () => {
  return (
    <>
      <Title>shape</Title>
      <Switch />
      &nbsp;
      <Switch shape="round" />
      <Title>checked</Title>
      <Switch checked={true} />
      <Title>disabled</Title>
      <Switch disabled={true} />
    </>
  );
};
