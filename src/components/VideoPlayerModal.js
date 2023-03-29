import { replace, set } from "lodash";
import React, { useState } from "react";
import Modal from "react-modal";
import "react-bootstrap";

Modal.setAppElement("#root");
const VideoPlayerModal = ({ url, rePlay, videoName }) => {
  const dummy = "https://www.youtube.com/embed/";
  const paramIndex = url.indexOf("&");
  const mobileLinkIndex = url.indexOf("watch?v");

  let id;
  if (mobileLinkIndex === -1) {
    id = url.slice(17);
  } else if (paramIndex === -1) {
    id = url.slice(32);
  } else {
    id = url.slice(32, paramIndex);
  }

  let link = dummy.concat(id);

  const time = new Date();
  // const p = { videoName, time };
  // AddEntry(p, past, setPast);

  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className="Temp">
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <h5>Playing: {videoName}</h5>
        <iframe
          width="1000"
          height="550"
          src={link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <br />
        <button
          style={{
            marginLeft: "450px",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={() => {
            setModalOpen(false);
            rePlay(false);
          }}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default VideoPlayerModal;
