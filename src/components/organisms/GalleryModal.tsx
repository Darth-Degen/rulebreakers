import { Dispatch, SetStateAction, FC, useState, useEffect } from "react";
import { Modal } from "@components";

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
      <div className="bg-main bg-cover rounded-3xl border-[3px] border-custom-white-2 w-screen h-screen lg:h-[60vh] lg:w-[100vh]">
        Hello There {id}
      </div>
    </Modal>
  );
};

export default GalleryModal;
