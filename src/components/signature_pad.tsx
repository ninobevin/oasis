"use client";

import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "@/components/ui/button";

export default function FullScreenSignature({ onSave }: { onSave: (dataURL: string) => void }) {
  const sigCanvas = useRef<SignatureCanvas>(null);
  const [show, setShow] = useState(false);

  const clear = () => sigCanvas.current?.clear();

  const save = () => {
    if (sigCanvas.current?.isEmpty()) {
      alert("Please provide a signature first.");
      return;
    }
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    onSave(dataURL);
    setShow(false);
  };

  return (
    <div>
      {!show && (
        <Button onClick={() => setShow(true)}>Sign Here</Button>
      )}

      {show && (
        <div className="fixed inset-0 bg-gray-100 z-50 flex flex-col">
          <div className="flex-1 flex justify-center items-center">
            <SignatureCanvas
              ref={sigCanvas}
              penColor="black"
              canvasProps={{
                width: window.innerWidth,
                height: window.innerHeight - 80, // leave space for buttons
                className: "bg-white border",
              }}
            />
          </div>
          <div className="flex justify-center gap-4 p-4 bg-gray-200">
            <Button variant="destructive" onClick={clear}>Clear</Button>
            <Button onClick={save}>Save</Button>
            <Button variant="outline" onClick={() => setShow(false)}>Cancel</Button>
          </div>
        </div>
      )}
    </div>
  );
}
