import styles from "./styles.jsx";
let style = {
  color: styles.colors.extra2,
};

const render = ({ output }) => {
  let charging = output.charging;
  let percentage = output.percentage;
  if(percentage <= 10 && !charging){
    style = {color: styles.colors.red,}
  };
  return (
    <div>
      <div style={style}>
        <span style={style}>
          {charging ? "⚡ " : " "}
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default render;
