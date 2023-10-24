export const metadata = {
    title: 'IET MPSTME ',
    description: 'Page description',
  }
  
  import '../../../../css/card.css'
  import prabir from '../../../../../public/images/prabir.jpeg'
  import Link from 'next/link'
  import Image from 'next/image'
  import Footer from '@/components/ui/footer'
  import hero from '@/public/images/oldimages/iet.png'    
  import '@/app/css/changes.css'

  import Flagships from '@/components/flagships'

  export default function ResetPassword() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20 logo-fix ">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 mb-4">IET</h1>
            </div>
  
            {/* Form */}
          <Image src={hero} alt="TRC"width={3000} height={3000} />
  
          <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Our Vision.</h2>
              <p className="text-xl text-gray-400"> The Institution of Engineering and Technology is a multidisciplinary professional engineering institution, based in the United Kingdom. 🇬🇧 The IET seeks to inspire, inform, and influence the global 🌏 engineering community to usher it towards a brighter future. It has strived tirelessly to share knowledge 💡 that helps make better sense of the world to solve the challenges that matter.</p> 
              </div>
            
              <Flagships
            events={[
              {
                description:"              Facilitates interaction and collaboration between students from various departments. Polishes hard skills of formal communication, digital content creation, etc. With events like BOTSON HACK N CODE INDUTRIALS VISITS                 " ,
              },
            ]}
/>
  
            
  
          </div>
        </div>
      </section>
  
          </div>
        </div>
        <Footer />
  
      </section>
      
    )
  }
  