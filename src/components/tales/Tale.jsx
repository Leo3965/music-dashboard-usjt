export default function Tale({ title, children,  className }) {
  return (
    <div className={"tile is-child box " + className}>
      <p className="title">{title}</p>
      <p>{children}</p>
    </div>
  );
}
