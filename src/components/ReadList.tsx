interface Props {
  view: boolean;
}
export default function ReadList(props: Props) {
  return <section className={`${props.view ? "block" : "hidden"}`}>{}</section>;
}
