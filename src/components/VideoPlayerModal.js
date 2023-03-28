import { replace, set } from "lodash";
import React, { useState } from "react";
import Modal from "react-modal";
import "react-bootstrap";

Modal.setAppElement("#root");
const VideoPlayerModal = ({ url, rePlay }) => {
  let dummy = "https://www.youtube.com/embed/";
  let id = url.slice(32);
  let link = dummy.concat(id);

  const time = new Date();
  // const p = { videoName, time };
  // AddEntry(p, past, setPast);

  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className="Temp">
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <iframe
          width="1410"
          height="600"
          src={link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <button
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
