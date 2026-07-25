"use client";

import {AlertDialog, Button} from "@heroui/react";

export function BookingDelete({bookingId}) {
    const handleCancel = async() => {
        const res = await fetch(`http://localhost:5000/booking/${bookingId}`,{
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
        const data = res.json();
        window.location.reload();
    }
  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <button className="px-3.5 py-1.5 text-xs font-medium text-red-400 hover:text-white bg-red-500/10 hover:bg-red-600 rounded-lg border border-red-500/20 transition-all duration-150">
        Cancel
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-105 rounded-2xl border border-white/10 bg-[#111920] text-white shadow-2xl">
            <AlertDialog.CloseTrigger className="text-gray-400 hover:text-white" />

            <AlertDialog.Header>
                <AlertDialog.Icon
                status="danger"
                className="bg-red-500/20 text-red-400"
                />
                <AlertDialog.Heading className="text-xl font-bold text-white">
                Cancel Booking?
                </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
                <p className="text-gray-400 leading-7">
                Are you sure you want to cancel this booking? This action cannot be
                undone, and you'll need to make a new booking if you change your mind.
                </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="gap-3">
                <Button
                slot="close"
                variant="bordered"
                className="border-white/15 text-gray-300 hover:bg-white/5"
                >
                Keep Booking
                </Button>

                <Button
                onClick={handleCancel}
                slot="close"
                className="bg-red-600 text-white hover:bg-red-700"
                >
                Cancel Booking
                </Button>
            </AlertDialog.Footer>
            </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}