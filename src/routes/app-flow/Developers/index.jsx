import React from "react";
import { DeveloperCard, Layout } from "../../../components";

import "./developers.css";

const Developers = () => {
  return (
    <Layout title='Developers'>
      <div class='container'>
        <div class='row mb-2'>
          <DeveloperCard
            about='This is a wider card with supporting text below as a natural
                  lead-in to additional content.'
            joining='Nov 12'
            name='Developer 1'
            tag='ROR'
          />
          <DeveloperCard
            about='This is a wider card with supporting text below as a natural
                  lead-in to additional content.'
            joining='Nov 15'
            name='Developer 2'
            tag='Designer'
          />
        </div>
      </div>
    </Layout>
  );
};

export default Developers;
