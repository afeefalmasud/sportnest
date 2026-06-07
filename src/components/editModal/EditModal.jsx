"use client";
import {Button, Description, Input, Label, Modal, Surface, TextArea, TextField} from "@heroui/react";
import { MdEdit, MdModeEdit } from "react-icons/md";
import { Bounce, toast, ToastContainer } from "react-toastify";

const EditModal = ({facility}) => {
    const onSubmit = async(e) => {
        e.preventDefault();
        console.log(e.target);
        const formData = new FormData(e.currentTarget);
        const editFacility = Object.fromEntries(formData.entries());
        const res = await fetch(`http://localhost:5000/facility/${facility._id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editFacility)
        })
        
        const data = await res.json();
        
        if(data.modifiedCount > 0){
            toast.success('Facility Edited', {
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
        }
    }
    return (
        <div>
            <Modal>
                <Modal.Trigger>
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-300 transition hover:bg-slate-800">
                        <MdEdit size={18} />
                    </button>
                </Modal.Trigger>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md bg-[#0a151f]">
                        <Modal.Header>
                        <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                            <MdModeEdit size={15}/>
                        </Modal.Icon>
                        <Modal.Heading className="text-[#EFF6FB]">Edit Facility</Modal.Heading>
                        <p className="mt-1.5 text-sm leading-5 text-[#eff6fbde]">
                            Update the facility information below. Make sure all details are accurate before saving your changes.
                        </p>
                        </Modal.Header>
                        <form onSubmit={onSubmit}>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <div className="flex flex-col gap-4 bg-[#0a151f]">
                                        <div className="mt-8 space-y-6">
                                            <TextField defaultValue={facility.name}> 
                                                <Label className="text-[#EFF6FB] mb-2">
                                                    Facility name
                                                </Label>
                                                <Input
                                                    placeholder="Apex Tennis Arena" name="name"
                                                    className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"
                                                />
                                            </TextField>
                                            <div className="grid gap-6 md:grid-cols-2">
                                                <TextField defaultValue={facility.sport} >
                                                    <Label className="text-[#EFF6FB] mb-2">
                                                    Sport type
                                                    </Label>
                                                    <Input
                                                    placeholder="Football" name="sport"
                                                    className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"
                                                    />
                                                </TextField>
                                                <TextField defaultValue={facility.location}>
                                                    <Label className="text-[#EFF6FB] mb-2">
                                                    Location
                                                    </Label>
                                                    <Input name="location"
                                                    placeholder="Muradpur, Chittagong"
                                                    className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"
                                                    />
                                                </TextField>
                                            </div>
                                            <div className="grid gap-6 md:grid-cols-2">
                                                <TextField defaultValue={facility.price}>
                                                    <Label className="text-[#EFF6FB] mb-2">
                                                    Price per hour (BDT)
                                                    </Label>
                                                    <Input  name="price" type="number" placeholder="৳2000" className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"/>
                                                </TextField>
                                                <TextField defaultValue={facility.capacity}>
                                                    <Label className="text-[#EFF6FB] mb-2">
                                                    Capacity
                                                    </Label>
                                                    <Input name="capacity" type="number" placeholder="20" className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"/>
                                                </TextField>
                                            </div>
                                            <TextField defaultValue={facility.image}>
                                                <Label className="text-[#EFF6FB] mb-2">
                                                    Image URL
                                                </Label>
                                                <Input
                                                    type="url"  name="image"
                                                    placeholder="https://example.com/image.jpg"
                                                    className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"
                                                />
                                            </TextField>
                                            <TextField defaultValue={facility.description}  >
                                                <Label className="text-[#EFF6FB] mb-2">
                                                    Description
                                                </Label>
                                                <TextArea
                                                    rows={5} name="description"
                                                    placeholder="Describe the facility, surface, amenities..."
                                                    className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"
                                                />
                                                <Description>
                                                    Maximum 500 characters
                                                </Description>
                                            </TextField>
                                        </div>
                                    </div>
                                </Surface>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button slot="close" variant="secondary">
                                    Cancel
                                </Button>
                                <Button type="submit" slot="close">Save Changes</Button>
                            </Modal.Footer>
                        </form>
                    </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
            <ToastContainer></ToastContainer> 
        </div>
    )
}

export default EditModal