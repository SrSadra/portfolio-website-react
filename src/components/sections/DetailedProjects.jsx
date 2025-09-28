"use client"


import { getSummaryProjects } from '../../app/actions/projects';
import RevealFramer from '../RevealFramer'
import { useQuery } from '@tanstack/react-query'


const DetailedProjects = () => {

    const { data, isLoading } = useQuery({
        queryKey: ["projects", "projects-summary"],
        queryFn: getSummaryProjects
    });

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <section id='projects' className='min-h-screen flex justify-center items-center py-2'>
            <RevealFramer>
                <div className='max-w-full mx-auto px-4'>
                    <h2 className='text-5xl bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent text-center font-bold my-10'>Featured Projects</h2>
                    <div className='grid grid-cols-1 gap-5 w-full'>
                        {data && data.map((rep) => (<div key={rep.id} className='my-2 w-[100vw] flex-col items-center justify-center'>
                            <table className='mx-auto'>
                                <thead>
                                <tr>
                                    <th className='px-6 text-left text-xl xl:text-4xl'>{rep.name}</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <td className='py-4 px-6 text-gray-400 text-xl text-left w-[30vw]'>
                                            <p>{rep.desc ? rep.desc : ":)"}</p>
                                        </td>
                                    <td className='py-4 px-6 text-center text-sm xl:text-3xl'>
                                        <ul className='flex w-[20vw] gap-4'>
                                            <li className='bg-gray-400 p-2 rounded-2xl text-black'>{rep.lang}</li>
                                        </ul>
                                    </td>
                                    <td className='py-4 px-6 text-center text-[13px] md:text-2xl'>
                                        <a className='text-cyan-500 hover:text-cyan-600' target='_blank' href={rep.repUrl}>View Project on Github</a>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>))}

                    </div>
                </div>

            </RevealFramer>
        </section>
    )
}

export default DetailedProjects
