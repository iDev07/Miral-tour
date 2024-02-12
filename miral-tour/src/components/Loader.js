import Head from "next/head";
import React from "react";
import { LineWave } from "react-loader-spinner";
function Loader() {
  return (
    <>
      <div align="center" className="loeader_main">
        <LineWave
          height={100}
          width={100}
          color="#4fa94d"
          ariaLabel="line-wave"
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
