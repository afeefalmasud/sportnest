"use client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Description, Input, Label, Modal, Surface, TextArea, TextField} from "@heroui/react";
import { MdEdit, MdModeEdit } from "react-icons/md";

const EditModal = ({facility}) => {
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
                    <Modal.Body className="p-6">
                    <Surface variant="default">
                        <form className="flex flex-col gap-4 bg-[#0a151f]">
                            <div className="mt-8 space-y-6">
                                <TextField name="name">
                                <Label className="text-[#EFF6FB] mb-2">
                                    Facility name
                                </Label>
                                <Input
                                    placeholder={facility.name}
                                    className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"
                                />
                                </TextField>
                                <div className="grid gap-6 md:grid-cols-2">
                                <TextField name="sport">
                                    <Label className="text-[#EFF6FB] mb-2">
                                    Sport type
                                    </Label>
                                    <Input
                                    placeholder={facility.sport}
                                    className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"
                                    />
                                </TextField>
                                <TextField name="location">
                                    <Label className="text-[#EFF6FB] mb-2">
                                    Location
                                    </Label>
                                    <Input
                                    placeholder={facility.location}
                                    className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"
                                    />
                                </TextField>
                                </div>
                                <div className="grid gap-6 md:grid-cols-2">
                                <TextField name="price">
                                    <Label className="text-[#EFF6FB] mb-2">
                                    Price per hour (BDT)
                                    </Label>
                                    <Input type="number" placeholder={facility.price}className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"/>
                                </TextField>
                                <TextField name="capacity">
                                    <Label className="text-[#EFF6FB] mb-2">
                                    Capacity
                                    </Label>
                                    <Input type="number" placeholder={facility.capacity} className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"/>
                                </TextField>
                                </div>
                                <TextField name="image">
                                <Label className="text-[#EFF6FB] mb-2">
                                    Image URL
                                </Label>
                                <Input
                                    type="url"
                                    placeholder={facility.image}
                                    className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"
                                />
                                </TextField>
                                <TextField name="description">
                                <Label className="text-[#EFF6FB] mb-2">
                                    Description
                                </Label>
                                <TextArea
                                    rows={5}
                                    
                                    placeholder={facility.description}
                                    className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"
                                />
                                <Description>
                                    Maximum 500 characters
                                </Description>
                                </TextField>
                            </div>
                        </form>
                    </Surface>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button slot="close">Save Changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    </div>
  )
}

export default EditModal