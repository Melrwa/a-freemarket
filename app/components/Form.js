"use client";
import { useState } from 'react';
// import { useRouter } from 'next/router';

const AddBusiness = () => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [bg, setbg] = useState('');
  const [description, setDescription] = useState('');
  const [services, setServices] = useState([])
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [contact, setContact] = useState('');
  const [rating, setRating] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRating([, 0])
    const business = {
      name,
      logo,
      description,
      location,
      category,
      contact,
      services,
      rating
    };
    console.log(business)
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('http://localhost:3001/businesses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(business),
      });

      if (res.ok) {
        alert('Business added successfully!');
        // router.push('/search');
      } else {
        throw new Error('Failed to add business');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    setName("");
    setLogo("");
    setDescription("");
    setLocation("");
    setCategory("");
    setContact("");
    setServices([])
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4 mt-[64px]">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">Add Your Business</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div>
            <label htmlFor="name" className="block text-lg text-gray-800">Business Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 bg-white text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="logo" className="block text-lg text-gray-800">Logo URL</label>
            <input
              type="url"
              id="logo"
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
              required
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 bg-white text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="bg" className="block text-lg text-gray-800">Background URL</label>
            <input
              type="url"
              id="bg"
              value={bg}
              onChange={(e) => setbg(e.target.value)}
              required
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 bg-white text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-lg text-gray-800">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 bg-white text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="services" className="block text-lg text-gray-800">Services</label>
            <input
              type="text"
              id="services"
              value={services}
              onChange={(e) => {
                const input = e.target.value;
                const wordArray = input.split(',').map(word => word.trim()); // Trim to remove extra spaces
                setServices(wordArray);
              }}
              required
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 bg-white text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-lg text-gray-800">Location (e.g., Nairobi, Westlands)</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 bg-white text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-lg text-gray-800">Category (e.g., Food, Retail, Apparel)</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 bg-white text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-lg text-gray-800">Contact Information</label>
            <input
              type="tel"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 bg-white text-gray-800"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 py-3 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              {loading ? 'Adding Business...' : 'Add Business'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBusiness;
