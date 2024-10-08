import Head from "next/head";
import React from "react";
import { Bars } from "react-loader-spinner";
function Loader() {
  return (
    <>
      <Head>
        <title>Miral Tour</title>
      </Head>
      <div className="loader_main">
        <Bars
          height={80}
          width={80}
          color="#4fa94d"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      </div>
    </>
  );
}

export default Loader;
