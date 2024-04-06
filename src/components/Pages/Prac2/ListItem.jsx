export default function ListItem(props) {
  return (
    <p>
      <strong>{props.title}: </strong>
      {props.desc}
    </p>
  )
}
