import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "../utils/queries";
import ProjectList from '../components/ProjectList'
import OfferForm from '../components/OfferForm'
import Auth from '../utils/auth'
const Home = () => {
const {loading, data} = useQuery(QUERY_PROJECTS)

const projects = data?.projects || [];
const loggedIn = Auth.loggedIn();
console.log(projects)



return (
    <main>
      <div className='flex-row justify-space-between'>
        {loggedIn && ( 
          <div className="col-12 mb-3">
            <OfferForm/>
            </div>
        )}
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