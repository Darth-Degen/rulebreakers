import { createContext, Dispatch, SetStateAction } from "react";

// interface ViewContextType {
//   showView: boolean;
//   setShowView: Dispatch<SetStateAction<boolean>>; //(show: boolean) => void, //
// }

// export const ViewContext = createContext<ViewContextType | null>(null);

export const ViewContext = createContext({
  showView: false,
  setShowView: (value: boolean) => {}, //Dispatch<SetStateAction<boolean>>
});

// export const ViewContext = createContext<boolean>(false);
