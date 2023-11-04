import { ServiceDescription, ServiceTitle, ServicesData } from '../constants'

import FeatImage01 from '@/public/images/Defining-a-Strategy-Planning.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import { IServices } from '../interfaces'
import Image from 'next/image'

export default function Zigzag() {



  const defaultImage = <Image className="max-w-full mx-auto md:max-w-none h-auto" src={"/images/Defining-a-Strategy-Planning.png"} width={540} height={405} alt="Features 01" />
  const createDycnamicImage = (path: string) => <Image className="max-w-full mx-auto md:max-w-none h-auto" src={path} width={540} height={405} alt="Features 01" />
  

  const renderServices = (el: IServices, index: number) => {
    return (
      <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
        {/* Image */}
        <div className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 ${(index + 1) % 2 === 0 ? "rtl" : "md:order-1"}`} data-aos="fade-up">
          {el.icon ? createDycnamicImage(el.icon) : defaultImage}
        </div>
        {/* Content */}
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos={(index + 1) % 2 === 0 ? "fade-left" : "fade-right"}>
          <div className="md:pr-4 lg:pr-12 xl:pr-16">
            {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
            <h3 className="h3 mb-3">{el.title}</h3>
            <p className="text-xl text-gray-400 mb-4">{el.description}</p>
            {
              !!el.checkBoxes.length && <ul className="text-lg text-gray-400 -mb-2">
                {el.checkBoxes?.map((item: string) => {
                  return (
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  )
                })}
              </ul>
            }

          </div>
        </div>
      </div>
    )
  }



  return (
    <section id = "howWeDoIt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4">{ServiceTitle}</h1>
            <p className="text-xl text-gray-400">{ServiceDescription}</p>
          </div>
          <div className="grid gap-20">
            {
              ServicesData.map(renderServices)
            }
          </div>
        </div>
      </div>
    </section>
  )
}
