import React from 'react'

function Dashboard() {
  return (
    <>
    <div className="bg-[#2c2c2c] w-full space-y-5 text-center  py-6">
      <div className="ClashDisplay-Medium text-2xl">What email do you want to write today?</div>
      <form className="max-w-2xl mx-auto">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className=" w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
          {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button> */}
        </div>
      </form>
      <div className="ClashDisplay-Light text-sm">Tip: the more details you describe above, the better!</div>
    </div>
    <div className=" py-8 bg-[#1e1e1e] relative overflow-hidden hide-scroll">
      <div className='ClashDisplay-Medium text-2xl pl-9 '>Choose Email Type</div>
      <div className='flex gap-4  overflow-x-auto w-full p-3 px-9 relative  '>
        <div className="bg-gradient-to-r from-[#139EBC] to-[#AA1ECD] p-[2px] min-w-[370px] rounded-xl">
          <div className="h-[180px] w-full bg-neutral-700 rounded-[10px] p-3 space-y-1">
            <img src="/mail.svg" alt="" />
            <div className="ClashDisplay-Semibold text-lg tracking-wider ">Formal Email</div>
            <div className='ClashDisplay-Reguler text-base'>A formal email is used when conducting business with a new associate or executive, sending a professional inquiry, or corresponding about a job.</div>
          </div>
        </div>
        <div className="h-[184px] min-w-[374px] bg-neutral-700 rounded-[10px] border-2 border-[#575757] p-3 space-y-1">
        <img src="/mail.svg" alt="" />
            <div className="ClashDisplay-Semibold text-lg tracking-wider ">School Email</div>
            <div className='ClashDisplay-Reguler text-base'>A school email is an email address provided by an educational institution to its students, faculty, and staff. </div>
        </div>
        <div className="h-[184px] min-w-[374px] bg-neutral-700 rounded-[10px] border-2 border-[#575757] p-3 space-y-1">
        <img src="/mail.svg" alt="" />
            <div className="ClashDisplay-Semibold text-lg tracking-wider ">Thank You Email</div>
            <div className='ClashDisplay-Reguler text-base'>Writing a thank-you note or email is a way to show how much you appreciate the recipient.</div>
        </div>
        <div className="h-[184px] min-w-[374px] bg-neutral-700 rounded-[10px] border-2 border-[#575757] p-3 space-y-1">
        <img src="/mail.svg" alt="" />
            <div className="ClashDisplay-Semibold text-lg tracking-wider ">Testimonial Email</div>
            <div className='ClashDisplay-Reguler text-base'>Testimonials lend social proof to your business, but they also show that you care about what your customers think.</div>
        </div>
        <div className="h-[184px] min-w-[374px] bg-neutral-700 rounded-[10px] border-2 border-[#575757] p-3 space-y-1">
        <img src="/mail.svg" alt="" />
            <div className="ClashDisplay-Semibold text-lg tracking-wider ">Informal Email</div>
            <div className='ClashDisplay-Reguler text-base'>An informal email is a casual, relaxed form of electronic communication typically used between friends, family, or close colleagues. </div>
        </div>
      </div>
      <div className=''>
        <div className='ClashDisplay-Medium text-2xl pl-9 pt-9 '>Projects</div>
        <div className="w-full text-center ClashDisplay-Reguler text-base mt-10">You don’t have any projects yet</div>
      </div>
    </div>
    </>
  )
}

export default Dashboard