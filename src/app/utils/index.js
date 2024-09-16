const gilams = [
  {
    id: 1,
    image: "/assets/images/gilam1.png",
    g_width: 320,
    g_height: 300,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 2,
    image: "/assets/images/gilam2.png",
    g_width: 220,
    g_height: 350,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 3,
    image: "/assets/images/gilam3.png",
    g_width: 120,
    g_height: 300,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 4,
    image: "/assets/images/gilam1.png",
    g_width: 320,
    g_height: 300,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 5,
    image: "/assets/images/gilam2.png",
    g_width: 220,
    g_height: 350,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 6,
    image: "/assets/images/gilam3.png",
    g_width: 120,
    g_height: 300,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 7,
    image: "/assets/images/gilam1.png",
    g_width: 320,
    g_height: 300,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 8,
    image: "/assets/images/gilam2.png",
    g_width: 220,
    g_height: 350,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 9,
    image: "/assets/images/gilam3.png",
    g_width: 120,
    g_height: 300,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 10,
    image: "/assets/images/gilam1.png",
    g_width: 320,
    g_height: 300,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 11,
    image: "/assets/images/gilam2.png",
    g_width: 220,
    g_height: 350,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 12,
    image: "/assets/images/gilam3.png",
    g_width: 120,
    g_height: 300,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 13,
    image: "/assets/images/gilam1.png",
    g_width: 320,
    g_height: 300,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 14,
    image: "/assets/images/gilam2.png",
    g_width: 220,
    g_height: 350,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 15,
    image: "/assets/images/gilam3.png",
    g_width: 120,
    g_height: 300,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 16,
    image: "/assets/images/gilam1.png",
    g_width: 320,
    g_height: 300,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 17,
    image: "/assets/images/gilam2.png",
    g_width: 220,
    g_height: 350,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 18,
    image: "/assets/images/gilam3.png",
    g_width: 120,
    g_height: 300,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 19,
    image: "/assets/images/gilam1.png",
    g_width: 320,
    g_height: 300,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 20,
    image: "/assets/images/gilam2.png",
    g_width: 220,
    g_height: 350,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
  {
    id: 21,
    image: "/assets/images/gilam3.png",
    g_width: 120,
    g_height: 300,
    name: "Sanat Docu 3455",
    price: 999,
    color: "#C4A579",
  },
];

const Icons = {
  rect: () => (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4167 0.583374H2.58333C1.57081 0.583374 0.75 1.40419 0.75 2.41671V11.5834C0.75 12.5959 1.57081 13.4167 2.58333 13.4167H15.4167C16.4292 13.4167 17.25 12.5959 17.25 11.5834V2.41671C17.25 1.40419 16.4292 0.583374 15.4167 0.583374Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  colorPot: ({ color }) => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="11" fill={color || "black"} />
    </svg>
  ),
  bucket: ({ color }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.99967 14.1667C4.0792 14.1667 3.33301 14.9129 3.33301 15.8333C3.33301 16.7538 4.0792 17.5 4.99967 17.5C5.92015 17.5 6.66634 16.7538 6.66634 15.8333C6.66634 14.9129 5.92015 14.1667 4.99967 14.1667ZM4.99967 14.1667H14.1663M4.99967 14.1667V2.5H3.33301M14.1663 14.1667C13.2459 14.1667 12.4997 14.9129 12.4997 15.8333C12.4997 16.7538 13.2459 17.5 14.1663 17.5C15.0868 17.5 15.833 16.7538 15.833 15.8333C15.833 14.9129 15.0868 14.1667 14.1663 14.1667ZM4.99967 4.16667L16.6663 5L15.833 10.8333H4.99967"
        stroke={color || "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  share: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.25001 8.91666L12.75 6.08332M7.25001 11.0834L12.75 13.9167M7.5 10C7.5 11.3807 6.38071 12.5 5 12.5C3.61929 12.5 2.5 11.3807 2.5 10C2.5 8.61929 3.61929 7.5 5 7.5C6.38071 7.5 7.5 8.61929 7.5 10ZM17.5 5C17.5 6.38071 16.3807 7.5 15 7.5C13.6193 7.5 12.5 6.38071 12.5 5C12.5 3.61929 13.6193 2.5 15 2.5C16.3807 2.5 17.5 3.61929 17.5 5ZM17.5 15C17.5 16.3807 16.3807 17.5 15 17.5C13.6193 17.5 12.5 16.3807 12.5 15C12.5 13.6193 13.6193 12.5 15 12.5C16.3807 12.5 17.5 13.6193 17.5 15Z"
        stroke="#282828"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  phone: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.77777 11.942C2.82977 10.29 2.37177 8.93998 2.09577 7.57198C1.68777 5.54798 2.62177 3.57098 4.16877 2.30898C4.82277 1.77598 5.57277 1.95898 5.95977 2.65198L6.83277 4.21898C7.52477 5.46098 7.87076 6.08098 7.80276 6.73898C7.73376 7.39798 7.26677 7.93398 6.33377 9.00598L3.77777 11.942ZM3.77777 11.942C5.69677 15.288 8.70777 18.302 12.0578 20.222M12.0578 20.222C13.7108 21.17 15.0598 21.628 16.4278 21.904C18.4518 22.312 20.4288 21.378 21.6898 19.831C22.2238 19.177 22.0408 18.427 21.3478 18.04L19.7808 17.167C18.5388 16.475 17.9188 16.129 17.2608 16.197C16.6018 16.266 16.0658 16.733 14.9938 17.666L12.0578 20.222ZM13.9998 6.83198C15.4252 7.43931 16.5604 8.57454 17.1678 9.99998M14.6538 1.99998C16.3979 2.50648 17.9858 3.44543 19.2701 4.72968C20.5543 6.01393 21.4933 7.60183 21.9998 9.34598"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export { Icons, gilams };
