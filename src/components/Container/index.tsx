import style from "./style.module.scss";
function Container(props: any) {
  return <div className={style.container}>{props.children}</div>;
}
export default Container;
