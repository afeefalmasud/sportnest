
const categories = [
  { id: 'tennis', name: 'Tennis', icon: '🎾' },
  { id: 'swimming', name: 'Swimming', icon: '🏊' },
  { id: 'football', name: 'Football', icon: '⚽' },
  { id: 'basketball', name: 'Basketball', icon: '🏀' },
  { id: 'badminton', name: 'Badminton', icon: '🏸' },
  { id: 'cricket', name: 'Cricket', icon: '🏏' },
];

export default function Categories() {
  return (
    <section className="bg-[#040C13] text-white py-16 px-4">
        <div className='container mx-auto flex flex-col justify-center items-center'>
            <div className="text-center mb-16">
                <p className="text-green-400 text-sm font-medium mb-3">
                    Categories
                </p>
                <h2 className="text-white text-4xl font-bold mb-4">
                    Popular sports categories
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                   From the courts to the pool — explore venues by sport.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl w-full px-2">
                {categories.map((category) => (
                <div
                    key={category.id}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-200 cursor-pointer hover:scale-105"
                    style={{
                    backgroundColor: 'rgba(17, 25, 32, 0.55)',   
                    border: '1px solid rgba(239, 246, 251, 0.08)',
                    }}
                >
                    <div className="text-3xl mb-4 select-none filter drop-shadow-sm">
                        {category.icon}
                    </div>
                    <h3 className="text-[#EFF6FB] font-medium text-sm text-center mb-1">
                        {category.name}
                    </h3>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
}