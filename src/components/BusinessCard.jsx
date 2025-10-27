import rytchie from '/src/assets/rytchie.jpg';

const BusinessCard = () => {
  return (
    <div className="lg:flex ">
        <div className="m-0 p-0 w-4/5 rounded-lg mx-auto h-screen text-white bg-[#23252C] items-center">
            <div className="flex flex-col items-center">
                <img className="h-1/4 w-full m-0 rounded-lg" src={rytchie} alt="profile"/>
                <h1 className="font-bold text-center pt-5 pb-1 text-xl">Rytchie Macharia</h1>
                <h2 className="text-center text-[#F3BF99]">Frontend Developer</h2>
                <h6>rytchiemacharia.tech</h6>
            </div>
            <div className="flex justify-center space-x-4 py-5">
                <button className="bg-[#FFFFFF] text-[#23252C] py-2 px-6 rounded">Email</button>
                <button className="border-2 border-[#FFFFFF] text-[#F3BF99] py-2 px-6 rounded">LinkedIn</button>
            </div>
            <div>
                <h3 className="font-bold px-5 pt-5">About</h3>
                <p className="px-5 text-sm">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div>
                <h3 className="font-bold px-5 pt-5">Interests</h3>
                <p className="px-5 text-sm pb-5">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            <div className="mt-auto">
                <footer className="bg-[#1A1B20] text-center py-3 text-sm">
                    <p>© 2024 rytchie macharia. All rights reserved.</p>
                </footer>
            </div>
        </div>
    </div>
  )
}

export default BusinessCard