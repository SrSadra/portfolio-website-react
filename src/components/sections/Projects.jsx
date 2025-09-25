"use server"

import { hydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient } from '../../app/get-query-client'
import DetailedProjects from './DetailedProjects';
import { getSummaryProjects } from '../../app/actions/projects';


const Projects = async () => {
    const queryClient = getQueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["projects" , "projects-summary"],
        queryFn: getSummaryProjects,
    })

  return (
      <HydrationBoundary state={hydrate(queryClient)}>
          <DetailedProjects />
    </HydrationBoundary>
  )
}

export default Projects
