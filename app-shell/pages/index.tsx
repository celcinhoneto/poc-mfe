import Index from "@appshel/src/screens";
import { Button } from "@celconeto/mfe";
import Router from "next/router";

export default function Home() {
  return (
    <Index>
      <Button onClick={() => Router.push("http://localhost:3001")}>
        MFE 1
      </Button>
    </Index>
  );
}
