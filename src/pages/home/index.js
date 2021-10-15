import StayHome from '../../assets/stay-home.png'
import Check from '../../assets/check.png'
import Header from '../../components/header';

export default function Home() {
    return (
       <div className='w-full h-screen'>
           {/*
           <nav className="bg-white shadow-lg">
		<div className="max-w-6xl mx-auto px-4">
			<div className="flex justify-between">
				<div className="flex space-x-7">
					<div>
						<a href="#" className="flex items-center py-4 px-2" >
							<img src="logo.png" alt="Logo" classNameName="h-8 w-8 mr-2" />
							<span className="font-semibold text-gray-500 text-lg"
								>Navigation</span
							>
						</a>
					</div>
					<div className="hidden md:flex items-center space-x-1">
						<a
							href=""
							className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
							>Home</a
						>
						<a
							href=""
							className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>Services</a
						>
						<a
							href=""
							className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>About</a
						>
						<a
							href=""
							className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>Contact Us</a
						>
					</div>
				</div>
			</div>
		</div>
	</nav>*/}
          <Header />
          <div className='flex flex-row'>
              <div className='mt-36 w-full h-auto flex flex-col justify-start items-center'>
                <p className='text-7xl text-center'>Organize sua vida com o Planner!</p>
                <p className='mt-6 text-4xl text-center'>Facilite seu trabalho utilizando a ferramenta para:</p>
                <div>
                    <div className='flex flex-row justify-center items-center'>
                    <img src={Check} alt=''/>
                    <p className='ml-4 text-primary'>Finanças</p>
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                    <img src={Check} alt=''/>
                    <p className='ml-4 text-primary'>Finanças</p>
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                    <img src={Check} alt=''/>
                    <p className='ml-4 text-primary'>Finanças</p>
                    </div>
                </div>
              </div>
              <div className='w-full flex flex-col justify-center items-end mr-24'>
                <img className='h-128 w-128' src={StayHome} alt='Stay Home'/>
                <button className='mt-8 w-80 h-14 text-2xl text-white bg-alert border border-black rounded-xl'>Experimente Já</button>
              </div>
          </div>
       </div>
    );
}