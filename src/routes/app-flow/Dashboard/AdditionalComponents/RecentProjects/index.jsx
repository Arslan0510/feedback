import React from 'react'
import { NoProjects } from '../../../../../assets'
import { NoContent, ProjectCard } from '../../../../../components'
import DashboardItem from '../DashboardItem'

const RecentProjects = ({ recentFeedbacks }) => {
    return (
        <DashboardItem title="Recent projects">
            <div className="row w-100 p-0 m-0">
                {recentFeedbacks.length > 0 ?
                    recentFeedbacks.map(el => (
                        <ProjectCard project={el} />
                    ))
                    :
                    <NoContent titl="There are currently no projects" imgSrc={NoProjects} />
                }
            </div>
        </DashboardItem>
    )
}

export default RecentProjects
