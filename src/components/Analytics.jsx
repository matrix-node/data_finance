import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={laptop} alt="analytics_laptop" className='w-[500px mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>DATA ANALTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p className=''>
                    Our data analytics dashboard empowers you to visualize key business metrics in real time. 
                    Track performance, uncover trends, and make data-driven decisions from a single, intuitive interface. 
                    With customizable reports and seamless integrations, you’ll gain clear insights that help drive growth and efficiency across your organization.
                </p>
                <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics