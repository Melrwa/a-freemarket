import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faDumbbell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div>
      <NavBar />

      <div>
        <Image
          src={"/assets/cafe-3.jpg"}
          height={383}
          width={1440}
          alt="Cafe"
          quality={100}
          layout="responsive"
          className="bg-no-repeat w-full h-auto bg-cover bg-center"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className={`${roboto.className} antialiased lg:text-[64px] sm:text-[48px] text-wrap text-white`}>Find a business, make <i>yours</i> known.</h2>
        </div>
      </div>

      <div className="h-auto bg-[#C6D3BC] px-12 py-32">
        <h1 className={`${roboto.className} antialiased text-[32px] mb-6`}>Go Digital</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex justify-between gap-4 bg-[#ECF0E9] p-4 rounded-2xl">
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px]">Find businesses faster</h3>
              <p>Use our site to find businesses closest to you.</p>
            </div>
            <FontAwesomeIcon icon={faMapPin} className="text-[124px]" />
          </div>
          <div className="flex justify-between gap-4 bg-[#ECF0E9] p-4 rounded-2xl">
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px]">Add your own</h3>
              <p>Have your own hustle? Make it known!</p>
            </div>
            <FontAwesomeIcon icon={faDumbbell} className="text-[124px]" />
          </div>
          <div className="flex justify-between gap-4 bg-[#ECF0E9] p-4 rounded-2xl">
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px]">Sort, categorize and rate</h3>
              <p>Utilize our functionality to fine-tune your selection.</p>
            </div>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[124px]" />
          </div>
        </div>
      </div>


      <div className="h-auto bg-[#C6D3BC] p-12">
        <h1 className="font-serif text-[24px] mb-4">Top trending businesses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          

          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            {/* Business Logo */}
            <img src='' alt='' className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />

            {/* Business Name */}
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">ainsidnis</h1>

            {/* Rating */}
            <div className="text-yellow-500 text-center mb-2">
              <span className="font-medium text-gray-700">Rating:</span> 4 ⭐
            </div>

            {/* Description */}
            <p className="text-gray-600 text-center mb-4">sadnoadjsnojanjcdsakcnodsknc</p>

            {/* Location */}
            <h3 className="text-sm text-center font-semibold text-gray-700 mb-2">Kena</h3>

            {/* Category */}
            <em className="block text-center text-blue-500 font-semibold text-sm mb-4">Food</em>

            {/* Contact Information */}
            <div className="text-center text-gray-500 font-medium">
              <h5>020320320</h5>
            </div>
          </div>

          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            {/* Business Logo */}
            <img src='' alt='' className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />

            {/* Business Name */}
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">ainsidnis</h1>

            {/* Rating */}
            <div className="text-yellow-500 text-center mb-2">
              <span className="font-medium text-gray-700">Rating:</span> 4 ⭐
            </div>

            {/* Description */}
            <p className="text-gray-600 text-center mb-4">sadnoadjsnojanjcdsakcnodsknc</p>

            {/* Location */}
            <h3 className="text-sm text-center font-semibold text-gray-700 mb-2">Kena</h3>

            {/* Category */}
            <em className="block text-center text-blue-500 font-semibold text-sm mb-4">Food</em>

            {/* Contact Information */}
            <div className="text-center text-gray-500 font-medium">
              <h5>020320320</h5>
            </div>
          </div>

          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            {/* Business Logo */}
            <img src='' alt='' className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />

            {/* Business Name */}
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">ainsidnis</h1>

            {/* Rating */}
            <div className="text-yellow-500 text-center mb-2">
              <span className="font-medium text-gray-700">Rating:</span> 4 ⭐
            </div>

            {/* Description */}
            <p className="text-gray-600 text-center mb-4">sadnoadjsnojanjcdsakcnodsknc</p>

            {/* Location */}
            <h3 className="text-sm text-center font-semibold text-gray-700 mb-2">Kena</h3>

            {/* Category */}
            <em className="block text-center text-blue-500 font-semibold text-sm mb-4">Food</em>

            {/* Contact Information */}
            <div className="text-center text-gray-500 font-medium">
              <h5>020320320</h5>
            </div>
          </div>

          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            {/* Business Logo */}
            <img src='' alt='' className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />

            {/* Business Name */}
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">ainsidnis</h1>

            {/* Rating */}
            <div className="text-yellow-500 text-center mb-2">
              <span className="font-medium text-gray-700">Rating:</span> 4 ⭐
            </div>

            {/* Description */}
            <p className="text-gray-600 text-center mb-4">sadnoadjsnojanjcdsakcnodsknc</p>

            {/* Location */}
            <h3 className="text-sm text-center font-semibold text-gray-700 mb-2">Kena</h3>

            {/* Category */}
            <em className="block text-center text-blue-500 font-semibold text-sm mb-4">Food</em>

            {/* Contact Information */}
            <div className="text-center text-gray-500 font-medium">
              <h5>020320320</h5>
            </div>
          </div>

          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            {/* Business Logo */}
            <img src='' alt='' className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />

            {/* Business Name */}
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">ainsidnis</h1>

            {/* Rating */}
            <div className="text-yellow-500 text-center mb-2">
              <span className="font-medium text-gray-700">Rating:</span> 4 ⭐
            </div>

            {/* Description */}
            <p className="text-gray-600 text-center mb-4">sadnoadjsnojanjcdsakcnodsknc</p>

            {/* Location */}
            <h3 className="text-sm text-center font-semibold text-gray-700 mb-2">Kena</h3>

            {/* Category */}
            <em className="block text-center text-blue-500 font-semibold text-sm mb-4">Food</em>

            {/* Contact Information */}
            <div className="text-center text-gray-500 font-medium">
              <h5>020320320</h5>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
