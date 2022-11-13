import config from "../site.config.js";

export default function Head() {
  return (
    <>
      <title>{config.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
