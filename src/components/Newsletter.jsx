

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tip & tricks to optimize you flow? </h1>
                <p>Sign up for our newsletter and stay update!</p>
                <div className="my-4">
                    <div>
                        <input className="p-3 flex w-full rounded-md bg-white" type="emai" placeholder="Enter email" />
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto ml-4 my-6 py-3 text-black'>
                            Notify Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter