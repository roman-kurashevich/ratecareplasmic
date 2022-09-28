import * as React from "react";
import * as ph from "@plasmicapp/host";
import { supabase } from "../utils/supabaseClient";

import { PlasmicHomepage } from "../components/plasmic/ratecare/PlasmicHomepage";
import { useRouter } from "next/router";
import enforceAuth from "../utils/enforceAuth";

function Homepage() {
  const router = useRouter()

  return (
    <ph.PageParamsProvider params={useRouter().query} query={useRouter().query}>
      <PlasmicHomepage 
        logoutButton={{
          onClick: async () => {
            await supabase.auth.signOut();
            router.replace('/login');
          }
        }}
      />
    </ph.PageParamsProvider>
  );
}

export const getServerSideProps = enforceAuth();

export default Homepage;
