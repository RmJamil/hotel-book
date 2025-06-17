import React, { useEffect, useRef } from 'react';

const RoomConfirm = ({ con, setCon, booked, setBooked, load, setLoad, unavl, setUnavl }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (load && modalRef.current) {
      modalRef.current.showModal();
    }
  }, [load]);

  const handleConfirm = () => {
    if (unavl.length !== 0) {
      window.alert('Sorry, this room is currently unavailable');
      setCon(false);
      return;
    }
    setCon(true);
    // Add your fetch logic here
  };

  return (
    <div className="text-6xl">
      <dialog
        ref={modalRef}
        className="modal modal-bottom sm:modal-middle text-black"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              <button onClick={handleConfirm} className="btn">Confirm</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default RoomConfirm;
