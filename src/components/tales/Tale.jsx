export default function Tale({ title, children,  className }) {
  return (
    <div className={"tile is-child box " + className}>
      <h2 className="title">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
