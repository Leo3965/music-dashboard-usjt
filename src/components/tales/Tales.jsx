import Music from "./Music";
import Tale from "./Tale";
import Wiki from "./Wiki";

export default function Tales() {
  return (
    <div className="tales">
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <Wiki />
          <Music/>
        </div>
        <div className="tile is-parent">
          <Tale title="3">
            
          </Tale>
        </div>
      </div>
    </div>
  );
}
