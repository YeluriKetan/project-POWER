module.exports = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@use "colors";\n@use "./mixin.scss" as mixins;\n@import "./_mantine.scss";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        // pathname: "/my-bucket/**",
        pathname: "/v0/b/power-becec.appspot.com/o/**",
      },
    ],
  },
};
