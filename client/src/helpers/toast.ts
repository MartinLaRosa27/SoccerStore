import { toast } from "react-hot-toast";

export const successToast = (message: string) => {
  toast.success(message, {
    style: {
      background: "#333",
      color: "#fff",
      fontWeight: "bold",
      textAlign: "center",
      marginTop: "80px",
    },
  });
};

export const errorToast = (message: string) => {
  toast.error(message.replace("Error: ", ""), {
    style: {
      background: "#333",
      color: "#fff",
      fontWeight: "bold",
      textAlign: "center",
      marginTop: "80px",
    },
  });
};
