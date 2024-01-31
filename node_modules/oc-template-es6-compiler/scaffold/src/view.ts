import logo from "./img/logo.png";
import styles from "./css/styles.css";

export default (props: { name: string }) => {
  console.log("PR::", props);
  return `<div class=${styles.awesome}>
    Hello ${props.name}!
    <img src="${logo}" />
  </div>`;
};
