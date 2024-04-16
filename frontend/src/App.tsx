//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import {
  DengueInformationList,
  DengueInformationCreate,
  DengueInformationEdit,
} from './resources/DengueInformation';
import {
  PreventionTipsList,
  PreventionTipsCreate,
  PreventionTipsEdit,
} from './resources/PreventionTips';
import {
  SymptomsList,
  SymptomsCreate,
  SymptomsEdit,
} from './resources/Symptoms';
import {
  TreatmentOptionsList,
  TreatmentOptionsCreate,
  TreatmentOptionsEdit,
} from './resources/TreatmentOptions';
import {
  UserStoriesList,
  UserStoriesCreate,
  UserStoriesEdit,
} from './resources/UserStories';
import {
  ResourcesList,
  ResourcesCreate,
  ResourcesEdit,
} from './resources/Resources';
import DengueInformationIcon from '@mui/icons-material/Info';
import PreventionTipsIcon from '@mui/icons-material/LocalHospital';
import SymptomsIcon from '@mui/icons-material/LocalPharmacy';
import TreatmentOptionsIcon from '@mui/icons-material/Healing';
import UserStoriesIcon from '@mui/icons-material/People';
import ResourcesIcon from '@mui/icons-material/LibraryBooks';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/aa5f591c5">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="DengueInformation"
          options={{ label: 'Dengue Information' }}
          list={DengueInformationList}
          create={DengueInformationCreate}
          edit={DengueInformationEdit}
          recordRepresentation="title"
          icon={DengueInformationIcon}
        />
        <Resource
          name="PreventionTips"
          options={{ label: 'Prevention Tips' }}
          list={PreventionTipsList}
          create={PreventionTipsCreate}
          edit={PreventionTipsEdit}
          recordRepresentation="tipTitle"
          icon={PreventionTipsIcon}
        />
        <Resource
          name="Symptoms"
          options={{ label: 'Symptoms' }}
          list={SymptomsList}
          create={SymptomsCreate}
          edit={SymptomsEdit}
          recordRepresentation="symptomName"
          icon={SymptomsIcon}
        />
        <Resource
          name="TreatmentOptions"
          options={{ label: 'Treatment Options' }}
          list={TreatmentOptionsList}
          create={TreatmentOptionsCreate}
          edit={TreatmentOptionsEdit}
          recordRepresentation="treatmentName"
          icon={TreatmentOptionsIcon}
        />
        <Resource
          name="UserStories"
          options={{ label: 'User Stories' }}
          list={UserStoriesList}
          create={UserStoriesCreate}
          edit={UserStoriesEdit}
          recordRepresentation="storyTitle"
          icon={UserStoriesIcon}
        />
        <Resource
          name="Resources"
          options={{ label: 'Resources' }}
          list={ResourcesList}
          create={ResourcesCreate}
          edit={ResourcesEdit}
          recordRepresentation="resourceName"
          icon={ResourcesIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;