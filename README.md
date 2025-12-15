## Next Js Practise Project
```bash
* First Practise Project
* I have expreience in react js
* I have also contribution in react js 
* Using Tailwind Css
* ShadCn

## Learning
________________
* make a loading page for loading, page name must be (loading.js) small letter no   spleing misatke.
* crate a not found page for showing any not founding page, page name must be (not-found.js)

            **image Optimization**
        ___________________________
* For Extrnal Image : make sure next.config.js file this type 
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};
module.exports = nextConfig;

* Image have must be width and height
* For Local Image : make a assests folder in scr folder. and import this image  preveous type like react. not must be requerd width and height like extarnal image. 