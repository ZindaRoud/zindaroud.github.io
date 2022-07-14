import ReactGA from "react-ga";
import React, { useState, useEffect } from "react";

function Tracking() {
  useEffect(() => {
    ReactGA.initialize("UA-233746466-1", {
      testMode: process.env.NODE_ENV === "test",
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
}

export { Tracking };
