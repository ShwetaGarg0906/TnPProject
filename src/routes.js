import CompanyDetails from "./components/CompanyDetails";
import CompanyComponent from "./components/CompanyComponent";
import Home from "./components/Home";
import BarGraph from "./components/BarGraph";

export default [
  { path: "/", component: Home },
  {
    name: "Companies",
    path: "/companies/:searchString",
    component: CompanyComponent,
    props: true
  },
  {
    name: "CompanyDetails",
    path: "/company-details/:companyId",
    component: CompanyDetails,
    props: true
  },
  { path: "/bar", component: BarGraph }
];
