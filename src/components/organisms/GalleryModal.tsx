import { Dispatch, SetStateAction, FC, useState, useEffect } from "react";
import { Modal } from "@components";
import { menuAnimation, rulebreakers } from "@constants";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  imageId: number;
  setImageId: Dispatch<SetStateAction<number>>;
}
const GalleryModal: FC<Props> = (props: Props) => {
  const { imageId, setImageId } = props;

  const [id, setId] = useState<number>(imageId);

  useEffect(() => {
    setImageId(id);
  }, [id, setImageId]);

  return (
    <Modal
      show={id !== -1}
      onClick={() => {
        setId(-1);
      }}
    >
      <></>
    </Modal>
  );
};

export default GalleryModal;
