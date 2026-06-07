'use client'
import {
  Description,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const FormAdd = () => {
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const addFacility = Object.fromEntries(formData.entries());
        const res = await fetch('http://localhost:5000/facility',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addFacility)
        })
        const data = await res.json();

        toast.success('Facility Added', {
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
    return (
        <div>
            <Form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-[#111920]/55 p-8 backdrop-blur-xl">
                <h2 className="text-2xl font-semibold text-white">
                    Basic details
                </h2>
                <p className="mt-1 text-sm text-[#8E9AA4]">
                    Tell players what makes your venue special.
                </p>
                <div className="mt-8 space-y-6">
                    <TextField isRequired  name="name">
                    <Label className="text-[#EFF6FB] mb-2">
                        Facility name
                    </Label>
                    <Input
                        placeholder="Apex Tennis Arena"
                        className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"
                    />
                    </TextField>
                    <div className="grid gap-6 md:grid-cols-2">
                    <TextField isRequired  name="sport">
                        <Label className="text-[#EFF6FB] mb-2">
                        Sport type
                        </Label>
                        <Input
                        placeholder="Football"
                        className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"
                        />
                    </TextField>
                    <TextField isRequired  name="location">
                        <Label className="text-[#EFF6FB] mb-2">
                        Location
                        </Label>
                        <Input
                        placeholder="Muradpur, Chittagong"
                        className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"
                        />
                    </TextField>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                    <TextField isRequired  name="price">
                        <Label className="text-[#EFF6FB] mb-2">
                        Price per hour (BDT)
                        </Label>
                        <Input type="number" placeholder="৳2000" className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"/>
                    </TextField>
                    <TextField isRequired  name="capacity">
                        <Label className="text-[#EFF6FB] mb-2">
                        Capacity
                        </Label>
                        <Input type="number" placeholder="20" className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"/>
                    </TextField>
                    </div>
                    <TextField isRequired  name="image">
                    <Label className="text-[#EFF6FB] mb-2">
                        Image URL
                    </Label>
                    <Input
                        type="url"
                        placeholder="https://example.com/image.jpg"
                        className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"
                    />
                    </TextField>
                    <TextField isRequired  name="description">
                    <Label className="text-[#EFF6FB] mb-2">
                        Description
                    </Label>
                    <TextArea
                        rows={5}
                        placeholder="Describe the facility, surface, amenities..."
                        className="w-full bg-[#0F171D] text-[#EFF6FB] border-2 border-[#eff6fb42]"
                    />
                    <Description>
                        Maximum 500 characters
                    </Description>
                    </TextField>
                    <div className="mt-8 flex justify-end gap-4">
                        <button className="rounded-xl bg-green-500 px-6 py-3 font-medium text-black transition hover:bg-green-400">
                            Publish facility
                        </button>
                    </div>
                </div>
            </Form>  
            <ToastContainer></ToastContainer> 
        </div>
    )
}

export default FormAdd