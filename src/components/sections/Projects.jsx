import RevealFramer from '../RevealFramer'

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen flex justify-center items-center py-2'>

        <RevealFramer>
      <div className='max-w-5xl mx-auto px-4'> 
        <h2 className='text-5xl bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent text-center font-bold my-10'>Featured Projects</h2>
        <div className='grid grid-cols-1 gap-5 w-300'>
            <div >
                <table className='my-2'>
                    <tr>
                        <th className='px-6 text-left text-4xl'>ajab</th>
                    </tr>
                    <tr >
                        <td className='py-4 px-6 text-gray-400 text-3xl text-left w-120'>
                            <p>test</p>
                        </td>
                        <td className='py-4 px-6 text-center text-3xl'>
                            <ul className='flex w-50 gap-4'>
                                <li>aa</li>
                                <li>aa</li>
                                <li>aa</li>
                                <li>aa</li>
                            </ul>
                        </td>
                        <td className='py-4 px-6 text-center text-3xl'>
                            <a className='text-cyan-500 hover:text-cyan-600' href=''>View Project on Github</a>
                        </td>
                    </tr>
                </table>
            </div>
            <div >
                <table className='my-2'>
                    <tr>
                        <th className='px-6 text-left text-4xl'>ajab</th>
                    </tr>
                    <tr >
                        <td className='py-4 px-6 text-gray-400 text-3xl text-left w-120'>
                            <p>test</p>
                        </td>
                        <td className='py-4 px-6 text-center text-3xl'>
                            <ul className='flex w-50 gap-4'>
                                <li>aa</li>
                                <li>aa</li>
                                <li>aa</li>
                                <li>aa</li>
                            </ul>
                        </td>
                        <td className='py-4 px-6 text-center text-3xl'>
                            <a className='text-cyan-500 hover:text-cyan-600' href=''>View Project on Github</a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
      </div>

      </RevealFramer>
    </section>
  )
}

export default Projects
