export default function Video({ embedId }) {
  return (
    <>
      {embedId && (
        <div className="sticky">
          <iframe src={`https://www.youtube.com/embed/${embedId}`}></iframe>
        </div>
      )}
    </>
  );
}
