"use client";
import {Alert, AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Bounce, toast, ToastContainer } from "react-toastify";

const ManageDelete = ({facility}) => {
    const router = useRouter();
    const handleDelete = async() =>{
        const res = await fetch(`http://localhost:5000/facility/${facility._id}`,{
            method: 'Delete',
            headers: {
                'content-type': 'application/json'
            },
        })
        const data = await res.json();
        if(data.deletedCount > 0){
            toast.success('Facility deleted successfully', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            setTimeout(() => {
                router.refresh();
            }, 3000);
        }      
    }
    return (
        <div>
            <AlertDialog>
                <AlertDialog.Trigger>
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-900 text-red-500 transition hover:bg-red-950">
                        <RiDeleteBin6Line size={17} />
                    </button>
                </AlertDialog.Trigger>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100 bg-[#0a151f] text-white">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="text-white">Delete project permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p className="text-[#eff6fbde]">
                                    This will permanently delete <strong>{facility.name}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button onClick={handleDelete} slot="close" variant="danger">
                                    Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default ManageDelete