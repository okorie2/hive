import { useState } from "react";

export default function UseModalState() {
  const [modalState, setModalState] = useState(false);
  return { modalState, setModalState };
}
