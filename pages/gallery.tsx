import type { NextPage } from "next";
import Layout from "../components/Layout";
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../consts/photos";

const GalleryPage: NextPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback(
    (event: any, { photo, index }: { photo: any; index: number }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    },
    []
  );

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Layout>
      <Gallery
        photos={photos}
        direction="row"
        targetRowHeight={500}
        onClick={openLightbox}
      />
      {/* @ts-ignore*/}
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                source: x.src,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Layout>
  );
};

export default GalleryPage;
