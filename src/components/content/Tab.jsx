import { useState } from "react";
import Document from "./Document";
import Video from "./Video";

export default function Tab() {
  const [content, setContent] = useState("video");

  const handleContentClick = (content) => {
    setContent(content);
  };

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          <li className={content === 'video' ? 'is-active' : ''} onClick={() => handleContentClick("video")}>
            <a>
              <span className="icon is-small">
                <i className="fas fa-film" aria-hidden="true"></i>
              </span>
              <span>Videos</span>
            </a>
          </li>
          <li className={content !== 'video' ? 'is-active' : ''} onClick={() => handleContentClick("document")}>
            <a>
              <span className="icon is-small">
                <i claclassNamess="far fa-file-alt" aria-hidden="true"></i>
              </span>
              <span>Documents</span>
            </a>
          </li>
        </ul>
      </div>

      {content === "video" ? <Video embedId="rokGy0huYEA" /> : <Document />}
    </>
  );
}
