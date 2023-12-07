import Music from "./Music";
import Wiki from "./Wiki";

export default function Tales() {
  return (
    <div className="tales">
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <Wiki />
        </div>
        <div className="tile  is-vertical is-parent">
          <Music />
        </div>
      </div>
    </div>
  );
}
