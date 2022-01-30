/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/images/logo.svg";
import logoDark from "assets/images/logo-dark.svg";

export default function Logo({ isSticky, light, dark, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <div sx={styles.logo}>NFTLytics</div>
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    color: "white",
    fontSize: "x-large",
    fontWeight: 700,
    img: {
      maxWidth: [128, null, "100%"],
    },
  },
};
