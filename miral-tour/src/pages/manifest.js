export default function manifest() {
  return {
    name: "Miral Tour",
    short_name: "Miral Tour",
    description:
      "Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. Book now and create lasting memories!",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/img/mini_logo.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
