import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "../../utils/queries";
import ProjectList from '../ProjectList'
import Landingpage from "../landingPage";
const Home = () => {
const {loading, data} = useQuery(QUERY_PROJECTS)

const projects = data?.projects || [];
console.log(projects)



return (
    <main>
      <div className='flex-row justify-space-between'>
        <Landingpage></Landingpage>
        <div className='col-12 mb-3'>
            {loading ? (
                <div>loading...</div>
            ):(
                <ProjectList projects={projects} title="Some Feed for Project(s)..."/>
            )}
        </div>
      </div>
    </main>
  );
};

export default Home;