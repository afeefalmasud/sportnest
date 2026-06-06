const detailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/facility/${id}`);
  const facilityDetails = await res.json();

  return (
    <div className="bg-[#040C13] min-h-screen px-5 py-30">
        <div className="container mx-auto">

        </div>
    </div>
  );
};

export default detailsPage;