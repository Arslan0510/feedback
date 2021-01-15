import React from 'react'
import { NoProjects } from '../../../../../assets'
import { NoContent, ProjectCard } from '../../../../../components'

const RecentProjects = ({ recentFeedbacks }) => {
    return (
        <div className="row w-100 p-0 m-0">
            {recentFeedbacks.length > 0 ?
                recentFeedbacks.map(el => (
                    <ProjectCard project={el} />
                ))
                :
                <NoContent titl="There are currently no projects" imgSrc={NoProjects} />
            }
        </div>
    )
}

export default RecentProjects
