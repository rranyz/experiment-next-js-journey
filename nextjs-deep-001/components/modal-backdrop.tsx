"use client";

import { useRouter } from "next/navigation";

function ModalBackDrop() {
  const route = useRouter();

  return <div className="modal-backdrop" onClick={route.back} />;
}

export default ModalBackDrop;
