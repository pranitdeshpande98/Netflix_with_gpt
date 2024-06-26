export const LOGO = 
"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const SIGNOUT = 
"https://icon-library.com/images/netflix-icon-transparent/netflix-icon-transparent-29.jpg";
export const BG_IMAGE = 
"https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/3152e5c9-a0d5-495b-ab03-073a70c5d268/US-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34f5ff74-a994-4852-b27c-f4196ec21c67_small.jpg";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
  export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
    }
  };
  
export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name:"English"},
  {identifier: "hi", name:"Hindi"},
  {identifier: "es", name:"Spanish"},
  {identifier: "mr", name:"Marathi"},
]


export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;