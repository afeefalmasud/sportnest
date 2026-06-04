import FormAdd from "@/components/form/Form";

const AddPage = () => {
  return (
    <div className="min-h-screen bg-[#040C13] px-5 py-30">
      <div className="container mx-auto">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-[#EFF6FB]">
            Add a new facility
          </h1>
          <p className="mt-2 text-[#8E9AA4]">
            List your venue and start receiving bookings within minutes.
          </p>
        </div>
        <FormAdd></FormAdd>
      </div>
    </div>
  );
};

export default AddPage;