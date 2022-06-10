// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
          primary: "#07D3D3",
					secondary: "#00FFBB",
					accent: "#3A4256",
					neutral: "#447F86",
					"base-100": "#ffffff",
				},
			},
      "dracula",
		],
	},
}