import { FC } from "react";
import { compose } from "@reduxjs/toolkit";

import { withRedux } from "./with-redux";
import { withAuth } from "./with-auth";
import { withQuery } from "./with-query";

export const withProviders = compose<FC>(withQuery, withRedux, withAuth);
