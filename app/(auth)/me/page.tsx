import { Authorize } from "../Authorize";

async function Me() {
  return <main className="container">Me</main>;
}

export default Authorize(Me);
