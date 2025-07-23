'use client'

import Image from 'next/image'

export default function ServicesHeader() {
  return (
    <section className="relative w-screen h-screen px-8 flex justify-center items-center text-center max-md:h-auto">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="relative w-[100px] h-[100px] rounded-4 mb-8 border-[0.25rem] border-custom-accent3 outline outline-[0.25rem] outline-custom-fg overflow-hidden">
          <Image
            src="/images/services-header/portrait.jpeg"
            alt="Otis Valen Portrait"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xl font-semibold font-narrow leading-[1.125]">Your ideas. My toolbox.</p>
        <div className="mb-24">
          <h1>Pixel wizardry</h1>
          <h1>served fresh</h1>
        </div>
        <div>
          <h1>&#8595;</h1>
        </div>
      </div>
    </section>
  )
}