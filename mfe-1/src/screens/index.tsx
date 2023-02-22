import { Button } from "@celconeto/mfe";
import dynamic from "next/dynamic";
import Router from "next/router";

const BaseLayout = dynamic(() => import("main/base-layout"), {
  ssr: false,
});
const Screen = () => (
  <BaseLayout>
    <Button onClick={() => Router.push("http://localhost:3000")}>
      APP SHELL
    </Button>
  </BaseLayout>
);

export default Screen;
